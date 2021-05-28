import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Navigator } from '../utils/'

//Stacks
import AuthStack from './authstack'

//Client
import AppStack from './appstack/client'

export default Routes = () => (
    <NavigationContainer ref={navigatorRef => Navigator.setTopLevelNavigator(navigatorRef)}>
        <AppStack/>
    </NavigationContainer>
)