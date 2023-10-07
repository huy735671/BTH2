import { useEffect, useState } from "react"
import { StyleSheet, View, Text } from "react-native";
import {fetchRadomContact} from '../utility/api';
import ContactThumbnail from '../component/ContactThumbnail';
import DetaiListItem from "../component/DetaiIListItem";
import colors from "../utility/colors";




const Profile =({ route}) =>
{
    // const [contact, setContact] = useState({});
    // useEffect(()=>
    // {
    //     fetchRadomContact().then(
    //         contact => setContact(contact)
    //     )
    // },[]);
    const{contact} = route.params;
    const { avatar, name, email, phone, cell} = contact;
    return(
        <View style={ styles.Container}>
            <View style={styles.avatarSection}>
                <ContactThumbnail avatar={avatar} name={name} phone={phone}/>

            </View>
            <View style={styles.detailsSection}>
                <DetaiListItem icon='mail' title='Email' subtitle={email}/>
                <DetaiListItem icon="phone" title="work" subtitle={phone}/>
                <DetaiListItem icon="smartphone" title="Personal" subtitle={cell}/>

            </View>
        </View>
    );
}

export default Profile;
const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    avatarSection:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:  colors.blue,
    },
    detailsSection: {
        flex: 1,
        backgroundColor: 'white',
    },
});