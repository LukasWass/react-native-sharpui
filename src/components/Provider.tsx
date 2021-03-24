import React, { createContext, Component } from "react";
import Config, { IConfig } from "../Config";

export const ProviderContext = createContext({} as IConfig);

export default class Provider extends Component<IConfig, IConfig> {
    constructor(props: IConfig) {
        super(props);

        if (props === undefined) {
            this.state = Config;
        }
        else {
            this.state = this.props;
        }
    }

    componentDidUpdate(prevProps: IConfig) {
        if (prevProps !== this.props) {
            this.setState(this.props);
        }
    }

    render() {
        return (
            <ProviderContext.Provider value={this.state}>
                {this.props.children}
            </ProviderContext.Provider>
        );
    }
}