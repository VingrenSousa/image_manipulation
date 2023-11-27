import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator,NativeStackHeaderProps} from '@react-navigation/native-stack';
import Home from '../../screens/home/index'
import init from '../../screens/init';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {propsNavigationsStack } from './models';

const Stack = createNativeStackNavigator<propsNavigationsStack>();

function MyStack() {
  
    
  return (
    <Stack.Navigator 
    initialRouteName="Init"
    screenOptions={{headerShown:false}}>
         
          
            <Stack.Screen
                name="Init"
                component={init}
                options={{ headerShown: false }}/>
            
            <Stack.Screen 
                name="Home" 
                component={Home} />
           
           
    </Stack.Navigator>
  );
}
export default MyStack