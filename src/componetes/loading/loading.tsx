import { View,ActivityIndicator } from "react-native"
import { styles } from "./style"
function Loading(){
  return(
    <View style={styles.container}>
        <ActivityIndicator
         color='#000'
         size='large'
         
         
        />
    </View>
  )  
}
export default Loading