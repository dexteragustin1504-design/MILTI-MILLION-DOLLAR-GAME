import { existsSync } from 'node:fs';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
function cap(args) {
  const result = spawnSync(process.execPath, ['node_modules/@capacitor/cli/bin/capacitor', ...args], {stdio:'inherit'});
  if (result.error || result.status !== 0) throw new Error('Capacitor failed: '+args.join(' '));
}
if (!existsSync('android')) cap(['add','android']);
cap(['sync','android']);
const manifestPath='android/app/src/main/AndroidManifest.xml';
let manifest=await readFile(manifestPath,'utf8');
manifest=manifest.replace(/android:icon="[^"]+"/,'android:icon="@drawable/lumen_icon"')
 .replace(/android:roundIcon="[^"]+"/,'android:roundIcon="@drawable/lumen_icon"');
if (!manifest.includes('android:screenOrientation=')) manifest=manifest.replace('<activity','<activity android:screenOrientation="sensorPortrait"');
await writeFile(manifestPath,manifest);
await mkdir('android/app/src/main/res/drawable',{recursive:true});
await writeFile('android/app/src/main/res/drawable/lumen_icon.xml',`<?xml version="1.0" encoding="utf-8"?>
<vector xmlns:android="http://schemas.android.com/apk/res/android" android:width="108dp" android:height="108dp" android:viewportWidth="108" android:viewportHeight="108">
<path android:fillColor="#090B13" android:pathData="M0,0h108v108h-108z"/>
<path android:fillColor="#263727" android:strokeColor="#B9FC69" android:strokeWidth="2.5" android:pathData="M54,26L78,73L54,63L30,73z"/>
<path android:fillColor="#DFFFBB" android:pathData="M54,41L60,58L54,55L48,58z"/>
</vector>`);
console.log('Android project ready. Open with npm run android:open.');
