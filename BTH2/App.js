import React from "react";
import {View, Text} from "react-native";
import Contacts  from "../BTH2/Screens/Contacts";
import Profile from "../BTH2/Screens/Profile";
import DrawerNavigator from "../BTH2/Screens/router";
import Favorites from "../BTH2/Screens/Favorites";
import User from "../BTH2/Screens/User";
import Options from "../BTH2/Screens/Options";
import Store from "../BTH2/store";
import {Provider} from "react-redux";
import 'react-native-get-random-values';

export default App=()=>{
    return( 
    <Provider store={Store}>
        <DrawerNavigator/>
    </Provider>
    );
}