import { requireNativeView } from 'expo';
import * as React from 'react';

import { HelloStorageViewProps } from './HelloStorage.types';

const NativeView: React.ComponentType<HelloStorageViewProps> =
  requireNativeView('HelloStorage');

export default function HelloStorageView(props: HelloStorageViewProps) {
  return <NativeView {...props} />;
}
