import React from 'react';
import { NavigationContainer,} from '@react-navigation/native';
import MyStack from '../Stack';

export default function Navigation() {
  return (
    <NavigationContainer 
    >
        <MyStack/>
    </NavigationContainer>
  );
}