// Reexport the native module. On web, it will be resolved to HelloStorageModule.web.ts
// and on native platforms to HelloStorageModule.ts
export { default } from './HelloStorageModule';
export { default as HelloStorageView } from './HelloStorageView';
export * from  './HelloStorage.types';
