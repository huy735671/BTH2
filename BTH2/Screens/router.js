import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Contacts from "../Screens/Contacts";
import Profile from "../Screens/Profile";
import Favorites from "../Screens/Favorites";
import User from "../Screens/User";
import { MaterialIcons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import color from "../utility/colors";
import Options from "../Screens/Options";

const getTabBarIcon = icon = ({tintColor}) =>{
    <MaterialIcons name={icon} size={26} style={{color:tintColor,}}/>
}
const Stack = createNativeStackNavigator();
const ContactsScreens =()=>{
    return(
    <Stack.Navigator initialRouteName="Contacts"
        screenOptions={{
            // headerTintColor: 'white',
            // headerStyle: { backgroundColor: 'tomato' }, 
            // headerTitleAlign: 'center',
            headerShown:false,
        }}>
        <Stack.Screen name='Contacts' component={Contacts} options={{title: "Contacts"}}/>
        <Stack.Screen
            name='Profile'
            component={Profile}
            options={({route})=>
                {
                    const {contact} = route.params; 
                    const {name}= contact;
                    return {
                    title: name.split(' ')[0],
                    headerTintColor: 'white', 
                    headerStyle: {
                    backgroundColor: color.blue,}
                    };
                }
}
/>
</Stack.Navigator>
    );
}
const FavoritesScreens =()=>{
    return(
        <Stack.Navigator initialRouteName="Favorites" screenOptions={{
             headerShown:false,
         } }>
            <Stack.Screen name = "Favorites" component={{Favorites}} options={{title: "Favorites"}}/>
            <Stack.Screen name = "Profile" component={{Profile}} options={{title: "Profile"}}/>
        </Stack.Navigator>
    );
}
const UserScreens = ({navigation}) =>{
    return (
        <Stack.Navigator initialRouteName="User">
            <Stack.Screen name ="User" component={User} options={{
                headerTitle:'Me',
                headerTintColor:'white',
                headerStyle:{
                    backgroundColor:color.blue,
                },
                headerRight: ()=>(
                    <MaterialIcons name="settings" size={24} style={{color:"white", marginRight:10}} onPress={()=> navigation.navigate('Options')}/>
                ),
            }}/>
            <Stack.Screen name="Options" component={Options} options={{title: "Options"}}/>
        </Stack.Navigator>
    );
}
const Drawer = createDrawerNavigator();
export default DrawerNavigator =() =>{
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName ="ContactsScreens" 
            // barStyle={{backgroundColor:color.blue}} label={false} activeColor={color.greyLight} inactiveColor={color.greyDark}
            >
                <Drawer.Screen name="ContactsScreens"
                //  component={ContactsScreens} 
                //  options={{tabBarIcon:getTabBarIcon('list'),
                // }}
              options={{ drawerIcon: getDrawerItemIcon('list'),}} 
                 />
                <Drawer.Screen name="FavoritesScreens" component={FavoritesScreens} options={
                {
                    drawerIcon: getDrawerItemIcon('star'),
                    }}/>
                     <Drawer.Screen name="UserScreens" component={UserScreens} options={
                {
                    drawerIcon: getDrawerItemIcon('person'),
                    }}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}