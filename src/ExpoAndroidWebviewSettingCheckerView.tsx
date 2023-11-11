import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoAndroidWebviewSettingCheckerViewProps } from './ExpoAndroidWebviewSettingChecker.types';

const NativeView: React.ComponentType<ExpoAndroidWebviewSettingCheckerViewProps> =
  requireNativeViewManager('ExpoAndroidWebviewSettingChecker');

export default function ExpoAndroidWebviewSettingCheckerView(props: ExpoAndroidWebviewSettingCheckerViewProps) {
  return <NativeView {...props} />;
}
