import { StyleSheet } from "react-native";
import {theme} from '../../../style/themes'
export const style =StyleSheet.create({
    body:{
        flex:1,
        flexDirection:"column",
        justifyContent:"space-between",
       
    },
    header:{
        flexDirection:"row" ,
        width:'100%',
        height:120,
        backgroundColor:theme.COLORES.tabela_Profunda.escuro,
        alignItems:"center",
        paddingTop:20,
        paddingHorizontal:20,
        justifyContent:"space-between",
        elevation:10,
        zIndex:10
    },
    headerbottonsSheq:{
        flexDirection:"row" ,
        gap:15

    },
    main:{
        backgroundColor:theme.COLORES.preto,
        flex:1
    },
    mainImage:{
        alignSelf:"center",
        width:100*3,
        height:170*3,
        zIndex:1,
    
    },
    footer:{
        flexDirection:"row",
        width:'100%',
        height:150,
        backgroundColor:theme.COLORES.tabela_Profunda.escuro,
        elevation:10,
        zIndex:10
       

    },
    footerScroll:{
        flexDirection:"row",
        gap:30,
        alignItems:"flex-start",
        marginTop:20,
        marginHorizontal:20
        
        
        
    },
    recortes:{
        borderWidth:0.5,
        borderColor:'#a1a0a0d5',
        flexDirection:'column',
        justifyContent:"space-between",
        backgroundColor:'rgba(44, 32, 212, 0.1)',
        
        

    },
    recortesCuboContaine:{
        justifyContent:"space-between",
        flexDirection:"row",
        
    },
    //top
    recortesCuboTopEsquerda:{
        
        width:40,
        height:40,
        borderTopWidth:3,
        borderLeftWidth:3,
        borderColor:'#FFF',
        bottom:2,
        right:2

        
    },
    recortesCuboTopCenter:{
        
        width:30,
        height:30,
        borderTopWidth:3,
        borderColor:'#FFF',
        bottom:2,
        

    },
    recortesCuboTopDireita:{
        
        width:40,
        height:40,
        borderTopWidth:3,
        borderColor:'#FFF',
        borderRightWidth:3,
        bottom:2,
        left:2

    },
    //baixo
    recortesCubobottonCenter:{
        width:40,
        height:40,
        borderBottomWidth:3,
        borderColor:'#FFF',
        top:2,
        justifyContent:"center",
        alignItems:"center"
        

    },
    recortesCubobottonEsquerda:{
        width:40,
        height:40,
        borderBottomWidth:3,
        borderColor:'#FFF',
        borderLeftWidth:3,
        top:2,
        right:2


    },
    recortesCubobottonDireita:{
        width:40,
        height:40,
        borderBottomWidth:3,
        borderColor:'#FFF',
        borderRightWidth:3,
        top:2,
        left:2

    },
    //center
    recortesCuboCenterEsquerda:{
        width:40,
        height:40,
        borderLeftWidth:3,
        borderColor:'#FFF',
        right:2

    },
    recortesCuboCenterDireita:{
        width:40,
        height:40,
        borderRightWidth:3,
        borderColor:'#FFF',
        left:2,
        justifyContent:"center",
        alignItems:"center",
       
        overflow:"visible"




    }
})