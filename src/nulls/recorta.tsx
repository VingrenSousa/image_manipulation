
import React, { useState } from "react";
import { View,  ScrollView,ImageBackground } from "react-native";
import { style } from '../componetes/ajustes/recorta/style'

import { useNavigation,useRoute } from "@react-navigation/native";
import Botton from '../componetes/buttons/buttonsEdit/index'
import { manipulateAsync, SaveFormat, FlipType,  } from 'expo-image-manipulator';
import { AntDesign } from '@expo/vector-icons'; 

import{PropsStack} from '../routes/Stack/models/index'

import {Gesture,GestureDetector} from "react-native-gesture-handler"
import Animated,{ useSharedValue,useAnimatedStyle} from "react-native-reanimated";


export default function Recorta(){
    const{params}: Readonly<any | undefined>=useRoute()
    const navi=useNavigation<PropsStack>()
    const[edit,setEdit]=useState(params?.state)

    const useHeight=useSharedValue(200)
    const useWidth=useSharedValue(200)
    const useHeightValue=useSharedValue(200)
    const useWidthValue=useSharedValue(200)

    const useValueTransformX = useSharedValue(0)
    const useValueTransformY = useSharedValue(0)
    const useValueScale = useSharedValue(1)
    const useValueRotate = useSharedValue(0)

    const x = useSharedValue(0)
    const y = useSharedValue(0)

    const X_translate = useSharedValue(0)
    const Y_translate = useSharedValue(0)

    const savedScale = useSharedValue(1);
    const animadeStyled = useAnimatedStyle(()=>({
            minHeight:150,
            minWidth:150,
            width:useWidth.value,
            height:useHeight.value,
            
            transform:[
                {translateX:useValueTransformX.value,},
                {translateY:useValueTransformY.value,},
                {scale:useValueScale.value},
                {rotate:`${(useValueRotate.value/Math.PI)*180}deg`}
            ]

       }))

    const onCenter=Gesture.Pan()
    .onStart(()=>{
        useWidthValue.value=useWidth.value
        useHeightValue.value=useHeight.value
    })
    .onUpdate((n)=>{
        useWidth.value=n.translationX+useWidthValue.value
    })
    const onfooter=Gesture.Pan()
    .onStart(()=>{
        useWidthValue.value=useWidth.value 
        useHeightValue.value=useHeight.value
    }).onUpdate((n)=>{useHeight.value=n.translationY+useHeightValue.value})

    const onPressPan =Gesture
    .Pan()
    .minPointers(1)
    .onStart(()=>{
        Y_translate.value=useValueTransformY.value
        X_translate.value=useValueTransformX.value
    })
    .onUpdate((n)=>{
        useValueTransformX.value=n.translationX+X_translate.value
        useValueTransformY.value=n.translationY+Y_translate.value
        x.value= useValueTransformX.value
        y.value=useValueTransformY.value
    })
    const onScala=Gesture
    .Pinch()
    .onUpdate((n)=>{ useValueScale.value =savedScale.value* n.scale})
    .onEnd(() => {savedScale.value = useValueScale.value;
    });
    const gestoTela =Gesture.Simultaneous(onScala,onPressPan)

    // recort 
    const _recortar =async()=>{
        let h=useHeight.value
        let w=useWidth.value
        let X=x.value
        let Y=y.value
        console.log('hY:'+h+'   hX:'+w+'   x:'+X+'  Y:'+Y)
        const _manipResult = await manipulateAsync(
           edit,
            [{
                crop:{
                    originX:10,
                    originY: 45,
                    width: 140,
                    height: 150,
               } 
             }],
            { compress: 1, format: SaveFormat.PNG }
            )
            setEdit(_manipResult)
            console.log(edit)
            navi.navigate('Ajustes',{image:edit}) 
        }

    return(
        <View style={style.body}>
        <View style={style.header}>
            <Botton
                sizeIc={30}
                Title="Volta"
                onPress={() => {navi.goBack() }}
            />
            <View style={style.headerbottonsSheq}>

                <Botton
                    icone="save"
                    sizeIc={30}
                    Title="Salvar"
                    onPress={async() => {await _recortar()}}/>
            </View>
        </View>
        <View style={style.main}>
            <View style={style.mainImage}>
                <ImageBackground
                    style={{ flex: 1, overflow:"hidden"}}
                    source={{ uri: edit }} 
                    resizeMode="contain"
                >
                    <GestureDetector gesture={gestoTela}>
                        <Animated.View style={[style.recortes,animadeStyled]}>
                            <View style={style.recortesCuboContaine}>
                                <View style={style.recortesCuboTopEsquerda}></View>
                                
                                <View style={style.recortesCuboTopCenter}></View>
                                
                                <View style={style.recortesCuboTopDireita}></View>
                            </View>
                            <View style={style.recortesCuboContaine}>
                            
                                
                       
                            <View style={style.recortesCuboCenterEsquerda}></View>
                            
                            <GestureDetector gesture={onCenter}>
                                <View style={style.recortesCuboCenterDireita}>
                                  <AntDesign name="arrowright" style={{left:35,}}size={20} color="#FFF" />
                                </View>
                            </GestureDetector>   
                            </View>

                            <View style={style.recortesCuboContaine}>
                                
                                <View  style={style.recortesCubobottonEsquerda}></View>
                                <GestureDetector gesture={onfooter}>
                                     <View style={style.recortesCubobottonCenter}>
                                          <AntDesign name="arrowdown" style={{top:45,}} size={24} color="#fff" />
                                     </View>
                                </GestureDetector>
                                <View  style={style.recortesCubobottonDireita}></View>
                                
                                
                            </View>

                        </Animated.View>
                    </GestureDetector>
                </ImageBackground>
                <View>

                </View>
              

            </View>
        </View>
        <View
            style={style.footer}>
            <ScrollView
                horizontal={true}>
                <View style={style.footerScroll}>
                </View>
            </ScrollView>
        </View>
    </View>

    )
}