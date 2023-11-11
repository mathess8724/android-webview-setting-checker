import { StyleSheet, Text, View } from 'react-native';

import * as ExpoAndroidWebviewSettingChecker from 'expo-android-webview-setting-checker';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoAndroidWebviewSettingChecker.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
