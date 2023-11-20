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
