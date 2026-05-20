import * as React from 'react';

import { HelloStorageViewProps } from './HelloStorage.types';

export default function HelloStorageView(props: HelloStorageViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
