import * as React from 'react';

import { ExpoAndroidWebviewSettingCheckerViewProps } from './ExpoAndroidWebviewSettingChecker.types';

export default function ExpoAndroidWebviewSettingCheckerView(props: ExpoAndroidWebviewSettingCheckerViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
