import React from "react";
import { ImageBackground, View} from "react-native";
import { style } from "./style";

export default function Splash(){
    return(
        <ImageBackground 
            source={require('../../assets/screns_app/splash.png')}
            style={style.main}>
               
        </ImageBackground>
    )
} 