import React, { Component } from 'react'
import { string, any } from 'prop-types'
import { Text } from 'react-native'
import textClsStyles from './clsStyles'

export class StyledText extends Component {
    static propTypes = {
        cls: string,
        style: any
    }

    getStyles = () => textClsStyles.obtainStyles(this.props.cls)

    render() {
        const { style, ...restProps } = this.props
        return <Text style={[this.getStyles(), style]} {...restProps} />
    }
}
