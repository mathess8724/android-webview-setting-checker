import React from "react";
import {
  NativeModulesProxy,
  EventEmitter,
  Subscription,
} from "expo-modules-core";
//import AndroidSystemWebViewCheckerProvider from './ExpoAndroidWebviewSettingCheckerProvider'
import ExpoAndroidWebviewSettingCheckerModule from "./ExpoAndroidWebviewSettingCheckerModule";
//import { ChangeEventPayload, ExpoAndroidWebviewSettingCheckerViewProps } from './ExpoAndroidWebviewSettingChecker.types';
import AndroidSystemWebViewChecker from "./ExpoAndroidWebviewSettingCheckerProvider";

export async function webViewEnabled(): Promise<boolean> {
  return await ExpoAndroidWebviewSettingCheckerModule.webViewEnabled();
}

export function goToSettings() {
  return ExpoAndroidWebviewSettingCheckerModule.goToSettings();
}

// export function AndroidSystemWebViewCheckerProvider(children: any) {
//   return WebviewCheckerProvider.AndroidSystemWebViewCheckerProvider(children);
// }
export { AndroidSystemWebViewChecker }

//export { };
