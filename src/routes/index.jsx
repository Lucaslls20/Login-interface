import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIN from "../pages/SignIn/inde";
import Welcome from "../pages/Welcome";

const Stack = createNativeStackNavigator()

export default function Routes(){
    return (
    <Stack.Navigator>
    <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}}/>
    <Stack.Screen name="SignIn" component={SignIN} options={{headerShown:false}}/>
    </Stack.Navigator>
    )
}