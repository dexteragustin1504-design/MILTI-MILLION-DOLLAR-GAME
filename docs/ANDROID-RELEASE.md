# Google Play release checklist

## Build and sign

1. Create and verify your Google Play Console developer account.
2. Confirm the app name and application ID. The app ID becomes permanent after publication.
3. Run the local setup from README.md and open Android Studio.
4. In Android Studio choose **Build > Generate Signed App Bundle / APK > Android App Bundle**.
5. Create an upload keystore you control. Keep the key, passwords, alias, and recovery information backed up securely. Never commit them to GitHub.
6. Select the release variant and generate a signed AAB. Configure Play App Signing in Play Console.
7. Increment versionCode and versionName in android/app/build.gradle for later releases. Because android/ is generated, preserve these changes in the preparation script or track the native project.
8. Verify the current Play target API requirements and supported devices before uploading. Capacitor 7's generated defaults may need updating to meet requirements at submission time.

The workflow's unsigned AAB demonstrates the packaging path. It is not a signed store release. Its debug APK can be used for installation testing.

## Test on real devices before release

- Small and large phones; tablet and foldable compatibility, including layouts where the OS overrides portrait orientation.
- Simultaneous movement and dash, finger release, pointer cancellation, edge gestures, and notch/navigation areas.
- Pause on Home, incoming interruptions, screen lock, and return to app.
- Background termination: current runs reset when the process is killed; only completed best scores persist.
- Audio toggle, silent mode behavior, long runs, heat, battery, and frame rate.
- Offline startup, first install, update without losing best score, and clearing app data.
- Android Back behavior and navigation gestures; native Back may close the app in this initial wrapper.
- Signed release installed through Play internal testing, not only debug builds.
- Accessibility and reduced-motion behavior; this fast visual game is not yet optimized for screen readers.

## Complete the listing

Prepare a 512×512 PNG store icon, 1024×500 feature graphic, and genuine screenshots from the final app. The project supplies a native vector launcher icon, not the final exported store artwork.

Use docs/STORE-LISTING.md as draft copy. Complete content ratings, target audience, ads declaration, app access, and Data safety truthfully. Add a monitored support email and a publicly hosted privacy policy with your publisher details.

Check Google's current testing and production-access requirements for your account type. Start with internal testing, then any required closed testing, before requesting production access.

## Monetization later

The current build contains no ads, payments, or monetization SDKs. Rewarded ads or digital purchases need a separate implementation, consent handling where applicable, accurate privacy disclosures, and store-compliant billing. Reassess children/families requirements before choosing a target audience.
