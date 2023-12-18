//anasayfa.js

import React,{useState} from 'react';
import { View, Text, Image, Dimensions, StyleSheet, FlatList,  ScrollView, TouchableOpacity } from 'react-native';
import Colors from '../color/color';
import {LinearGradient} from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';




const data = [
  { key: 'x', name: 'Berber', iconName: 'scissors' },
  { key: 'y', name: 'Kadın Kuaförü', iconName: 'female' },
  { key: 'z', name: 'Güzellik Salonu' , iconName: 'paint-brush'},
  { key: 'a', name: 'Nail Art', iconName: 'magic' },
  { key: 'b', name: 'Tattoo Art' , iconName: 'ra'},
  { key: 'c', name: 'Diş Doktoru' , iconName: 'bandcamp'},
  { key: 'd', name: 'Avukat', iconName: 'vcard'},
  { key: 'e', name: 'Veteriner', iconName: 'gitlab' },
  { key: 'f', name: 'Pet Kuaför', iconName: 'motorcycle' },
  { key: 'g', name: 'Diş Doktoruq' , iconName: 'amazon'},
  { key: 'h', name: 'Avukatq', iconName: 'pinterest-p' },
  { key: 'i', name: 'Veterinerq', iconName: 'firefox' },
  { key: 'j', name: 'Pet Kuaförq', iconName: 'user-secret' },
];




const { width } = Dimensions.get('window');


function AnaSayfa() {

  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{ padding: 10, margin: 5, backgroundColor: '#FFEDC6',width:100, height:100, alignItems:'center',justifyContent:'center', borderRadius:16 }}
      onPress={() => navigation.navigate('Dükkanlar', { name: item.name })}
    >
    <Icon name={item.iconName} size={30} color="#900" />
    <Text>{item.name}</Text>
    </TouchableOpacity>
  );


  return (
    
    
    <LinearGradient colors={['#00FA9A', '#00BFFF']} style={{ flex: 1 }}>
    <View style={{alignItems:'center',flex:1}}>
    <View style={styles.imageContainer}>
      <Image source={require('./images/dodo.jpg')} style={styles.image} />
    </View>
    
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        numColumns={3}
      />
      
    </View>
    </LinearGradient>
    
    
  );
}

export default AnaSayfa;

const styles = StyleSheet.create({
  image:{
    width:width,
    height:width,
    borderBottomRightRadius:40,
    borderBottomLeftRadius:40

  },
  imageContainer:{
    width:width,
    flexDirection:'row',
    borderBottomRightRadius:40,
    borderBottomLeftRadius:40,
    marginBottom:20
  },
  textInput :{
    width:250,
    height: 70, 
    borderRadius:16, 
    margin: 10, 
    padding: 5,
    backgroundColor:'white'
  },
  inputContainer:{
    alignItems:'center'
  }
})
