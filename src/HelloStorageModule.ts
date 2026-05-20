import { NativeModule, requireNativeModule } from 'expo';

import { HelloStorageModuleEvents } from './HelloStorage.types';

declare class HelloStorageModule extends NativeModule<HelloStorageModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<HelloStorageModule>('HelloStorage');
