import React, { Component } from "react";
import { Text as RNText, TextStyle } from "react-native";
import { ProviderContext } from "./Provider";
import { IConfig } from "../Config";

interface IProps {
    children?: any;
    style?: TextStyle;
}

interface IState { }

export default class Text extends Component<IProps, IState> {
    private GetProps = (config: IConfig) => {
        let newProps = { ...this.props };

        if (newProps.style !== undefined) {
            let style = { ...newProps.style as TextStyle };           

            let fontWeight: string = style.fontWeight ?? config.TextStyle.fontWeight ?? "normal";
            let fontStyle: string = style.fontStyle ?? config.TextStyle.fontStyle ?? "normal";
            let fontSize: number = style.fontSize ?? config.TextStyle.fontSize ?? 16;

            switch (fontWeight.toLowerCase()) {
                case "100":
                    style.fontWeight = "100";
                    if (fontStyle === "italic")
                        style.fontFamily = config.TextStyle.font["100Italic"];
                    else
                        style.fontFamily = config.TextStyle.font["100"];
                    break;
                case "200":
                    style.fontWeight = "200";
                    if (fontStyle === "italic")
                        style.fontFamily = config.TextStyle.font["200Italic"];
                    else
                        style.fontFamily = config.TextStyle.font["200"];
                    break;
                case "300":
                    style.fontWeight = "300";
                    if (fontStyle === "italic")
                        style.fontFamily = config.TextStyle.font["300Italic"];
                    else
                        style.fontFamily = config.TextStyle.font["300"];
                    break;
                case "400":
                    style.fontWeight = "400";
                    if (fontStyle === "italic")
                        style.fontFamily = config.TextStyle.font["400Italic"];
                    else
                        style.fontFamily = config.TextStyle.font["400"];
                    break;
                case "normal":
                    style.fontWeight = "normal";
                    if (fontStyle === "italic")
                        style.fontFamily = config.TextStyle.font["normalItalic"];
                    else
                        style.fontFamily = config.TextStyle.font["normal"];
                    break;
                case "500":
                    style.fontWeight = "500";
                    if (fontStyle === "italic")
                        style.fontFamily = config.TextStyle.font["500Italic"];
                    else
                        style.fontFamily = config.TextStyle.font["500"];
                    break;
                case "600":
                    style.fontWeight = "600";
                    if (fontStyle === "italic")
                        style.fontFamily = config.TextStyle.font["600Italic"];
                    else
                        style.fontFamily = config.TextStyle.font["600"];
                    break;
                case "700":
                    style.fontWeight = "700";
                    if (fontStyle === "italic")
                        style.fontFamily = config.TextStyle.font["700Italic"];
                    else
                        style.fontFamily = config.TextStyle.font["700"];
                    break;
                case "bold":
                    style.fontWeight = "bold";
                    if (fontStyle === "italic")
                        style.fontFamily = config.TextStyle.font["boldItalic"];
                    else
                        style.fontFamily = config.TextStyle.font["bold"];
                    break;
                case "800":
                    style.fontWeight = "800";
                    if (fontStyle === "italic")
                        style.fontFamily = config.TextStyle.font["800Italic"];
                    else
                        style.fontFamily = config.TextStyle.font["800"];
                    break;
                case "900":
                    style.fontWeight = "900";
                    if (fontStyle === "italic")
                        style.fontFamily = config.TextStyle.font["900Italic"];
                    else
                        style.fontFamily = config.TextStyle.font["900"];
                    break;
                default:
                    style.fontWeight = "normal";
                    if (fontStyle === "italic")
                        style.fontFamily = config.TextStyle.font["normal"];
                    else
                        style.fontFamily = config.TextStyle.font["normalItalic"];
                    break;
            }

            style.fontSize = fontSize;
            newProps.style = { ...style };
        }
        else {
            newProps.style = { fontSize: config.TextStyle.fontSize ?? 16, fontFamily: config.TextStyle.font["normal"], fontWeight: "normal" };
        }

        return newProps;
    };

    render() {
        return (
            <ProviderContext.Consumer>
                {(config: IConfig) => (

                    <RNText {...this.GetProps(config)}>{this.props.children}</RNText>
                )}
            </ProviderContext.Consumer>
        );
    }
}