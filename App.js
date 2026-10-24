import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStaticNavigation } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from './components/SignUpScreen';
import WelcomeScreen from './components/WelcomeScreen';
import LoginScreen from './components/LoginScreen';

const RootStack=createNativeStackNavigator({
  inititialRouteName: 'Welcome',
  screens: {
    WelcomeScreen: {
    screen: WelcomeScreen,
    options: {
      headerShown: false,
    },
  },
  SignUpScreen: {
    screen: SignUpScreen,
    options: {
      headerShown: false,
    },
  },
  LoginScreen: {
    screen: LoginScreen,
    options: {
      headerShown: false,
    },
  },
  }
})

const Navigation  = createStaticNavigation(RootStack);

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}