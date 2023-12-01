import React from "react";
import {TouchableOpacity,TouchableOpacityProps,Text} from "react-native";
import { AntDesign} from '@expo/vector-icons'; 
import {style} from'./style'


interface propsButtons extends TouchableOpacityProps{
    Title?:string
    icone?:React.ComponentProps<typeof AntDesign>['name']
    sizeIc?:number
    colorIc?:string,
    
    

}


function Buttons({Title,icone,sizeIc,colorIc,...res}:propsButtons){
    return(
        <TouchableOpacity
            {...res}
            style={style.body}>  
                <AntDesign name={icone?icone:"leftcircleo"} size={sizeIc?sizeIc:40} color={colorIc?colorIc:"#Fff" }/>
            {Title?<Text style={style.label}>{Title}</Text>:[]}
        </TouchableOpacity>
    )
}


export default Buttons