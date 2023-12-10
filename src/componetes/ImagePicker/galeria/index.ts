import * as ImagePicker from 'expo-image-picker'


const RequireImage=async()=>{
    const {granted}= await  ImagePicker.requestMediaLibraryPermissionsAsync()
    if(!granted){
        return('not permission')
    }
    const {assets ,canceled}= await ImagePicker.launchImageLibraryAsync({
        mediaTypes:ImagePicker.MediaTypeOptions.Images,
         base64:true,
         allowsEditing:true,
         aspect:[16,9],  
         quality:1,

    })
    if(canceled){
        
        return false
        
    }
    return assets
    

}
export{ RequireImage}