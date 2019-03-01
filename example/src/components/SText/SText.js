import PropTypes from 'prop-types';
import { Text, Animated } from 'react-native';
import { createClsComponent } from 'react-native-cls';
import clsStyles from './clsStyles';

const clsTextCreationParams = {
    clsStyles,
    propTypes: {
        size: PropTypes.number.isRequired,
        lineHeight: PropTypes.number,
        style: Text.propTypes.style
    },
    defaultProps: {
        lineHeight: undefined,
        style: undefined
    },
    propsToStyle: ({ lineHeight }) => {
        return {
            fontSize,
            lineHeight: lineHeight || fontSize * 1.25
        };
    }
};
export const SText = createClsComponent({
    component: Text,
    ...clsTextCreationParams
});
export const STextAnimated = createClsComponent({
    component: Animated.Text,
    ...clsTextCreationParams
});
