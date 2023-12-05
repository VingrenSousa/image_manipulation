import React, { useState } from "react";
import { View, Text, ImageBackground, TouchableOpacity, ScrollView, Image } from "react-native";
import { style } from "./style";
import { AntDesign } from '@expo/vector-icons';
import { BottonCam } from "../../componetes/buttons/buttosCam";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RequireImage } from "../../componetes/ImagePicker/galeria";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../routes/Stack/models";


export default function Home() {
    const navi =useNavigation<PropsStack>()
    const [plaseImage, setplaseImage] = useState(false)
    const [ultimasEdt, setUltimasEdt] = useState([{}])
    const [actUltimasEdt, SetActUltimasEdt] = useState(false)
    const [coresVibrantes,setcoresVibrantes] = useState(require('../../assets/screns_fotos/coresVibrantes.jpg'))
    
   setInterval(()=>{
        if(plaseImage){
            setcoresVibrantes(require('../../assets/screns_fotos/coresVibrantes.jpg'))
            setplaseImage(!plaseImage) 
        }else{
            setcoresVibrantes(require('../../assets/screns_fotos/cameraART.jpg'))
            setplaseImage(!plaseImage)
        }
    
   },100000)

    
     

    const explo = (n:{}[]) => {
       
        return (
            <View style={style.explo}>
                {n.map((data:any) => {
                    return (
                        <TouchableOpacity
                        onPress={()=>{
                            console.log(data)
                            navi.navigate('Edites',{image:data.uri, base64:data.base64})
                        }}
                            >
                            <Image
                                source={data}
                                style={{width: 130, height: 170, borderRadius: 4,}} />
                        </TouchableOpacity>
                          )
                     })
                }
            </View>)

    }
   
    const setImage=async()=>{
        
        const requires= await RequireImage()
         
        if(requires=="not permission"){
            return console.log("not permission");
        }else if(!requires){
            return  console.log("cancel");
        }else{
        
            const atual=actUltimasEdt?[...ultimasEdt,{uri:requires[0].uri}]:[{uri:requires[0].uri}]
            setUltimasEdt(atual)
            SetActUltimasEdt(true)
            console.log(requires[0].uri)
            navi.navigate('Edites',
            {
                image:requires[0].uri,
                base64:requires[0].base64
            }); 

        }
        
        
    }

    return (
        <View style={style.Body}>
            <ScrollView>
                <ImageBackground
                    source={coresVibrantes}
                    style={style.Header}>
                    <Text style={style.label}>
                        Veja como você ficaria com cores vibrantes
                    </Text>
                    <TouchableOpacity
                
                        style={style.button}>
                        <Text style={style.text}>experimente agora</Text>
                        <AntDesign name="right" size={20} color="#fff" />
                    </TouchableOpacity>
                    <View style={style.plase}>
                        {plaseImage
                            ? <View style={[style.plaseActiver]}></View>
                            : <View style={[style.plaseActiver, { marginLeft: '60%' }]}></View>
                        }
                    </View>
                </ImageBackground>
                <View style={style.Main}>
                    <View style={style.contentButtons}>
                        <BottonCam
                            onPress={()=>setImage()}
                            title="Editar Foto" />
                        <BottonCam
                            icone="camera"
                            title="Abrir Camera" />
                    </View>
                    <View style={style.Contest}>
                        <Text style={[style.text, { color: '#000' }]}> ultimas Edição</Text>
                        {actUltimasEdt
                        ?<ScrollView
                            horizontal={true}
                            style={style.ultimasEdicao}>
                            {explo(ultimasEdt)}
                        </ScrollView>
                        :
                        <View style={{justifyContent:"center",marginTop:40,alignItems:"center"}}>
                            <Text >Nao a ultima edição</Text>
                            <AntDesign name='cloud' size={30} color="#181818" />
                        </View>
                        }
                    </View>
                </View>
            </ScrollView>

        </View>
    )
}