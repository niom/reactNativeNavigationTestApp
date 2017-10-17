/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
  StackNavigator,
} from 'react-navigation';
import MainScreen from "./MainScreen"
import ProfileScreen from "./ProfileScreen"


const BasicApp = StackNavigator({
  Main: {screen: MainScreen},
  Profile: {screen: ProfileScreen},
});