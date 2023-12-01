import {Gesture,GestureDetector,GestureHandlerRootView} from "react-native-gesture-handler"
import { View,Image } from "react-native";
import {style}from './style/style'
import React from "react";

import Animated ,{ useSharedValue,useAnimatedStyle,withTiming,} from "react-native-reanimated";


const useValueTransformX = useSharedValue(0)
const useValueTransformY = useSharedValue(0)
const useValueScale = useSharedValue(1)
const useValueRotate = useSharedValue(0)

const X_translate = useSharedValue(0)
const Y_translate = useSharedValue(0)

const rotate = useSharedValue(0)
const savedScale = useSharedValue(1);

 export const reset=()=>{
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

export default function GestoAnimed(){
    return(
       
            <GestureDetector gesture={gestos}>
                <Animated.View  style={[style.mainImage,animadeStyled]}>
            
            
                </Animated.View>
         </GestureDetector>
       
    )
}