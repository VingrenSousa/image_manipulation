import { StyleSheet } from "react-native";
import { theme } from "../../../style/themes";
const style= StyleSheet.create({
    Body:{
        backgroundColor:theme.COLORES.tabela_Colorida.azul,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:8,
        
        maxHeight:100,
        maxWidth:150,
        height:100,
        width:150,
        

        overflow:"hidden",
        gap:10,

       

        
      
    },
    Label:{
        color:theme.COLORES.branco

    },
    sombras:{
        shadowColor: "#000000",
        shadowOffset: {
          width: 1,
          height: 6,
        },
        shadowOpacity:  0.20,
        shadowRadius: 5.62,
        elevation: 8,

    }
})
export {style}