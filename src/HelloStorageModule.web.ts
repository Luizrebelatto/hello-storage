import { registerWebModule, NativeModule } from 'expo';

import { HelloStorageModuleEvents } from './HelloStorage.types';

class HelloStorageModule extends NativeModule<HelloStorageModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(HelloStorageModule, 'HelloStorageModule');
