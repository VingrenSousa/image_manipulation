import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationsStack ={
    Home:undefined
    Init:undefined
    Edites?:{image:string,base64:any}

}

export type PropsStack =NativeStackNavigationProp<propsNavigationsStack>

