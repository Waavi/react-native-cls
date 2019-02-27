/*
 * Useful to easily import default prop-types and some more complex.
 */
import PropTypes, { string, node, object, arrayOf, oneOfType } from 'prop-types'
import { ViewPropTypes } from 'react-native'

/* 'cls' propType is recursive, so we have to deal with it using a lazy function */
function lazyFunction(f) {
	return function() {
		// eslint-disable-next-line prefer-rest-params
		return f.apply(this, arguments)
	}
}
const lazyClsType = lazyFunction(() => cls, [])
const cls = oneOfType([string, object, arrayOf(lazyClsType)])

const CustomPropTypes = {
	...PropTypes,
	viewStyle: ViewPropTypes.style,
	children: oneOfType([node, arrayOf(node)]),
	cls,
}

export default CustomPropTypes
