
import React, { useState,useEffect } from "react";
import { View, Image, ScrollView } from "react-native";
import { style } from '../../screens/Editar/style/style'

import Botton from '../buttons/buttonsEdit/index'
import { manipulateAsync, SaveFormat, FlipType } from 'expo-image-manipulator';

import { useNavigation,useRoute } from "@react-navigation/native";
import{PropsStack} from '../../routes/Stack/models/index'




export default function AjustesModal() {
    const navi= useNavigation<PropsStack>()
    const{params}: Readonly<any | undefined>=useRoute()

    const [ImageEdit, setImageEdit] = useState(params?.image)
    useEffect(()=>{
        setImageEdit(params?.image)
    },[params])

   
    const _cancelImage = () => {navi.goBack()}
    const _salveImage = () => {
        navi.navigate('Edites',{image:ImageEdit})}
        
    const flip = async (direcao: string) => {

        const direcaos = (): any => {
            if (direcao === 'H') {
                return FlipType.Vertical
            }
            else if (direcao === 'V') {
                return FlipType.Horizontal
            } else {
                console.log('erro')
            }
        }
        const manipResult = await manipulateAsync(
            ImageEdit,
            [{ rotate: 180 }, { flip: direcaos() }],
            { compress: 1, format: SaveFormat.PNG }
        );

        setImageEdit(manipResult.uri);

    }
    const rotete = async (direcao: string) => {


        const direcaos = (): number => {
            if (direcao === 'E') {
                return -90
            }
            else if (direcao === 'D') {
                return +90
            }
            return 0
        }
        const manipResult = await manipulateAsync(
            ImageEdit,
            [{ rotate: direcaos() }],
            { compress: 1, format: SaveFormat.PNG }
        );

        setImageEdit(manipResult.uri);

    }
    // const recortaA=()=>{
        
        
    //         navi.navigate('Recorta',{state:ImageEdit})
    //         // ImageEdit,
    //         // [{
    //         //    crop:{
    //         //     height: 100, 
    //         //     originX: 100, 
    //         //     originY: 100, 
    //         //     width: 100
    //         //    } 
    //         //  }],
    //         // { compress: 1, format: SaveFormat.PNG }
       
    // }

    return (
     
            <View style={style.body}>
                <View style={style.header}>
                    <Botton
                        sizeIc={30}
                        Title="Volta"
                        onPress={() => { _cancelImage() }}
                    />
                    <View style={style.headerbottonsSheq}>

                        <Botton
                            icone="save"

                            sizeIc={30}
                            Title="Salvar"
                            onPress={() => { _salveImage() }}

                        />
                    </View>
                </View>
                <View style={style.main}>
                    <View style={style.mainImage}>
                        <Image
                            style={{ flex: 1 }}
                            source={{ uri: ImageEdit }}
                            resizeMode="contain"
                            

                        />

                    </View>
                </View>
                <View
                    style={style.footer}>
                    <ScrollView
                        horizontal={true}
                    >
                        <View style={style.footerScroll}>
                            <Botton
                                onPress={() => flip('H')}
                                sizeIc={35}
                                Title="Honrizontal"
                                ImageIcone={require('../../assets/icon/flipHorizontal.png')}
                            />
                            <Botton
                                onPress={() => flip('V')}
                                sizeIc={35}
                                Title="Vertical"
                                ImageIcone={require('../../assets/icon/flipVertical.png')}
                            />
                            <Botton
                                onPress={() => { rotete('E') }}
                                sizeIc={35}
                                Title="Esquerda"
                                ImageIcone={require('../../assets/icon/girarEsquerda.png')}
                            />
                            <Botton
                                onPress={() => { rotete('D') }}
                                sizeIc={35}
                                Title="Direita"
                                ImageIcone={require('../../assets/icon/girarDireita.png')}
                            />
                            {/* <Botton
                             onPress={() =>recortaA()}
                                sizeIc={35}
                                Title="recortar"
                                ImageIcone={require('../../assets/icon/recortar.png')}

                            /> */}

                        </View>
                    </ScrollView>
                </View>
            </View>
       
    )
}