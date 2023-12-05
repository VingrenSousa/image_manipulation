import { Modal } from "react-native";
import React, { useState } from "react";
import { View, Image, ScrollView } from "react-native";
import { style } from '../style/style'

import Botton from '../../../componetes/buttons/buttonsEdit/index'
import { manipulateAsync, SaveFormat, FlipType, ActionRotate } from 'expo-image-manipulator';


interface propsImage {
    image: string
    setImage: React.Dispatch<React.SetStateAction<string>>
    modal: boolean
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function AjustesModal({ image, setImage, modal, setModal }: propsImage) {
    const [ImageEdit, setImageEdit] = useState(image)
   
    const _cancelImage = () => {setModal(false)}
    const _salveImage = () => {
        setImage(ImageEdit)
        setModal(false)
    }
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

    return (
        <Modal
            visible={modal}
            style={{ flex: 1 }}
        >
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
                                ImageIcone={require('../../../assets/icon/flipHorizontal.png')}

                            />
                            <Botton
                                onPress={() => flip('V')}
                                sizeIc={35}
                                Title="Vertical"
                                ImageIcone={require('../../../assets/icon/flipVertical.png')}

                            />
                            <Botton
                                onPress={() => { rotete('E') }}
                                sizeIc={35}
                                Title="Esquerda"
                                ImageIcone={require('../../../assets/icon/girarEsquerda.png')}

                            />
                            <Botton
                                onPress={() => { rotete('D') }}
                                sizeIc={35}
                                Title="Direita"
                                ImageIcone={require('../../../assets/icon/girarDireita.png')}

                            />

                            <Botton
                                sizeIc={35}
                                Title="recortar"
                                ImageIcone={require('../../../assets/icon/recortar.png')}

                            />

                        </View>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    )
}