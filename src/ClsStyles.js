import { StyleSheet } from 'react-native'
import _ from 'lodash'

/*
    ClsStyles is an object that is able to return a set of styling objects based on a given string with "classes" separated by a space.
    It tries to replicate the CSS class functionality.

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
            this.clsStyles = Object.keys(styles).reduce((result, key) => ({ ...result, [key]: StyleSheet.create(_.omit(styles[key], '_config')) }), {})
            this.clsConfigs = Object.keys(styles).reduce((result, key) => ({ ...result, [key]: styles[key]._config }), {})
        } else {
            this.clsStyles = StyleSheet.create(styles)
            this.clsConfigs = {}
        }
    }

    obtainStyles = cls => {
        const baseClsStyles = this.clsStyles._base || {}
        // An array with each 'class' for their corresponding cls (class)
        const clsNamesArray = typeof cls === 'string' ? cls.split(' ').filter(clsName => clsName.length > 0 && this.clsStyles[clsName]) : []
        // An array with each style for their corresponding cls (class)
        const clsStylesArray = clsNamesArray.map(clsName => this.clsStyles[clsName])
        if (clsStylesArray.length > 0) {
            // Add the base style (default)
            const stylesArray = [baseClsStyles, ...clsStylesArray]
            if (this.hasMapping) {
                // For each mapping, we get the merge of their styles (i.e. an array of them)
                const stylesMappedArray = this.mappingKeys.reduce(
                    (result, key) => ({
                        ...result,
                        [key]: stylesArray.filter(style => style[key] !== undefined).map(style => style[key])
                    }),
                    {}
                )
                // We will add every extra configuration data into _config and return it merged. It won't be proccessed as StyleSheet
                const _config = clsNamesArray.reduce((result, clsName) => ({ ...result, ...this.clsConfigs[clsName] }), {})
                return { ...stylesMappedArray, _config }
            }
            return stylesArray
        }
        return baseClsStyles
    }

    // Lets create a ClsStyles instance with the given mapping and styles
    static create = ({ mapping, styles }) => {
        if (typeof styles !== 'object') {
            throw 'ClsStyle.create : the styles must be an object'
        }
        return new ClsStyles({ mapping, styles })
    }

    // Given a mapping with only 1 "mapping key", it creates a clone of this ClsStyle object (without mapping) with its styles within the given mapping.
    withMapping = mapping => {
        if (this.hasMapping) {
            throw 'ClsStyle.withMapping : this ClsStyle already has a mapping'
        }
        if (typeof mapping !== 'object') {
            throw 'ClsStyle.withMapping : the mapping must be an object'
        }
        const mappingKeys = Object.keys(mapping)
        if (mappingKeys.length !== 1) {
            throw 'ClsStyle.withMapping : the mapping must be an object with only 1 key'
        }
        const mappingKey = mappingKeys[0]
        const clsStyles = Object.keys(this.clsStyles).reduce((result, k) => ({ ...result, [k]: { [mappingKey]: this.clsStyles[k] } }), {})
        return new ClsStyles({ mapping, clsStyles })
    }

    // Create a new ClsStyles merging all ClsStyles objects given within the array
    static merge = array => {
        if (!Array.isArray(array) || array.length === 0) {
            throw 'ClsStyle.merge : the argument must be an array with at least 1 ClsStyles'
        }
        if (array.find(o => !(o instanceof ClsStyles)) !== undefined) {
            throw 'ClsStyle.merge : the argument must be an array of ClsStyles objects'
        }
        if (array.find(c => c.hasMapping) !== undefined && array.find(c => !c.hasMapping) !== undefined) {
            throw 'ClsStyle.merge : all the ClsStyles objects must have a mapping, or none of them'
        }
        const mapping = array.reduce((result, clsStyle) => ({ ...result, ...clsStyle.mapping }), {})
        const clsStyles = array.reduce((result, clsStyle) => ({ ...result, ...clsStyle.clsStyles }), {})
        const clsConfigs = array.reduce((result, clsStyle) => ({ ...result, ...clsStyle.clsConfigs }), {})
        return new ClsStyles({ mapping, clsStyles, clsConfigs })
    }
}
