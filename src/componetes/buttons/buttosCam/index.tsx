import React from "react"
import { View,TouchableOpacity,TouchableOpacityProps,Text} from "react-native"
import { AntDesign} from '@expo/vector-icons'; 
import { style } from "./style";

interface paramentrosPronps extends TouchableOpacityProps{
    size?:number[],
    title:string,
    icone?:React.ComponentProps<typeof AntDesign>['name']
}

export const BottonCam=({title,size,icone,...rest}:paramentrosPronps)=>{
    const scren = icone?icone:'picture'
    return(
        <View style={style.sombras}>
            <TouchableOpacity
            activeOpacity={0.7}
            {...rest}
            style={style.Body}>
                <AntDesign name={scren} size={30} color="#fff" />
                <Text style={style.Label}>{title}</Text>
            </TouchableOpacity>
        </View>

    )

}