import { StyleSheet } from "react-native";

import { theme } from "../../style/themes";
export const style= StyleSheet.create({
    Body:{
        flex:1,
        

    },
    Header:{
        width:"100%",
        height:400,
        justifyContent:"center",
        alignItems:"center"

    },
    label:{
        color:theme.COLORES.branco ,
        textAlign: 'center',
        fontFamily: theme.FONTES.label,
        fontSize: 20,
        fontStyle:"normal",
        fontWeight: "700",
        
       
    },
    button:{
        flexDirection:"row",
        gap:7,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:15,
        borderWidth:1,
        padding:5,
        borderColor:theme.COLORES.branco ,
        top:100,
    },
    text:{
        color:theme.COLORES.branco ,
        fontWeight: "700",
        fontFamily: theme.FONTES.Text,
        
    },
    plase:{
        width:80,
        height:5,
        backgroundColor:theme.COLORES.backBasicClara,
        top:140,
        overflow:"hidden",
        borderRadius:8,

    },
    plaseActiver:{
        backgroundColor:theme.COLORES.branco,
        width:35,
        height:5,
    },
    
    Contest:{
        alignItems:"center",
     
    },
    ultimasEdicao:{
        borderRadius:5,
        
        width:"90%",
        height:200,
       
        
    },
    explo:{
         flexDirection:"row",
         gap:10,
         alignSelf:"center",
         paddingHorizontal:10,
         shadowColor: "#000000",
         shadowOffset: {
           width: 0,
           height: 6,
         },
         shadowOpacity:  0.21,
         shadowRadius: 6.65,
         elevation: 9
    },
    Main:{
        flex:1

    },
    contentButtons:{
        padding:20,
        gap:10,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"

    },
    Footer:{

    }
})