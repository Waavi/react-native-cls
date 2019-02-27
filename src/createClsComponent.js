import React, { Component } from 'react'
import PropTypes from './utils/propTypes'
import ClsCache from './ClsCache'

/**
 * Function that creates a custom class with ClsStyles functionality.
 * It also creates automatically a new cache to memoize the cls-styles.
 * @param {Object} obj object with parameters
 * @param {React.Component} obj.component custom component that will be rendered
 * @param {ClsStyles} obj.clsStyles contains all the "cls-styles"
 * @param {Function} [obj.propsToStyle] function that generate a style from the props
 * @param {Object|StyleSheet} [obj.baseStyle] base style to apply to the component
 * @param {Object} [obj.propTypes] extra prop-types that will be added to the component
 * @param {Object} [obj.defaultProps] extra default-props that will be added to the component
 * @param {Object} [obj.memoized] set to false if you don't want to memoize the "getStyles" function
 */
export function createClsComponent({
	component: CustomComponent,
	clsStyles,
	propsToStyle,
	baseStyle,
	propTypes,
	defaultProps,
	memoized = true,
}) {
	return class extends Component {
		static propTypes = {
			cls: PropTypes.cls,
			style: PropTypes.viewStyle,
			...(propTypes || {}),
		}
		static defaultProps = {
			cls: undefined,
			style: undefined,
			...(defaultProps || {}),
		}
		constructor(props) {
			super(props)
			this.clsCache = memoized ? new ClsCache() : undefined
		}
		render() {
			const { cls, style, ...restProps } = this.props
			return (
				<CustomComponent
					style={[
						baseStyle,
						clsStyles.getStyles(cls, this.clsCache),
						propsToStyle ? propsToStyle(restProps) : undefined,
						style,
					]}
					{...restProps}
				/>
			)
		}
	}
}
