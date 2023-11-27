import React from 'react';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/home/index'
import Init from '../../screens/init';
import {propsNavigationsStack } from './models';

const Stack = createNativeStackNavigator<propsNavigationsStack>();

function MyStack() {
  
    
  return (
    <Stack.Navigator 
    initialRouteName="Init"
    screenOptions={{headerShown:false}}>
         
          
            <Stack.Screen
                name="Init"
                component={Init}
                options={{ headerShown: false }}/>
            
            <Stack.Screen 
                name="Home" 
                component={Home} />
           
           
    </Stack.Navigator>
  );
}
export default MyStack