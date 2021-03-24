import React, { Component } from "react";
import {
    Text as RNText
} from "react-native";

interface IProps {
    children: any;
}

interface IState { }

export default class Text extends Component<IProps, IState> {
    render() {
        return (
            <RNText>
                asd
            </RNText>
        )
    }
}