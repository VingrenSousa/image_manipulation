import { View,Text,Button} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PropsStack,propsNavigationsStack } from "../../routes/Stack/models";
import { useNavigation } from "@react-navigation/native";


export default function Home(){

   const {navigate}=useNavigation<PropsStack>()
    const test=async()=>{
      
     AsyncStorage.clear()
     const testtt = await AsyncStorage.getItem('introDisplayed')
     console.log(testtt)
     navigate('Init')
    }
    return(
        <View style={{alignItems:"center",justifyContent:"center",flex:1}}>
            <Text>
                home
            </Text>
            <Button 
            title="clear"
            onPress={()=>{test()}}/>
        </View>
    )
}