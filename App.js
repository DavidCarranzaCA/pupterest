import React from 'react';
import { StackNavigator } from 'react-navigation';
import Login from './app/screens/login.component';
import Home from './app/screens/home.component';



export default class App extends React.PureComponent {
  render() {
    return (
      <AppNavigation />
    )
  }
}

const AppNavigation = StackNavigator({
  LoginScreen : {
    screen: Login
  },
  HomeScreen: {
    screen: Home
  }
})



