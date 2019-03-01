import ClsStyles from '@modules/react-native-cls'
import { StyleSheet } from 'react-native'
import { BasicStyles } from '@/theme'

export const positionClsStyles = ClsStyles.create({
	styles: {
		'pos-relative': { position: 'relative' },
		'pos-absolute': { position: 'absolute' },
		'pos-absolute-fill': StyleSheet.absoluteFillObject,

		'corner-left': BasicStyles.cornerTopLeft,
		'corner-right': BasicStyles.cornerTopRight,
	},
})
