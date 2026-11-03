# LUMEN RUN

A neon survival arcade game for the browser and Android. Drag to move, tap DASH to phase through enemies, collect energy, and choose upgrades between waves. Runs pause when the app loses focus; best scores stay on the device. No account, ads, purchases, analytics, or remote game assets are included.

## Get a test Android app without installing developer tools

1. Open this repository's **Actions** tab.
2. Select **Build Android game** on the left.
3. Click **Run workflow**, choose **main**, then confirm **Run workflow**.
4. When the run succeeds, open it and download **lumen-run-android** under **Artifacts** (GitHub sign-in required).
5. Unzip it. Transfer **app-debug.apk** to your Android phone, open it, and allow installation from that source if prompted.

The debug APK is for testing; it is not a Google Play submission. The included release AAB is unsigned and must not be uploaded until signed with your own upload key.

This workflow has not yet been built or device-tested in the development environment. Check its logs if it fails. GitHub Actions must be enabled, and GitHub may ask you to approve the workflow first.

## Local Android development

Install Node.js 22+, Android Studio with its SDK, and JDK 21. From the repository root:

```sh
npm install
npm run check
npm run android:prepare
npm run android:open
```

Android Studio opens the generated project. Let Gradle sync, select a phone or emulator, and press Run. The game is bundled locally and does not need the GitHub page or an Internet connection to play.

Edit **index.html**, then rerun **npm run android:prepare** to sync changes. Generated android/ and www/ are ignored; the preparation script recreates them. Keep any additional native customizations in the script or deliberately start tracking android/ before making manual changes you want to retain.

The provisional application ID is **com.dexteragustin1504.lumenrun**. Confirm ownership and uniqueness before your first store submission; change it in capacitor.config.json before generating android/. For a previously generated project, remove the generated android/ folder only after saving any native changes, then regenerate. Do not change the application ID after publishing.

Capacitor dependencies currently use major-version ranges. After the first successful installation, commit the generated package-lock.json and switch CI to npm ci for repeatable builds.

## Google Play release

Read [the Android release guide](docs/ANDROID-RELEASE.md). No store listing, signing key, or developer account has been created. No advertisements or billing have been enabled.

## iPhone later

This project can also use Capacitor iOS, but no iOS project is included yet. An iOS build requires the matching @capacitor/ios package, Xcode on macOS, Apple signing, and real-device testing.

## Store drafts

- [Listing copy](docs/STORE-LISTING.md)
- [Privacy draft](docs/PRIVACY-DRAFT.md)
