import ClsStyles from 'react-native-cls'
import { marginClsStyles } from '../spacingClsStyles'
import { Fonts, Colors, Metrics } from 'path/theme' // General metric like font sizes or families, colors ...

const clsStyles = ClsStyles.create({
    mapping: { view: null, text: null },
    styles: {
        _base: {
            view: {
                flexDirection: 'row',
                justifyContent: 'center',
                borderRadius: 100,
                backgroundColor: Colors.mediumgray,
                paddingHorizontal: 1.5 * Metrics.grid.baseSpacing,
                paddingVertical: Metrics.grid.baseSpacing
            },
            text: {
                fontSize: Fonts.size.size14,
                fontFamily: Fonts.type.medium,
                backgroundColor: 'transparent',
                color: Colors.white,
                includeFontPadding: false,
                textAlignVertical: 'center'
            }
        },

        green: {
            view: {
                backgroundColor: Colors.green
            },
            text: {
                color: Colors.black
            }
        },
        white: {
            view: {
                borderWidth: 1,
                borderColor: Colors.black,
                backgroundColor: Colors.white
            },
            text: {
                color: Colors.black
            }
        },

        small: {
            view: {
                paddingHorizontal: 1.5 * Metrics.grid.baseSpacing,
                paddingVertical: 0.3 * Metrics.grid.baseSpacing
            },
            text: {
                fontSize: Fonts.size.size14
            }
        },

        center: {
            view: {
                alignSelf: 'center'
            }
        }
    }
})

const clsStylesWithMargins = ClsStyles.merge([marginClsStyles.withMapping({ view: null }), clsStyles])

export default clsStylesWithMargins
