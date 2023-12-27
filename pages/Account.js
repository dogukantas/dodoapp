// Account.js

import { View,Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import React,{useState} from 'react';
import { Ionicons } from '@expo/vector-icons';





const { width } = Dimensions.get('window');


function Account({navigation}) { 

    return(
        
    <View>
        <View>
            <Image
             source={require('./images/header.jpg')}
            style={styles.headerImage}
            />
        </View>
        <View style={styles.container}>
            <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("Bildirimlerim")}>
                <Text style={styles.text}>Bildirimler</Text>
                <Ionicons name="notifications-outline" size={25} color="orange" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("KayitliAdreslerim")}>
                <Text style={styles.text}>Kayıtlı Adreslerim</Text>
                <Ionicons name="location-outline" size={25} color="orange"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("KayitliKartlarim")}>
                <Text style={styles.text}>Kayıtlı Kartlarım</Text>
                <Ionicons name="card-outline" size={25} color="orange" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("GecmisRandevularim")}>
                <Text style={styles.text}>Geçmiş Randevularım</Text>
                <Ionicons name="planet-outline" size={25} color="orange" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("FavoriMekanlarım")}>
                <Text style={styles.text}>Favori Mekanlarım</Text>
                <Ionicons name="heart-outline" size={25} color="orange" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("GecmisYorumlarım")}>
                <Text style={styles.text}>Geçmiş Yorumlarım</Text>
                <Ionicons name="text-outline" size={25} color="orange" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("KazandigimKuponlar")}>
                <Text style={styles.text}>Kazandığım Kuponlar</Text>
                <Ionicons name="gift-outline" size={25} color="orange" />
            </TouchableOpacity>
        </View>
    </View>
    )
}

export default Account;

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        color:'darkred',
        fontWeight:'bold'
    },
    headerImage:{
        width:width,
        height:100,
    },
    card:{
        padding:15,
        height:60,
        borderBottomWidth:1,
        width:width,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
})
