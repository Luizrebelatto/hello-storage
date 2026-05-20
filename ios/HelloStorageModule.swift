import ExpoModulesCore

public class HelloStorageModule: Module {
  public func definition() -> ModuleDefinition {
    Name("HelloStorage")

    AsyncFunction("setItem") { (key: String, value: String) in
      UserDefaults.standard.set(value, forKey: key)
    }

    AsyncFunction("getItem") { (key: String) -> String? in
      return UserDefaults.standard.string(forKey: key)
    }
  }
}