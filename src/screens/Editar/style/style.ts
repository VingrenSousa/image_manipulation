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
        
        
        
    }
})