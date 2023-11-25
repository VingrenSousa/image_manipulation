import React, { useState } from "react"
import { View } from "react-native"
import Loading from "./componetes/loading/loading"
import Init from "./screens/init"
import { Poppins_400Regular,Poppins_500Medium,Poppins_300Light,Poppins_400Regular_Italic,useFonts } from "@expo-google-fonts/poppins"
const Apps:React.FC=()=>{
const [fontsLoaded] = useFonts(
    { 
        Poppins_400Regular, 
        Poppins_500Medium,
        Poppins_300Light,
        Poppins_400Regular_Italic,
    });
    if(!fontsLoaded){
        return(<Loading/>)
    }
    return(
     <Init/>
    )
}
export default Apps