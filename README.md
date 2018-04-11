# React Native Cls by [WAAVI](https://waavi.com/en)

React Native library to have classes like css.

## Installation

`npm install react-native-cls` or `yarn add react-native-cls`

## How to use

### clsStyles.js

```js
import ClsStyles from 'react-native-cls';
import { marginClsStyles, paddingClsStyles } from '../spacingClsStyles';

const sizeStyles = {
    size10: 10,
    size12: 12,
    size14: 14,
    size16: 16,
    size18: 18,
    size21: 21,
    size24: 24,
    size28: 28,
    size32: 32,
    size36: 36,
    size40: 40,
    size44: 44
};

const colorStyles = {
    red: 'red',
    green: 'green',
    white: 'white',
    grey: 'grey',
    black: 'black',
    yellow: 'yellow'
};

const clsStyles = ClsStyles.create({
    styles: {
        _base: {
            fontFamily: 'Roboto-Regular',
            fontSize: 16,
            lineHeight: 14,
            color: 'black',
            backgroundColor: 'transparent'
        },

        ...sizeStyles,
        ...colorStyles,

        title: {
            fontSize: 30,
            lineHeight: 28,
            textAlign: 'center',
            marginBottom: 25
        },

        text: {
            fontSize: 16,
            lineHeight: 16,
            textAlign: 'center',
            marginBottom: 25
        },

        grow: { flex: 1 },
        left: { textAlign: 'left' },
        center: { textAlign: 'center' },
        right: { textAlign: 'right' },

        notFontPadding: { includeFontPadding: false }
    }
});

const clsStylesWithSpacings = ClsStyles.merge([marginClsStyles, paddingClsStyles, clsStyles]);

export default clsStylesWithSpacings;
```

### StyledText.js

```js
import React, { Component } from 'react';
import { string, any } from 'prop-types';
import { Text } from 'react-native';
import textClsStyles from './clsStyles';

export class StyledText extends Component {
    static propTypes = {
        cls: string,
        style: any
    };

    getStyles = () => textClsStyles.obtainStyles(this.props.cls);

    render() {
        const { style, ...restProps } = this.props;
        return <Text style={[this.getStyles(), style]} {...restProps} />;
    }
}
```

### Example

```js
<StyledText cls="title center red mt40 mb20" />
```

More examples in examples folder.

## License

<a href=/license.txt target="_blank">MIT</a> license.
