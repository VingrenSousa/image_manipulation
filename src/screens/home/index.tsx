import React, { useState } from "react";
import { View, Text, ImageBackground, TouchableOpacity, ScrollView, Image } from "react-native";
import { style } from "./style";
import { AntDesign } from '@expo/vector-icons';
import { BottonCam } from "../../componetes/buttons/buttosCam";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {
    const [plaseImage, setplaseImage] = useState(false)
    const [ultimasEdt, setUltimasEdt] = useState(false)


    const ManScresn = require('../../assets/screns_fotos/homem-tiro-medio-usando-oculos-vr.jpg')
    const GrilScresn = require('../../assets/screns_fotos/mulher-segurando-uma-xicara-de-cafe.jpg')
    const coresVibrantes = require('../../assets/screns_fotos/jovem-de-pe-na-projecao-de-textura-do-universo.jpg')
    let carrocel: any[] = [ManScresn, GrilScresn, coresVibrantes]
    const explo = (...n: any[]) => {

        return (
            <View style={style.explo}>
                {carrocel.map((n) => {
                    return (
                        <TouchableOpacity

                        >
                            <Image
                                source={n}

                                style={{
                                    width: 130
                                    , height: 170,
                                    borderRadius: 4,
                                }}


                            />
                        </TouchableOpacity>
                    )

                })

                }
            </View>)

    }



    return (
        <View style={style.Body}>
            <ImageBackground
                source={require('../../assets/screns_fotos/jovem-de-pe-na-projecao-de-textura-do-universo.jpg')}
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
                        title="Editar Foto" />
                    <BottonCam
                        icone="camera"
                        title="Abrir Camera" />
                </View>
                <View style={style.Contest}>
                    <Text style={[style.text, { color: '#000' }]}> ultimas Edição</Text>
                    <ScrollView
                        horizontal={true}
                        style={style.ultimasEdicao}>
                        {ultimasEdt
                            ? explo(ultimasEdt)
                            : explo(carrocel)
                        }
                    </ScrollView>
                </View>

            </View>

        </View>
    )
}