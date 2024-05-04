import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator()
import Home from './screens/Home'
import Profile from './screens/Profile'
import EditProfile from './screens/EditProfile'
import Logo from "./Logo";
export default Navigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShadowVisible: false }} >
             <Stack.Screen name="Home" component={Home} options={{ title: "Ana Sayfa",
             headerLeft: () => <Logo />,
             headerStyle: { backgroundColor: "green" }, headerTintColor: "red",
              headerTitleStyle: { fontWeight: "bold", fontSize: 30, color: "red", 
              fontFamily: "Times New Roman" } }} />
               <Stack.Screen name="Profile" component={Profile} options={{ title: "Profil Sayfası",
             headerStyle: { backgroundColor: "green" }, headerTintColor: "red", headerTitleStyle: { fontWeight: "bold", fontSize: 30, color: "red", fontFamily: "Times New Roman" } }} />
            <Stack.Screen name="EditProfile" component={EditProfile} options={{ title: "Profil Düzenle" }} />
        </Stack.Navigator>
    )
}