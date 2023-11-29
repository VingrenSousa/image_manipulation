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
    
   

    const ManScresn = require('../../assets/screns_fotos/homem-tiro-medio-usando-oculos-vr.jpg')
    const GrilScresn = require('../../assets/screns_fotos/mulher-segurando-uma-xicara-de-cafe.jpg')
    const coresVibrantes = require('../../assets/screns_fotos/jovem-de-pe-na-projecao-de-textura-do-universo.jpg')
     

    const explo = (n:{}[]) => {
       
        return (
            <View style={style.explo}>
                {n.map((data) => {
                    return (
                        <TouchableOpacity>
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
            navi.navigate('Edites',{image:requires[0].uri}); 

        }
        
        
    }

    return (
        <View style={style.Body}>
            <ImageBackground
                source={coresVibrantes}
                style={style.Header}>
                <Text style={style.label}>
                    Veja como você ficaria com cores vibrantes
                </Text>
                <TouchableOpacity
                    onPress={() => { setplaseImage(!plaseImage)
                        AsyncStorage.clear() }}
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

        </View>
    )
}