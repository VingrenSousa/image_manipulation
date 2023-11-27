import React from "react"
import Loading from "./componetes/loading/loading"

import { Poppins_400Regular,Poppins_500Medium,Poppins_300Light,Poppins_400Regular_Italic,useFonts } from "@expo-google-fonts/poppins"
import { Inter_600SemiBold,Inter_500Medium,Inter_400Regular} from "@expo-google-fonts/inter"

import Navigation from "./routes/Navigator/content_nevigation"


const Apps:React.FC=()=>{
const [fontsLoaded] = useFonts(
    { 
        Poppins_400Regular, 
        Poppins_500Medium,
        Poppins_300Light,
        Poppins_400Regular_Italic,
        Inter_600SemiBold,
        Inter_500Medium,
        Inter_400Regular
    });
    if(!fontsLoaded){
        return(<Loading/>)
    }
        return(<Navigation/>)
}
export default Apps