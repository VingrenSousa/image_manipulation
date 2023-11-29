import { StyleSheet } from "react-native";

export const style =StyleSheet.create({
    body:{
        flex:1,
        flexDirection:"column",
        justifyContent:"space-between",
       
    },
    header:{
        flexDirection:"row" ,
        width:'100%',
        height:100,
        backgroundColor:'#43e922'
    },
    main:{
        backgroundColor:'#b4459c',
        flex:1
    },
    footer:{
        flexDirection:"row",
        width:'100%',
        height:100,
        backgroundColor:'#b44545'

    },
    footerScroll:{
        flex:1
    }
})