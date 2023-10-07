import { useEffect, useState } from "react";
import { fetchContacts } from "../utility/api";
import ContactListItem from "../component/ContactListItem";
import { ActivityIndicator, FlatList, View } from "react-native";
import { fetchContactsLoading, fetchContactsSuccess, fetchContactsError } from '../store';
import { useDispatch, useSelector } from "react-redux";
import { State } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
    

const keyExtractor = ({ phone }) =>phone;
const Contacts = ({navigation}) =>
{
    // const [contact, setContacts] = useState([]);
    // const [loading, setLoading] = useState([false]);
    // const [error, serError] = useState([false]);
    const{contacts, loading, error} = useSelector((State) => State);
    const dispatch = useDispatch();
    useEffect (() => {
        fetchContacts()
        .then(
                 Contacts =>{
                //     setContacts(contacts);
                //     setLoading(false);
                //     setError(false);
                dispatch(fetchContactsSuccess(contacts));
        }
        )
        .catch(
            e =>{
                // console.log(e);
                // setLoading(false);
                // setError(true);
                dispatch(fetchContactsError());
            }
        )
    },[])

    const contactsSorted = contacts.sort((a,b) => a.name.localeCompare(b.name));
    const renderContact = ({item}) =>{
        const { name, avatar, phone} = item;
        return <ContactListItem
                 name={name} 
                 avatar={avatar} 
                 phone={phone} 
                 onPress={()=>navigation.navigate("Profile",{ contact: item})}/>;

    };
    return (
        <View style={StyleSheet.container}>
            {loading && <ActivityIndicator color="blue " size="large"/>}
            {error && <Text>error...</Text>}
            {!loading && !error &&(
                <FlatList
                    data={contactsSorted}
                    keyExtractor={keyExtractor}
                    renderItem={renderContact}/>

            )}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        flex: 1,
    },
});
export default Contacts;