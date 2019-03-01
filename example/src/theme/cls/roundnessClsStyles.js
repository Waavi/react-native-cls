import ClsStyles from '@modules/react-native-cls'
import { BasicStyles } from '@/theme'

export const roundnessClsStyles = ClsStyles.create({
	styles: {
		rounded: { ...BasicStyles.roundedCorners(), overflow: 'hidden' },
		circle: { borderRadius: 1000, overflow: 'hidden' },
	},
})
