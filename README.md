# Detox Project

Welcome to my React Native & Detox project! 
The purpose of this repository is to provide step by step instructions for configuring Detox with React Native and providing some sample tests and code.

## Getting Started with my Sample Project

Follow the steps below to run a sample project with ReactNative and Detox

### Install Dependencies

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

Once your emulator is created and configured you can run the project.

`npm run android`

> Tip: The app should start automatically, but if it doesn't, check the installed apps list and click on `DetoxProject`!

---

## Getting Started with Detox in your own project

Follow the steps below to help get Detox setup in your own React Native project.

## Install Dependencies

### Install Jest

`npm install --save-dev jest`

### Install Detox

`npm install --save-dev detox`

### Install Detox CLI Globally (Optional)

The detox cli makes running detox commands easier. This step is optionally, you can also directly run any detox commands from the node_modules directory once it is installed.

`npm install detox-cli --global`

### Generate Config & Test Folder (Optional)

This command will generate a `.detoxrc.json` and `config.json` file. As well as an `e2e` folder with some sample tests. You can set these up manually or run the command below.

`detox init`

### Update Detoxrc Config

Update the `.detoxrc.json` that was generated or created in our previous step. Verify the `binaryPath` is correct and the `build` command is correct for your project. These are unique to your project setup.

Update `avdName` with your emulator's name.

```
{
    "testRunner": "jest",
    "runnerConfig": "e2e/config.json",
    "skipLegacyWorkersInjection": true,
    "apps": {
        "android": {
            "type": "android.apk",
            "binaryPath": "android/app/build/outputs/apk/debug/app-debug.apk",
            "build": "cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd .."

        }
    },
    "devices": {
        "emulator": {
            "type": "android.emulator",
            "device": {
                "avdName": "Pixel_3a_API_30_x86"
            }
        }
    },
    "configurations": {
        "android": {
            "device": "emulator",
            "app": "android"
        }
    }
}
```

### Build Detox for Android

Next, we need to build Detox for Android, you will run the following command which will use the `.detoxrc.json` file that we just created.

`detox build --configuration android`

### Run e2e

`detox test`
