/**
 * Cache for memoize ClsStyles.getStyles function
 * Indeed, you can use your own cache implementation whenever it implements the methods 'get' and 'set'
 */
export default class ClsCache {
	constructor() {
		this.cache = {}
	}
	get = key => this.cache[key]
	set = (key, value) => {
		this.cache[key] = value
	}
}
