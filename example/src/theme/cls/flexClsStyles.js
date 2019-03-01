import ClsStyles from '@modules/react-native-cls'

export const parentFlexClsStyles = ClsStyles.create({
	styles: {
		// Miscellanea
		row: { flexDirection: 'row' },
		'row-reverse': { flexDirection: 'row-reverse' },
		col: { flexDirection: 'column' },
		'col-reverse': { flexDirection: 'column-reverse' },
		wrap: { flexWrap: 'wrap' },

		// justifyContent utilities
		center: { justifyContent: 'center' },
		'space-between': { justifyContent: 'space-between' },
		'flex-start': { justifyContent: 'flex-start' },
		'flex-end': { justifyContent: 'flex-end' },
		'space-around': { justifyContent: 'space-around' },

		// alignItems utilities
		'align-center': { alignItems: 'center' },
		'align-stretch': { alignItems: 'stretch' },
		'align-flex-start': { alignItems: 'flex-start' },
		'align-flex-end': { alignItems: 'flex-end' },

		// short aliases
		'col-top-left': {
			justifyContent: 'flex-start',
			alignItems: 'flex-start',
		},
		'col-top-center': {
			justifyContent: 'flex-start',
			alignItems: 'center',
		},
		'col-top-right': {
			justifyContent: 'flex-start',
			alignItems: 'flex-end',
		},
		'col-top-stretch': {
			justifyContent: 'flex-start',
			alignItems: 'stretch',
		},
		'col-center-left': {
			justifyContent: 'center',
			alignItems: 'flex-start',
		},
		'col-center': {
			justifyContent: 'center',
			alignItems: 'center',
		},
		'col-center-right': {
			justifyContent: 'center',
			alignItems: 'flex-end',
		},
		'col-center-stretch': {
			justifyContent: 'center',
			alignItems: 'stretch',
		},
		'col-bottom-left': {
			justifyContent: 'flex-end',
			alignItems: 'flex-start',
		},
		'col-bottom-center': {
			justifyContent: 'flex-end',
			alignItems: 'center',
		},
		'col-bottom-right': {
			justifyContent: 'flex-end',
			alignItems: 'flex-end',
		},
		'col-bottom-stretch': {
			justifyContent: 'flex-end',
			alignItems: 'stretch',
		},
		'col-stretch-left': {
			justifyContent: 'space-between',
			alignItems: 'flex-start',
		},
		'col-stretch-center': {
			justifyContent: 'space-between',
			alignItems: 'center',
		},
		'col-stretch-right': {
			justifyContent: 'space-between',
			alignItems: 'flex-end',
		},
		'col-stretch': {
			justifyContent: 'space-between',
			alignItems: 'stretch',
		},
		'row-left-top': {
			flexDirection: 'row',
			justifyContent: 'flex-start',

			alignItems: 'flex-start',
		},
		'row-left-center': {
			flexDirection: 'row',
			justifyContent: 'flex-start',
			alignItems: 'center',
		},
		'row-left-bottom': {
			flexDirection: 'row',
			justifyContent: 'flex-start',
			alignItems: 'flex-end',
		},
		'row-left-stretch': {
			flexDirection: 'row',
			justifyContent: 'flex-start',
			alignItems: 'stretch',
		},
		'row-center-top': {
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'flex-start',
		},
		'row-center': {
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
		},
		'row-center-bottom': {
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'flex-end',
		},
		'row-center-stretch': {
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'stretch',
		},
		'row-right-top': {
			flexDirection: 'row',
			justifyContent: 'flex-end',
			alignItems: 'flex-start',
		},
		'row-right-center': {
			flexDirection: 'row',
			justifyContent: 'flex-end',
			alignItems: 'center',
		},
		'row-right-bottom': {
			flexDirection: 'row',
			justifyContent: 'flex-end',
			alignItems: 'flex-end',
		},
		'row-right-stretch': {
			flexDirection: 'row',
			justifyContent: 'flex-end',
			alignItems: 'stretch',
		},
		'row-stretch-top': {
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'flex-start',
		},
		'row-stretch-center': {
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
		},
		'row-stretch-bottom': {
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'flex-end',
		},
		'row-stretch': {
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'stretch',
		},
	},
})

export const childFlexClsStyles = ClsStyles.create({
	styles: {
		// Miscellanea
		'flex-1': { flex: 1 },
		'grow-1': { flexGrow: 1 },
		'flex-0': { flex: 0 },
		'grow-0': { flexGrow: 0 },

		// alignSelf utilities
		'self-center': { alignSelf: 'center' },
		'self-stretch': { alignSelf: 'stretch' },
		'self-flex-start': { alignSelf: 'flex-start' },
		'self-flex-end': { alignSelf: 'flex-end' },

		// aliases for alignSelf utilities
		'self-middle': { alignSelf: 'center' },
		'self-left': { alignSelf: 'flex-start' },
		'self-right': { alignSelf: 'flex-end' },
		'self-top': { alignSelf: 'flex-start' },
		'self-bottom': { alignSelf: 'flex-end' },
	},
})

export const flexClsStyles = ClsStyles.merge([parentFlexClsStyles, childFlexClsStyles])
