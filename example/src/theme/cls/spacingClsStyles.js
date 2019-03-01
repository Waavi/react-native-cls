import ClsStyles from '@modules/react-native-cls'
import { Metrics } from '@/theme'

export const SPACINGS_ABSOLUTE = [0, 1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 40, 50]
export const SPACINGS_LIST = [1, 2, 3]

const BASE_SPACING = Metrics.grid.baseSpacing
const scale = Metrics.scale.horizontal

const marginStyles = {}
const paddingStyles = {}

for (const s of SPACINGS_ABSOLUTE) {
	const spacing = scale(s)
	marginStyles[`mt-${s}`] = { marginTop: spacing }
	marginStyles[`mb-${s}`] = { marginBottom: spacing }
	marginStyles[`ml-${s}`] = { marginLeft: spacing }
	marginStyles[`mr-${s}`] = { marginRight: spacing }
	marginStyles[`mx-${s}`] = { marginHorizontal: spacing }
	marginStyles[`my-${s}`] = { marginVertical: spacing }
	marginStyles[`m-${s}`] = { margin: spacing }

	paddingStyles[`pt-${s}`] = { paddingTop: spacing }
	paddingStyles[`pb-${s}`] = { paddingBottom: spacing }
	paddingStyles[`pl-${s}`] = { paddingLeft: spacing }
	paddingStyles[`pr-${s}`] = { paddingRight: spacing }
	paddingStyles[`px-${s}`] = { paddingHorizontal: spacing }
	paddingStyles[`py-${s}`] = { paddingVertical: spacing }
	paddingStyles[`p-${s}`] = { padding: spacing }
}

for (const s of SPACINGS_LIST) {
	const suffix = s > 1 ? `${s}s` : 's'
	const spacing = BASE_SPACING * s
	marginStyles[`mt-${suffix}`] = { marginTop: spacing }
	marginStyles[`mb-${suffix}`] = { marginBottom: spacing }
	marginStyles[`ml-${suffix}`] = { marginLeft: spacing }
	marginStyles[`mr-${suffix}`] = { marginRight: spacing }
	marginStyles[`mx-${suffix}`] = { marginHorizontal: spacing }
	marginStyles[`my-${suffix}`] = { marginVertical: spacing }
	marginStyles[`m-${suffix}`] = { margin: spacing }

	paddingStyles[`pt-${suffix}`] = { paddingTop: spacing }
	paddingStyles[`pb-${suffix}`] = { paddingBottom: spacing }
	paddingStyles[`pl-${suffix}`] = { paddingLeft: spacing }
	paddingStyles[`pr-${suffix}`] = { paddingRight: spacing }
	paddingStyles[`px-${suffix}`] = { paddingHorizontal: spacing }
	paddingStyles[`py-${suffix}`] = { paddingVertical: spacing }
	paddingStyles[`p-${suffix}`] = { padding: spacing }
}

export const marginClsStyles = ClsStyles.create({ styles: marginStyles })
export const paddingClsStyles = ClsStyles.create({ styles: paddingStyles })
