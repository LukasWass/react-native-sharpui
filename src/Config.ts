import {
    TextStyle
} from "react-native";

interface IFont {
    "100"?: string;
    "100Italic"?: string;
    "200"?: string;
    "200Italic"?: string;
    "300"?: string;
    "300Italic"?: string;
    "400"?: string;
    "400Italic"?: string;
    normal?: string;
    normalItalic?: string;
    "500"?: string;
    "500Italic"?: string;
    "600"?: string;
    "600Italic"?: string;
    "700"?: string;
    "700Italic"?: string;
    bold?: string;
    boldItalic?: string;
    "800"?: string;
    "800Italic"?: string;
    "900"?: string;
    "900Italic"?: string;
}

interface ITextStyle extends TextStyle {
    font?: IFont;
}

export interface IConfig {
    TextStyle?: ITextStyle;
}

const Config: IConfig = {
    TextStyle: {
        fontSize: 16,
        color: "#000000",
        font: {
            "100": require("./assets/fonts/roboto/Roboto-Thin.ttf"),
            "100Italic": require("./assets/fonts/roboto/Roboto-ThinItalic.ttf"),
            "300": require("./assets/fonts/roboto/Roboto-Light.ttf"),
            "300Italic": require("./assets/fonts/roboto/Roboto-LightItalic.ttf"),
            "400": require("./assets/fonts/roboto/Roboto-Regular.ttf"),
            "400Italic": require("./assets/fonts/roboto/Roboto-RegularItalic.ttf"),
            normal: require("./assets/fonts/roboto/Roboto-Regular.ttf"),
            normalItalic: require("./assets/fonts/roboto/Roboto-RegularItalic.ttf"),
            "500": require("./assets/fonts/roboto/Roboto-Medium.ttf"),
            "500Italic": require("./assets/fonts/roboto/Roboto-MediumItalic.ttf"),
            "700": require("./assets/fonts/roboto/Roboto-Bold.ttf"),
            "700Italic": require("./assets/fonts/roboto/Roboto-BoldItalic.ttf"),
            bold: require("./assets/fonts/roboto/Roboto-Bold.ttf"),
            boldItalic: require("./assets/fonts/roboto/Roboto-BoldItalic.ttf"),
            "900": require("./assets/fonts/roboto/Roboto-Black.ttf"),
            "900Italic": require("./assets/fonts/roboto/Roboto-BlackItalic.ttf")
        }
    }
}
export default Config;