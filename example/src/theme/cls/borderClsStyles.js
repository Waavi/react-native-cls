import ClsStyles from '@modules/react-native-cls'
import { StyleSheet } from 'react-native'
import { Colors } from '@/theme'

const borderWidth = 2 * StyleSheet.hairlineWidth

export const borderClsStyles = ClsStyles.create({
	styles: {
		b: { borderColor: Colors.separator, borderWidth },

		'b-t': { borderColor: Colors.separator, borderTopWidth: borderWidth },
		'b-b': { borderColor: Colors.separator, borderBottomWidth: borderWidth },
		'b-l': { borderColor: Colors.separator, borderLeftWidth: borderWidth },
		'b-r': { borderColor: Colors.separator, borderRightWidth: borderWidth },

		'b-bold-t': { borderColor: Colors.darkgray, borderTopWidth: borderWidth },
		'b-bold-b': { borderColor: Colors.darkgray, borderBottomWidth: borderWidth },
		'b-bold-l': { borderColor: Colors.darkgray, borderLeftWidth: borderWidth },
		'b-bold-r': { borderColor: Colors.darkgray, borderRightWidth: borderWidth },
	},
})
