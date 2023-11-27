import { View,ImageBackground, TouchableOpacity,Text} from "react-native";
import {style} from './style'
import {StatusBar}from"expo-status-bar"
import { BlurView } from 'expo-blur';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PropsStack} from '../../routes/Stack/models'

import React, { useEffect, useState } from 'react'



export default function  init(){
    const navigation = useNavigation<PropsStack>();
    const [hasPermission, setHasPermission] = useState(false);
   
    const handleContinue = async () => {
        // Marcar que a tela de introdução já foi exibida
        await AsyncStorage.setItem('introDisplayed', 'true');
    
        // Navegar para a próxima tela do seu aplicativo
        navigation.navigate('Home'); // Substitua 'Home' pelo nome da sua tela principal
      };

    useEffect(() => {
        const checkIntro = async () => {
          // Verificar se a tela de introdução já foi exibida
          const introStatus = await AsyncStorage.getItem('introDisplayed');
          if (introStatus) {
            navigation.navigate('Home'); // Se já foi exibida, vá diretamente para a tela principal
          }
        };
        checkIntro();

        
     
      }, []
    );
    
    

    return(
        <ImageBackground
        style={style.main}
        source={require('../../assets/back.jpg')}>
            <StatusBar
                style="light"
                backgroundColor="transparent"
                translucent />
            <BlurView style={style.content} intensity={40}>
                <View style={style.labelTitle}>
                    <Text style={style.title}>Snap Style</Text>
                    <Text style={style.subTitle}>Transforme suas fotos com o SnapStyle</Text>
                </View>
      
                <TouchableOpacity
                 onPress={()=>handleContinue()}
                 style={style.button}>
                     <Text style={style.Text}> vamos começãor</Text>
                     <AntDesign name="rightcircle" size={30} color="#212122" />
                </TouchableOpacity>
            </BlurView>
          
        </ImageBackground>
    )
}