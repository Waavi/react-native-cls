import { Dimensions } from 'react-native'
import ClsStyles from './ClsStyles'

//Guideline sizes are based on standard ~5" screen mobile device
// We'll use iphone resolution
const guidelineBaseWidth = 375
const dimensions = Dimensions.get('window')
const { width } = dimensions.width < dimensions.height ? dimensions.width : dimensions.height
const scaleHorizontal = size => width * (size / guidelineBaseWidth)

const marginStyles = {}
const paddingStyles = {}
const spacings = {
    absolute: [0, 1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 40, 50],
    spacing: [1, 2, 3]
}
const baseSpacing = scaleHorizontal(16)

for (const s of spacings.absolute) {
    const spacing = scaleHorizontal(s)
    marginStyles[`mt${s}`] = { marginTop: spacing }
    marginStyles[`mb${s}`] = { marginBottom: spacing }
    marginStyles[`ml${s}`] = { marginLeft: spacing }
    marginStyles[`mr${s}`] = { marginRight: spacing }
    marginStyles[`mx${s}`] = { marginHorizontal: spacing }
    marginStyles[`my${s}`] = { marginVertical: spacing }
    marginStyles[`m${s}`] = { margin: spacing }

    paddingStyles[`pt${s}`] = { paddingTop: spacing }
    paddingStyles[`pb${s}`] = { paddingBottom: spacing }
    paddingStyles[`pl${s}`] = { paddingLeft: spacing }
    paddingStyles[`pr${s}`] = { paddingRight: spacing }
    paddingStyles[`px${s}`] = { paddingHorizontal: spacing }
    paddingStyles[`py${s}`] = { paddingVertical: spacing }
    paddingStyles[`p${s}`] = { padding: spacing }
}

for (const s of spacings.spacing) {
    const suffix = s > 1 ? `${s}s` : 's'
    const spacing = baseSpacing * s
    marginStyles[`mt${suffix}`] = { marginTop: spacing }
    marginStyles[`mb${suffix}`] = { marginBottom: spacing }
    marginStyles[`ml${suffix}`] = { marginLeft: spacing }
    marginStyles[`mr${suffix}`] = { marginRight: spacing }
    marginStyles[`mx${suffix}`] = { marginHorizontal: spacing }
    marginStyles[`my${suffix}`] = { marginVertical: spacing }
    marginStyles[`m${suffix}`] = { margin: spacing }

    paddingStyles[`pt${suffix}`] = { paddingTop: spacing }
    paddingStyles[`pb${suffix}`] = { paddingBottom: spacing }
    paddingStyles[`pl${suffix}`] = { paddingLeft: spacing }
    paddingStyles[`pr${suffix}`] = { paddingRight: spacing }
    paddingStyles[`px${suffix}`] = { paddingHorizontal: spacing }
    paddingStyles[`py${suffix}`] = { paddingVertical: spacing }
    paddingStyles[`p${suffix}`] = { padding: spacing }
}

export const marginClsStyles = ClsStyles.create({ styles: marginStyles })
export const paddingClsStyles = ClsStyles.create({ styles: paddingStyles })
