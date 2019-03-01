import ClsStyles from '@modules/react-native-cls'
import { Colors } from '@/theme'

export const colorsClsStyles = ClsStyles.create({
	styles: {
		brand: { color: Colors.brand },
		primary: { color: Colors.primary },
		green: { color: Colors.green },
		yellow: { color: Colors.yellow },
		lightgray: { color: Colors.lightgray },
		white: { color: Colors.white },
		dark: { color: Colors.dark },
		black: { color: Colors.black },
	},
})

export const bgColorsClsStyles = ClsStyles.create({
	styles: {
		'bg-brand': { backgroundColor: Colors.brand },
		'bg-primary': { backgroundColor: Colors.primary },
		'bg-green': { backgroundColor: Colors.green },
		'bg-yellow': { backgroundColor: Colors.yellow },
		'bg-lightgray': { backgroundColor: Colors.lightgray },
		'bg-white': { backgroundColor: Colors.white },
		'bg-dark': { backgroundColor: Colors.dark },
		'bg-black': { backgroundColor: Colors.black },

		// FOR DEBUG...
		'bg-red': { backgroundColor: 'red' },
		'bg-blue': { backgroundColor: 'blue' },
	},
})
