import HelloStorageModule from './HelloStorageModule';

export async function setItem(key: string, value: string): Promise<void> {
  return await HelloStorageModule.setItem(key, value);
}

export async function getItem(key: string): Promise<string | null> {
  return await HelloStorageModule.getItem(key);
}