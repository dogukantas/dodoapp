//shops.js

import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Colors from '../color/color';
import { useNavigation } from '@react-navigation/native';
import ShopDetailPage from './shopDetailPage';



const { width } = Dimensions.get('window');



const ShopCard = ({ name, distance, reviews, onPress}) => {

  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.card}>
      <Image
        source={{ uri: 'https://marketplace.canva.com/EAFRjQYrOoU/1/0/1600w/canva-black-and-white-modern-barber-shop-logo-wJRJ22uj-3A.jpg' }}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.distance}>{distance}</Text>
        <Text style={styles.reviews}>{reviews} yorum </Text>
        
      </View>
    </View>
    </TouchableOpacity>
  );
};

function Shops({navigation}) {

  // Burada mağaza bilgilerini bir array olarak alabilirsiniz.
  // Örnek bir data array'i kullanılacak.
  const shopsData = [
    { name: 'QWE Erkek Kuaförü', distance: '2km', reviews: '265'},
    { name: 'Neco Erkek Kuaförü', distance: '8km', reviews: '129'},
    { name: 'Stylish Berber', distance: '12km', reviews: '9'},
    { name: 'QWE Erkek Kuaförü', distance: '2km', reviews: '265'},
    { name: 'Neco Erkek Kuaförü', distance: '8km', reviews: '129'},
   
    // Diğer dükkan bilgileri...
  ];


    const handleShopPress = () => {
      navigation.navigate("ShopDetail");
    };

  return (
    <LinearGradient colors={['#00FA9A', '#00BFFF']} style={{ flex: 1 }}>
      
    <ScrollView style={styles.outerContainer}>
    <View style={styles.imageContainer}>
      <Image source={require('./images/pick.jpg')} style={styles.imageBigger} />
    </View>
    
      {shopsData.map((shop, index) => (
        <ShopCard
          key={index}
          name={shop.name}
          distance={shop.distance}
          reviews={shop.reviews}
          onPress={handleShopPress}
          />
      ))}
      
    </ScrollView>
    </LinearGradient>
  );


        


}

export default Shops;

const styles = StyleSheet.create({
  outerContainer:{
    flex:1
  },
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  card: {
    flexDirection: 'row',
    backgroundColor:'white',
    padding: 20,
    margin: 10,
    borderRadius: 15,
  },
  image: {
    width: 75,
    height: 75,
    marginRight: 10,
    // Resminizi stilize etmek için özellikleri buraya ekleyebilirsiniz.
  },
  info: {
    justifyContent: 'center',
  },
  name: {
    fontWeight: 'bold',
  },
  distance: {
    color:'#900'

  },
  reviews: {
    color:'#900'
  },
  imageBigger:{
    width:width,
    height:width/2

  },
});

