import { StyleSheet } from "react-native";
import { theme } from "../../style/themes";

const style=StyleSheet.create({
    main:{
        flex:1,
    },
    content:{
        flex:1,
        paddingTop:40,
        justifyContent:"space-between"
        

    },
    title:{
        fontSize:28,
        color:theme.COLORES.branco,
        fontFamily:theme.FONTES.Title
        
    },
    subTitle:{
        fontSize:18,
        color:theme.COLORES.branco,
        fontFamily:theme.FONTES.Text

    },
    labelTitle:{
        margin:20,
        gap:15,
        marginTop:40
    },
    Text:{
        fontSize:13,
        color:theme.COLORES.preto,
        fontFamily:theme.FONTES.Text,
        textAlign:"center"

    },
    button:{
        flexDirection:"row",
        marginBottom:80,
        width:'80%',
        height:50,
        justifyContent:"space-between",
        alignSelf:"center",
        borderRadius:15,
        backgroundColor:theme.COLORES.backBasicClara,
        alignItems:"center",
        paddingHorizontal:15
        
        

    }
})
export {style}