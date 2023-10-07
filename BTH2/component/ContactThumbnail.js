import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import propTypes from 'prop-types'
import React from 'react'

const ContactThumbNail = ({name, phone, avatar, textcolor, onPress}) =>{
    const colorStyle = {
        color: textcolor,
    };
    const ImageComponent = onPress ? TouchableOpacity : View;
    return(
        <View style={StyleSheet.container}>
            <ImageComponent onPress={onPress}>
                <Image source={{
                    uri: avatar,
                }}
                style={StyleSheet.avatar}/>
            </ImageComponent>
            {
                name !== '' && <Text style ={[styles.name, colorStyle]}>{name}</Text>
            }

            {
                phone !== '' && (
                    <View style={styles.phoneSection}>
                    <Icon name="phone" size={16} style={{color: textcolor}}/>
                
                    <Text style={[styles.phone, colorStyle]}>{phone}</Text>    
                    </View>

                )
            }
        </View>
    );
};
export default ContactThumbNail;

ContactThumbNail.propTypes = {
    name: propTypes.string,
    avatar: propTypes.string,
    phone: propTypes.string,
    onPress: propTypes.func,
};

ContactThumbNail.defaultProps = {
    name: '',
    phone: '',
    textcolor: 'white',
    onPress: null,
};

const styles = StyleSheet.create({
    container:{
        paddingVertical: 30,
        marginHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: 90,
        height: 90,
        borderRadius: 45,
        borderColor: 'white',
        borderWidth: 2,

    },
    name: {
        fontSize: 20,
        marginTop: 24,
        marginBottom: 2,
        fontWeight: 'bold',
    },
    phoneSection: {
        flexDirection: 'row',
        marginTop: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    phone: {
        marginLeft: 4,
        fontSize: 16,
        fontWeight: 'bold',
    },

});