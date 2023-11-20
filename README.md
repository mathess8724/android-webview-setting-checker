
# expo-android-webview-setting-checker


## Introduction

The expo-android-webview-setting-checker package is designed to efficiently manage the Android System WebView settings in Expo applications. It's particularly useful for ensuring that the WebView is enabled and up-to-date, thus preventing unexpected errors or native crashes in your Expo apps.

## Features

* WebView State Detection: Checks whether the Android System WebView is enabled, disabled, or missing.

* Easy Navigation to Settings: Allows directly opening Android settings to adjust WebView if necessary.

* Component Management: Renders a component if WebView is enabled, otherwise renders a fallback component.

## Installation in managed Expo projects

Install the package using npm with the following command:

```
npm i expo-android-webview-setting-checker
```
After installation, a custom development client build is required on the simulator or device. You can do this using eas build:

Make sure to set developmentClient to true in your eas.json:
```
"build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal",
      "android": {
        "buildType": "apk"
      },
      "channel": "development"
    }
}
```

# API documentation

* webViewEnabled(): An async function that returns true or false based on WebView's enabled state.

* goToSettings(): Opens Android settings to adjust WebView settings.

* AndroidSystemWebViewChecker: A provider that accepts a component and a fallback. It returns your component if the setting is enabled, otherwise your fallback component. This provider will check the App's state every time it returns from the background to active, allowing a direct re-render of your component after enabling the setting without restarting the App.

if the Android System WebView is already installed but only deactvated, redirecting to the Android System WebView on Playstore will propose you to activate it directly.


# Example of usage

```
import { AndroidSystemWebViewChecker, goToSettings } from "expo-android-webview-setting-checker";
import { useRef } from "react";
import { StyleSheet, Text, View, Button, Linking } from "react-native";
import { WebView } from "react-native-webview";

function IsEnabledComponent() {
  const webref = useRef(null);
  return <WebView ref={webref} source={{ uri: "https://www.expo.dev" }} />;
}

function IsDisabledComponent() {
  return (
    <View style={styles.common}>
      <Text>Sorry Android System WebView is disabled or missing</Text>
      <Button title="Open settings" onPress={() => goToSettings()} />
      <Button
        color="grey"
        title="Open Playstore"
        onPress={() =>
          Linking.openURL(
            "https://play.google.com/store/apps/details?id=com.google.android.webview&hl=en_US",
          )
        }
      />
    </View>
  );
}
export default function App() {
  return (
    <AndroidSystemWebViewChecker
      component={<IsEnabledComponent />}
      fallback={<IsDisabledComponent />}
    />
  );
}

const styles = StyleSheet.create({
  common: {
    flex: 0,
    gap: 30,
    height: "100%",
    justifyContent: "center",
    alignSelf: "center",
  },
});
```
