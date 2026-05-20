# hello-storage

It is a library for storing data locally

## How Works?

### IOS
- The values are managed by the class `UserDefault`
```swift
UserDefaults.standard.set("Luiz", forKey: "username")
```
- use the file `.plist`, example `Library/Preferences/com.meuApp.app.plist`

##### Plist
- intern file
```xml
<dict>
    <key>username</key>
    <string>Luiz</string>

    <key>isLogged</key>
    <true/>
</dict>
```

### Android
- They use the framework `SharedPreferences`
```kt
AsyncFunction("setItem") { key: String, value: String ->
      sharedPreferences.edit().putString(key, value).apply()
    }
```
- save on xml
```xml
<?xml version='1.0' encoding='utf-8' standalone='yes' ?>
<map>
    <string name="username">Luiz</string>
    <boolean name="isLogged" value="true" />
</map>
```

## Files
`HelloStorageModule.kt` -> functions

- ios
  - `HelloStorage.podspec` -> infos da tool
  - `HelloStorageModule.swift` -> functions

- src
  - `index.ts` -> package entry point, exports the public API (`setItem`, `getItem`) used by the app
  - `HelloStorageModule.ts` -> bridge JS → nativo, load modules iOS/Android via `requireNativeModule('HelloStorage')`
  - `HelloStorage.types.ts` -> shared types