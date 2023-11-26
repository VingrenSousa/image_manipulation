import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/home/index'
import init from '../../screens/init';

  const Stack = createNativeStackNavigator();
  

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Init" component={init} />
      <Stack.Screen name="Home" component={Home} />
      
    </Stack.Navigator>
  );
}
export default MyStack