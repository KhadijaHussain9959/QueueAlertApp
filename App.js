/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {SafeAreaView, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Home from './src/screens/Home/Home.js';
import Login from './src/screens/Login/Login.js';
import SignUp from './src/screens/SignUp/SignUp.js';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  // const [User, setUser] = useState({
  //   name: 'haseeb',
  //   email: 'abc@gmail.com',
  //   userid: '1',
  // });

  const [User, setUser] = useState(null);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {User ? (
          <Stack.Screen name="Home" component={Home} />
        ) : (
          <>
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Login" component={Login} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
