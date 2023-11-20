import { Subscription } from "expo-modules-core";
import React, { Component, ReactNode } from "react";
import { View, AppState } from "react-native";

import { webViewEnabled } from "./index";

interface ExpoProviderState {
  isEnabled: boolean;
  appState: string;
}

interface ExpoProviderProps {
  component: ReactNode;
  fallback: ReactNode;
}

class AndroidSystemWebViewChecker extends Component<ExpoProviderProps, ExpoProviderState> {
  subscription: Subscription | null = null;
  constructor(props: ExpoProviderProps | Readonly<ExpoProviderProps>) {
    super(props);
    this.state = {
      isEnabled: false,
      appState: "",
    };
  }

  async checkWebViewEnabled() {
    try {
      const enabled = await webViewEnabled();
      this.setState({ isEnabled: enabled });
    } catch (error) {
      console.log("error while using webViewEnabled", error);
    }
  }

  handleAppStateChange = async (nextAppState) => {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      await this.checkWebViewEnabled();
    }
    this.setState({ appState: nextAppState });
  };

  componentDidMount(): void {
    this.checkWebViewEnabled();
    this.subscription = AppState.addEventListener(
      "change",
      this.handleAppStateChange,
    );
  }

  componentWillUnmount(): void {
    this.subscription?.remove();
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.isEnabled ? this.props.component : this.props.fallback}
      </View>
    );
  }
}

export default AndroidSystemWebViewChecker;
