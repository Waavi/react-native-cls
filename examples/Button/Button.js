import React, { Component } from 'react'
import { string, func, bool, number, any } from 'prop-types'
import { TouchableOpacity, View, Text } from 'react-native'
import buttonClsStyles from './clsStyles'

export class Button extends Component {
    static propTypes = {
        cls: string,
        text: string.isRequired,
        onPress: func.isRequired,
        disabled: bool,
        numberOfLines: number,
        style: any,
        textStyle: any
    }
    render() {
        const { cls, text, onPress, disabled = false, numberOfLines = 1, style, textStyle } = this.props
        const { view: viewClsStyle, text: textClsStyle } = buttonClsStyles.obtainStyles(cls)
        return (
            <TouchableOpacity onPress={onPress} disabled={disabled}>
                <View style={[viewClsStyle, style, { opacity: disabled ? 0.5 : 1 }]}>
                    <Text numberOfLines={numberOfLines} style={[textClsStyle, textStyle]}>
                        {text}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}
