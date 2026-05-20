import { NativeModule, requireNativeModule } from 'expo';

import { HelloStorageModuleEvents } from './HelloStorage.types';

declare class HelloStorageModule extends NativeModule<HelloStorageModuleEvents> {
  setItem(key: string, value: string): Promise<void>;
  getItem(key: string): Promise<string | null>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<HelloStorageModule>('HelloStorage');
