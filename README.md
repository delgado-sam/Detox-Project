# Detox-Project

Welcome to my React Native & Detox demo project! The purpose of this repository is to provide step by step instructions for configuring Detox with React Native and providing some sample tests and code.

## Getting Started with my Sample Project

Follow the steps below to run this sample project with ReactNative and Detox!

### Install Node Modules

`npm run install`

### Run the App on Android

Create a new device or use an existing one. Follow the instructions in the Android developer documentation to create / manage devices.
https://developer.android.com/studio/run/managing-avds

Update `.detoxrc.json` file to include your AVD name.

```
    "type": "android.emulator",
    "device": {
        "avdName": "Pixel_3a_API_30_x86"
    }
```

Now that your emulator is created and configured. Run the project!

`npm run android`

> Tip: The app should start automatically, but if it doesn't, check the installed apps list and click on `DetoxProject`!

## Getting Started with Detox in your own project
