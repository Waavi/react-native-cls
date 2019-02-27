/**
 * Helper that returns a copy of an object removing one specific key
 * @param {Object} obj object
 * @param {string} key key to omit
 * @returns {Object} a new object with the same fields than obj but that one than represents the key
 */
export default function omit(obj, key) {
	if (obj && typeof obj === 'object' && key) {
		const { [key]: deletedKey, ...result } = obj
		return result
	}
	return obj
}
