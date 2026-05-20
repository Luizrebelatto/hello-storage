package expo.modules.hellostorage

import android.content.Context
import android.content.SharedPreferences
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class HelloStorageModule : Module() {
  private val context
    get() = appContext.reactContext ?: throw Exception("React context unavailable")

  private val sharedPreferences: SharedPreferences
    get() = context.getSharedPreferences("HelloStoragePrefs", Context.MODE_PRIVATE)

  override func definition() = ModuleDefinition {
    Name("HelloStorage")

    AsyncFunction("setItem") { key: String, value: String ->
      sharedPreferences.edit().putString(key, value).apply()
    }

    AsyncFunction("getItem") { key: String ->
      return@AsyncFunction sharedPreferences.getString(key, null)
    }
  }
}