import { Metrics } from './metrics'
import { Colors } from './colors'

const singleSpacing = Metrics.grid.spacing(1)
const scale = Metrics.scale.horizontal
const spacing10 = scale(10)

const PositionStyles = {
	absoluteCenter: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	absolute: {
		allScreen: {
			position: 'absolute',
			width: Metrics.screenWidth,
			height: Metrics.screenHeight,
		},
	},

	cornerTopLeft: { position: 'absolute', top: spacing10, left: spacing10 },
	cornerTopRight: { position: 'absolute', top: spacing10, right: spacing10 },
}
const PaddingStyles = {
	padding: {
		base: {
			padding: Metrics.baseMargin,
		},
		double: {
			padding: Metrics.baseMargin,
		},
	},
}

const BorderStyles = {
	border: {
		hr: {
			top: {
				borderTopWidth: 1,
				borderColor: Colors.border,
			},
			bottom: {
				borderBottomWidth: 1,
				borderColor: Colors.border,
			},
		},
	},
}

const sizeRoundedForResizeMode = (size, resizeMode) => {
	const scaledSize = scale(size)
	return {
		width: scaledSize,
		height: scaledSize,
		borderRadius: scaledSize / 2,
		resizeMode,
	}
}

const RoundStyles = {
	sizeRounded: size => sizeRoundedForResizeMode(size, 'cover'),
	sizeRoundedContain: size => sizeRoundedForResizeMode(size, 'contain'),
	roundedCorners: (size = 6) => ({ borderRadius: size }),
	roundedTopCorners: (size = 6) => ({ borderTopLeftRadius: size, borderTopRightRadius: size }),
	roundedBottomCorners: (size = 6) => ({
		borderBottomLeftRadius: size,
		borderBottomRightRadius: size,
	}),
	roundedLeftCorners: (size = 6) => ({ borderTopLeftRadius: size, borderBottomLeftRadius: size }),
	roundedRightCorners: (size = 6) => ({
		borderTopRightRadius: size,
		borderBottomRightRadius: size,
	}),
}

const defaultShadow = {
	shadowColor: 'rgba(0, 0, 0, 0.2)',
	shadowOffset: {
		width: 0,
		height: 2,
	},
	shadowRadius: 7,
	shadowOpacity: 1,
	overflow: 'visible',
	elevation: 3,
	backgroundColor: Colors.white,
}
const boldShadow = {
	shadowColor: 'rgba(0, 0, 0, 0.5)',
	shadowOffset: {
		width: 0,
		height: 4,
	},
	shadowRadius: 10,
	shadowOpacity: 1,
	overflow: 'visible',
	elevation: 5,
	backgroundColor: Colors.white,
}

const ShadowStyles = {
	shadow: {
		default: defaultShadow,
		bold: boldShadow,
	},
}

const ContainerStyles = {
	container: {
		base: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: Colors.background,
			padding: singleSpacing,
			paddingTop: singleSpacing + Metrics.statusBarHeight,
		},
		withoutStatusBar: {
			paddingTop: singleSpacing,
		},
		scrollView: {
			padding: singleSpacing,
		},
	},
	backgroundImage: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		width: Metrics.screenWidth,
		height: Metrics.screenHeight,
	},
	fullCenterContainer: {
		flex: 1,
		alignItems: 'stretch',
		justifyContent: 'center',
		paddingLeft: Metrics.doubleBaseMargin,
		paddingRight: Metrics.doubleBaseMargin,
	},
}

export const BasicStyles = {
	...PositionStyles,
	...PaddingStyles,
	...BorderStyles,
	...RoundStyles,
	...ShadowStyles,
	...ContainerStyles,
}
