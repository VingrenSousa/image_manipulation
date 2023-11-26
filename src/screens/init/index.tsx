import { View,ImageBackground, TouchableOpacity,Text} from "react-native";
import {style} from './style'
import {StatusBar}from"expo-status-bar"
import { BlurView } from 'expo-blur';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation,NavigationProp} from '@react-navigation/native';
import {NativeStackHeaderProps} from '@react-navigation/native-stack'
import Home from "../home";





export default function  init(){
    const navigation = useNavigation();
    
    const navegar =()=>{
        
        navigation.navigate('Home')
        
    }
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
                 onPress={()=>navegar()}
                 style={style.button}>
                     <Text style={style.Text}> vamos começãor</Text>
                     <AntDesign name="rightcircle" size={30} color="#212122" />
                </TouchableOpacity>
            </BlurView>
          
        </ImageBackground>
    )
}