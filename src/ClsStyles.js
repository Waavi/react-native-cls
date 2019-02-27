import { StyleSheet } from 'react-native'
import classnames from 'classnames'
import omit from './utils/omit'

/**
	ClsStyles is an object that is able to return a set of styling objects based on a given string with "classes" separated by a space.
	It tries to replicate the CSS class functionality.
	It uses internally 'classnames' to use objects instead of a string separated by spaces.
	Additionally, it memoize the result to improve the performance avoiding calculating again a again the same styles

	@param mapping
	Override this with a custom mapping to get multiple points to style
	Ex: mapping = {
		view: null,
		label: null,
		text: null
	}

	@param styles: the object with all the styling attributes. It must have the same structure as the mapping.
	Ex: for simple mapping (null or {})
	styles = {
		_base: { ... }, // default styling
		small: { ... }, // styling when 'small' is present in cls
	}
	Ex: for complex mapping
	styles = {
		_base: {
			view: { ... }, // default view styling
			label: { ... }, // default label styling
			text: { ... }, // default text styling
			_config: { ... } // default configuration data (it won't be processed as StyleSheet)
		},
		small: {
			view: { ... }, // view styling when 'small' is present in cls
			label: { ... }, // label styling when 'small' is present in cls
			text: { ... }, // text styling when 'small' is present in cls
			_config: { ... } // configuration data when 'small' is present in cls (it won't be processed as StyleSheet)
		},
	}

	@param clsStyles: if it's set, it will be used as internal clsStyles, ignoring the styles param.
*/
export default class ClsStyles {
	constructor({ mapping, styles, clsStyles, clsConfigs }) {
		this.hasMapping = typeof mapping === 'object' && Object.keys(mapping).length > 0
		this.mapping = this.hasMapping ? mapping : {}
		this.mappingKeys = Object.keys(this.mapping)
		if (clsStyles) {
			this.clsStyles = clsStyles
			this.clsConfigs = clsConfigs || {}
		} else if (this.hasMapping) {
			this.clsStyles = Object.keys(styles).reduce(
				(result, key) => ({
					...result,
					[key]: StyleSheet.create(omit(styles[key], '_config')),
				}),
				{}
			)
			this.clsConfigs = Object.keys(styles).reduce(
				(result, key) => ({ ...result, [key]: styles[key]._config }),
				{}
			)
		} else {
			this.clsStyles = StyleSheet.create(styles)
			this.clsConfigs = {}
		}
	}

	/**
	 * Gets the corresponding style object from a given string with "classes" separated by spaces.
	 * @param {string} clsString string with "classes" separated by spaces.
	 * @returns {Object|Object[]}
	 */
	_getStylesFromString = clsString => {
		const baseClsStyles = this.clsStyles._base || {}
		// An array with each 'class' for their corresponding cls (class)
		const clsNamesArray =
			typeof clsString === 'string'
				? clsString.split(' ').filter(clsName => clsName.length > 0)
				: []
		// An array with each style for their corresponding cls (class)ç
		const clsStylesArray = clsNamesArray
			.map(clsName => {
				const clsStyle = this.clsStyles[clsName]
				if (__DEV__ && clsStyle === undefined) {
					console.warn(`ClsStyle.getStyles : ${clsName} is not a registered "class"`)
				}
				return clsStyle
			})
			.filter(clsStyle => clsStyle !== undefined)
		if (clsStylesArray.length > 0) {
			// Add the base style (default)
			const stylesArray = [baseClsStyles, ...clsStylesArray]
			if (this.hasMapping) {
				// For each mapping, we get the merge of their styles (i.e. an array of them)
				const stylesMappedArray = this.mappingKeys.reduce(
					(result, key) => ({
						...result,
						[key]: stylesArray
							.filter(style => style[key] !== undefined)
							.map(style => style[key]),
					}),
					{}
				)
				// We will add every extra configuration data into _config and return it merged. It won't be proccessed as StyleSheet
				const _config = clsNamesArray.reduce(
					(result, clsName) => ({ ...result, ...this.clsConfigs[clsName] }),
					{}
				)
				return { ...stylesMappedArray, _config }
			}
			return stylesArray
		}
		return baseClsStyles
	}

	/**
	 * Gets the final style object from a 'classname object'.
	 * @param {string|Object|(string|Object)[]} cls object passed to 'classnames' function to get a string representation.
	 * Check the 'classnames' documentation to know more (https://github.com/JedWatson/classnames).
	 * @param {ClsCache} [cache] cache implementation. It can be a 'ClsCache' class or your own that implement 'get' and 'set' functions.
	 * @returns {Object|Object[]}
	 */
	getStyles = (cls, cache) => {
		const clsString = classnames(cls)
		if (cache) {
			const cached = cache.get(clsString)
			if (cached) {
				return cached
			}
			const result = this._getStylesFromString(clsString)
			cache.set(clsString, result)
			return result
		}
		return this._getStylesFromString(clsString)
	}
	/**
	 * Legacy method (deprecated, replace it for 'getStyles')
	 * @param {string} cls check 'getStyles' function
	 */
	obtainStyles = cls => {
		console.warn(
			"Using deprecated 'obtainStyles' method for 'ClsStyles' (use 'getStyles' instead)"
		)
		this.getStyles(cls)
	}

	/**
	 * Creates a ClsStyles instance with the given mapping and styles
	 * @param {Object} obj the object with parameters
	 * @param {Object} obj.mapping the mapping object that represent the structure
	 * @param {Object} obj.styles the styles object with the same structure that 'mapping'
	 * @returns {ClsStyles}
	 */
	static create = ({ mapping, styles }) => {
		if (typeof styles !== 'object') {
			throw new Error('ClsStyle.create : the styles must be an object')
		}
		return new ClsStyles({ mapping, styles })
	}

	/**
	 * Given a mapping with only 1 "mapping key", it creates a clone of this ClsStyle
	 * object (without mapping) with its styles within the given mapping.
	 * @param {Object} mapping the mapping object that represent the structure
	 * @returns {ClsStyles}
	 */
	withMapping = mapping => {
		if (this.hasMapping) {
			throw new Error('ClsStyle.withMapping : this ClsStyle already has a mapping')
		}
		if (typeof mapping !== 'object') {
			throw new Error('ClsStyle.withMapping : the mapping must be an object')
		}
		const mappingKeys = Object.keys(mapping)
		if (mappingKeys.length !== 1) {
			throw new Error('ClsStyle.withMapping : the mapping must be an object with only 1 key')
		}
		const mappingKey = mappingKeys[0]
		const clsStyles = Object.keys(this.clsStyles).reduce(
			(result, k) => ({ ...result, [k]: { [mappingKey]: this.clsStyles[k] } }),
			{}
		)
		return new ClsStyles({ mapping, clsStyles })
	}

	/**
	 * Creates a new ClsStyles instance merging all ClsStyles given within the array
	 * @param {ClsStyles[]} array set of ClsStyles instances to merge
	 * @returns {ClsStyles}
	 */
	static merge = array => {
		if (!Array.isArray(array) || array.length === 0) {
			throw new Error(
				'ClsStyle.merge : the argument must be an array with at least 1 ClsStyles'
			)
		}
		if (array.find(o => !(o instanceof ClsStyles)) !== undefined) {
			throw new Error('ClsStyle.merge : the argument must be an array of ClsStyles objects')
		}
		if (
			array.find(c => c.hasMapping) !== undefined &&
			array.find(c => !c.hasMapping) !== undefined
		) {
			throw new Error(
				'ClsStyle.merge : all the ClsStyles objects must have a mapping, or none of them'
			)
		}
		const mapping = array.reduce((result, clsStyle) => ({ ...result, ...clsStyle.mapping }), {})
		const clsStyles = array.reduce(
			(result, clsStyle) => ({ ...result, ...clsStyle.clsStyles }),
			{}
		)
		const clsConfigs = array.reduce(
			(result, clsStyle) => ({ ...result, ...clsStyle.clsConfigs }),
			{}
		)
		return new ClsStyles({ mapping, clsStyles, clsConfigs })
	}
}
