/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home'
import Login from './Login'
import {
  View
} from "react-native";
const Stack = createNativeStackNavigator();
import AuthContext from './AuthContext';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false,
      login: this.login,
      logout: this.logout,
    };
  }
  login = () => {
    this.setState({isSignedIn: true});
  };
  logout = () => {
    this.setState({isSignedIn: false});
  };
  render() {
    const {isSignedIn} = this.state;
    return (
      <>
      <NavigationContainer>
        <AuthContext.Provider value={this.state}>
          <AuthContext.Consumer>
          {props => 
             (
              <Stack.Navigator
                screenOptions={{
                  headerShown: false,
                }}>
                {isSignedIn ? (
                  <Stack.Screen
                    name="Home"
                    component={Home}
                  />
                ) : (
                  <Stack.Screen
                    name="Login"
                    component={Login}
                  />
                )}
              </Stack.Navigator>
            )
          }
                
          </AuthContext.Consumer>
        </AuthContext.Provider>
      </NavigationContainer>
      </>
    );
  }
}
export default App;
