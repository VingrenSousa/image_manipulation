import { View,Text,Image,ScrollView } from "react-native";
import {style} from './style'
import { useNavigation,useRoute,} from "@react-navigation/native";
import { GestureHandlerRootView,Gesture,GestureDetector} from "react-native-gesture-handler"



export default function Editar(){
    const onPress =Gesture
    .LongPress()
    .onEnd(()=>{console.log('ok')})
   
   
     const{params}: Readonly<any | undefined>=useRoute()
    
    console.log(params?.image)
    return(
        
            <View style={style.body}>
               <View style={style.header}>

               </View>
               <View style={style.main}>
                    
                        <Image
                        source={{uri:params?.image}}
                        style={{flex:1}}
                        />
                    
               </View>
               <View
                style={style.footer}>
                   <ScrollView
                   horizontal={true}
                   style={style.footerScroll}
                   >
                  
                   </ScrollView>
               </View>
            </View>
       
    )

}