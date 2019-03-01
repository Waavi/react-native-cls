import ClsStyles from '@modules/react-native-cls'
import { BasicStyles } from '@/theme'

export const shadowClsStyles = ClsStyles.create({
	styles: {
		shadow: BasicStyles.shadow.default,
		'shadow-card': BasicStyles.shadow.card,
		'shadow-bold': BasicStyles.shadow.bold,
	},
})
