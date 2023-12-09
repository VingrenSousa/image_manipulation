import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
export type propsNavigationsStack ={
    Home:undefined
    Init:undefined
    Edites?:{image:string,base64?:any}
    Recorta?:{image?:string,base64?:any,state?:string}
    Ajustes?:{image?: string,}

}

export type PropsStack =NativeStackNavigationProp<propsNavigationsStack>

