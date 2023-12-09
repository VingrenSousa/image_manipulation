import { View,Text,Image,ScrollView } from "react-native";
import {style} from './style/style'
import { useNavigation,useRoute,} from "@react-navigation/native";
import {Gesture,GestureDetector} from "react-native-gesture-handler"
import Botton from '../../componetes/buttons/buttonsEdit/index'
import {PropsStack}from '../../routes/Stack/models/index'



import Animated,{ useSharedValue,useAnimatedStyle,withTiming,} from "react-native-reanimated";

import { useEffect, useState } from "react";
import AjustesModal from "../../componetes/ajustes";
 

export default function Editar(){

    const navi=  useNavigation<PropsStack>()
    
    const{params}: Readonly<any | undefined>=useRoute()
    const[image,setImage]=useState(params?.image)
    useEffect(()=>{
        setImage(params?.image)
    },[params])
    
  
   
const useValueTransformX = useSharedValue(0)
const useValueTransformY = useSharedValue(0)
const useValueScale = useSharedValue(1)
const useValueRotate = useSharedValue(0)

const X_translate = useSharedValue(0)
const Y_translate = useSharedValue(0)

const rotate = useSharedValue(0)
const savedScale = useSharedValue(1);

const reset=()=>{
    useValueTransformX.value=withTiming(0)
    useValueTransformY.value=withTiming(0)
    useValueRotate.value=withTiming(0),
    useValueScale.value=withTiming(1),
    savedScale.value=1

}


 const animadeStyled = useAnimatedStyle(()=>({
 transform:[
        {translateX:useValueTransformX.value,},
        {translateY:useValueTransformY.value,},
        {scale:useValueScale.value},
        {rotate:`${(useValueRotate.value/Math.PI)*180}deg`}
    ],


}))

const onPressPan =Gesture
.Pan()
.minPointers(1)
.onStart(()=>{
    Y_translate.value=useValueTransformY.value
    X_translate.value=useValueTransformX.value
})
.onUpdate((n)=>{
    useValueTransformX.value=n.translationX+X_translate.value
    useValueTransformY.value=n.translationY+Y_translate.value})

const onRotation= Gesture
.Rotation()
.onStart(()=>{rotate.value=useValueRotate.value})
.onUpdate((n)=>{useValueRotate.value=n.rotation+rotate.value})

 const onScala=Gesture
.Pinch()
.onUpdate((n)=>{ useValueScale.value =savedScale.value* n.scale})
.onEnd(() => {savedScale.value = useValueScale.value;});



const gestos = Gesture.Simultaneous(onScala,onRotation,onPressPan,)
    
    
    return(
        
            <View style={style.body}>
               <View style={style.header}>
                    <Botton
                        sizeIc={30}
                        Title="Volta"
                        onPress={()=>{navi.goBack()}}
                    />
                    <View style={style.headerbottonsSheq}>
                    <Botton
                        icone="back"
                        sizeIc={30}
                        Title="antes"
                    />
                        <Botton
                         onPress={()=>{reset()}}
                            icone="select1"
                            sizeIc={30}
                            Title="retorna"
                                    
                        />
                    <Botton
                        icone="save"
                        sizeIc={30}
                        Title="Salvar"
                        
                    />
                    </View>
               </View>
               <View style={style.main}>
                <GestureDetector gesture={gestos}>
                    <Animated.View  style={[style.mainImage,animadeStyled]}>
                            <Image
                            style={{flex:1}}
                            source={{uri:image}}
                            resizeMode="contain"
                            
                            />
                         
                    </Animated.View>
                  </GestureDetector>
               </View>
               <View
                style={style.footer}>
                   <ScrollView
                   horizontal={true}
                   >
                      <View style={style.footerScroll}>
                          <Botton
                            onPress={()=>{
                                navi.navigate('Ajustes',{image:image})
                           
                            }}
                              icone="scan1"
                              sizeIc={35}
                              Title="Ajsute"
                          
                          />
                            <Botton
                                icone="filter"
                                sizeIc={35}
                                Title="Filter"
                               
                            
                                              />
                            <Botton
                                icone="bulb1"
                                sizeIc={35}
                                Title="Luz"
                            
                            />
                            <Botton
                                icone="slack-square"
                                sizeIc={35}
                                Title="Cores"
                            
                            />
                            <Botton
                                icone="antdesign"
                                sizeIc={35}
                                Title="IA"
                            
                            />
                     
                      </View>
                   </ScrollView>
               </View>
             
            </View>
       
    )

}