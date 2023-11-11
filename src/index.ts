import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoAndroidWebviewSettingChecker.web.ts
// and on native platforms to ExpoAndroidWebviewSettingChecker.ts
import ExpoAndroidWebviewSettingCheckerModule from './ExpoAndroidWebviewSettingCheckerModule';
import ExpoAndroidWebviewSettingCheckerView from './ExpoAndroidWebviewSettingCheckerView';
import { ChangeEventPayload, ExpoAndroidWebviewSettingCheckerViewProps } from './ExpoAndroidWebviewSettingChecker.types';

// Get the native constant value.
export const PI = ExpoAndroidWebviewSettingCheckerModule.PI;

export function hello(): string {
  return ExpoAndroidWebviewSettingCheckerModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoAndroidWebviewSettingCheckerModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoAndroidWebviewSettingCheckerModule ?? NativeModulesProxy.ExpoAndroidWebviewSettingChecker);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoAndroidWebviewSettingCheckerView, ExpoAndroidWebviewSettingCheckerViewProps, ChangeEventPayload };
