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
- Arquivo interno da apple
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