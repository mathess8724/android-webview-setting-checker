package expo.modules.androidwebviewsettingchecker

import android.content.Intent
import android.os.Handler
import android.os.Looper
import android.util.Log
import android.webkit.WebView
import expo.modules.kotlin.Promise
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import android.provider.Settings
class ExpoAndroidWebviewSettingCheckerModule : Module() {
  private val context
    get() = requireNotNull(appContext.reactContext)
  override fun definition() = ModuleDefinition {

    Name("ExpoAndroidWebviewSettingChecker")

    // Function to go directly to settings page
    Function("goToSettings") {
      try {
        //intent.data = Uri.parse("package:com.google.android.webview")
        val intent = Intent(Settings.ACTION_MANAGE_APPLICATIONS_SETTINGS)
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
        context.startActivity(intent)
        true // Indicate success
      } catch (e: Exception) {
        Log.e("WebViewSettings", "Error opening WebView settings", e)
        false
      }
    }

    // Function to test if webView is enabled
    AsyncFunction("webViewEnabled") { promise: Promise ->
      val handler = Handler(Looper.getMainLooper())
      handler.post {
        try {
          val wv = WebView(context)
          Log.i("WebView", "webView okay!")
          wv.destroy()
          promise.resolve(true) //resolve the promise as true
        } catch (e: Exception) {
          Log.e("webView", "webView error!")
          promise.resolve(false) //resolve the promise as false, to always return a boolean
        }
      }
    }
  }
}
