import { registerWebModule, NativeModule } from 'expo';

class HelloStorageModule extends NativeModule {
  async setItem(key: string, value: string): Promise<void> {
    localStorage.setItem(key, value);
  }
  async getItem(key: string): Promise<string | null> {
    return localStorage.getItem(key);
  }
}

export default registerWebModule(HelloStorageModule, 'HelloStorageModule');
