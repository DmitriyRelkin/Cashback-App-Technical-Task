# Cashback App Technical Task
This document provides an overview of the dependencies, third-party libraries, and specific setup requirements for the cashbackapp project.

## Project Overview
Cashback App is a React Native application built using Expo. It utilizes a variety of libraries for state management, date handling, navigation, testing, and type checking.

## Dependencies
The following dependencies are required to run and develop the cashbackapp:

### Core Dependencies

1. **React** (`18.2.0`): A JavaScript library for building user interfaces.
2. **React Native** (`0.74.1`): A framework for building native apps using React.
3. **Expo** (`~51.0.8`): A framework and platform for universal React applications.

### Navigation

4. **@react-navigation/stack** (`^6.3.29`): Stack navigator for use with React Navigation.

### State Management

5. **@reduxjs/toolkit** (`^2.2.5`): The official, recommended way to write Redux logic.
6. **react-redux** (`^9.1.2`): Official React bindings for Redux.

### Date Handling

7. **dayjs** (`^1.11.11`): A minimalist JavaScript date library for parsing, validating, manipulating, and formatting dates.

### TypeScript

8. **typescript** (`~5.3.3`): A typed superset of JavaScript that compiles to plain JavaScript.
9. **@types/react** (`~18.2.79`): TypeScript definitions for React.
10. **@types/jest** (`^29.5.12`): TypeScript definitions for Jest.

### Testing

11. **jest** (`^29.7.0`): A delightful JavaScript testing framework with a focus on simplicity.
12. **react-test-renderer** (`^18.3.1`): React package for snapshot testing.

### Expo

13. **expo-status-bar** (`~1.12.1`): A component for controlling the status bar.

## DevDependencies

1. **@babel/core** (`^7.20.0`): Babel compiler core.


## Available Scripts

### `npm start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

#### `npm test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of `adb` available to Create React Native App:

##### Using Android Studio's `adb`

1. Make sure that you can run adb from your terminal.
2. Open Genymotion and navigate to `Settings -> ADB`. Select “Use custom Android SDK tools” and update with your [Android SDK directory](https://stackoverflow.com/questions/25176594/android-sdk-location).

## Setup Instructions

To set up and run the `cashbackapp`, follow these steps:

1. **Clone the repository**:
   ```sh
   git clone <repository_url>
   cd cashbackapp
# Cashback-App-Technical-Task
