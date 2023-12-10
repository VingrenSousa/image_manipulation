import React from 'react';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/home/index'
import Init from '../../screens/init';
import {propsNavigationsStack } from './models';
import Cameras from '../../screens/Editar/index';
import Recorta from '../../nulls/recorta';
import AjustesModal from '../../componetes/ajustes';

const Stack = createNativeStackNavigator<propsNavigationsStack>();

function MyStack() {
  
    
  return (
    <Stack.Navigator 
    initialRouteName="Init"
    screenOptions={{headerShown:false}}>
         
          
            <Stack.Screen
                name="Init"
                component={Init}
                options={{ headerShown: false }}
            />
            
            <Stack.Screen 
                name="Home" 
                component={Home} 
            />
            <Stack.Screen 
                name="Edites" 
                component={Cameras}
             />
            <Stack.Screen 
                name="Recorta" 
                component={Recorta} 
            />
            <Stack.Screen 
                name="Ajustes" 
                component={AjustesModal} 
            />
           
           
           
    </Stack.Navigator>
  );
}
export default MyStack