//shops.js

import React,{useState,useEffect, useRef } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Colors from '../color/color';
import { useNavigation } from '@react-navigation/native';
import ShopDetailPage from './shopDetailPage';
import CustomButton from '../components/CustomButton';



const { width } = Dimensions.get('window');



const ShopCard = ({ name, distance, reviews,image1, onPress}) => {

  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.card}>
      <Image
        source={image1}
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
    { name: 'QWE Erkek Kuaförü', distance: '2km', reviews: '265', image1:require('./images/ian.jpg')},
    { name: 'Neco Erkek Kuaförü', distance: '8km', reviews: '129', image1:require('./images/beckham.jpg')},
    { name: 'Stylish Berber', distance: '12km', reviews: '9', image1:require('./images/margot.jpg')},
    { name: 'QWE Erkek Kuaförü', distance: '2km', reviews: '265', image1:require('./images/beckham.jpg')},
    { name: 'Neco Erkek Kuaförü', distance: '8km', reviews: '129', image1:require('./images/ian.jpg')},
   
    // Diğer dükkan bilgileri...
  ];

  const images = [require('./images/merryCristmas.jpg'),
  require('./images/feelHot.jpg'),
  require('./images/hotter.jpg'),
  require('./images/handsome.jpg'),];

  const [active, setActive] = useState(0);
  const scrollRef = useRef();


    const handleShopPress = () => {
      navigation.navigate("ShopDetail");
    };

    useEffect(() => {
      const interval = setInterval(() => {
        setActive(prevActive => {
          const nextActive = prevActive === images.length - 1 ? 0 : prevActive + 1;
  
          // ScrollView'ı yeni aktif resme kaydır
          if (scrollRef.current) {
            scrollRef.current.scrollTo({
              animated: true,
              y: 0,
              x: width * nextActive
            });
          }
  
          return nextActive;
        });
      }, 5000); // 5 saniyede bir kaydır
  
      return () => clearInterval(interval);
    }, []);

  return (
    <LinearGradient colors={['white', 'white']} style={{ flex: 1 }}>
      <View>
      <Image
        source={require('./images/header.jpg')}
        style={styles.headerImage}
      />
      </View>
      
    <ScrollView style={styles.outerContainer}>
    <View style={styles.headerButtons}>
        <CustomButton title='Atatürk mah. 202/...' style={styles.customButton}/>
        <CustomButton title='Bildirimler' style={styles.customButton}/>
      </View>

      <ScrollView 
        horizontal  
        pagingEnabled 
        ref={scrollRef}
        showsHorizontalScrollIndicator={false} 
        style={styles.imageContainer}>
          {images.map((image, index) => (
            <Image key={index} source={image} style={styles.imageCard} />
          ))}
        </ScrollView>
    
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
    borderWidth:1,
    padding: 20,
    marginTop:3,
    borderTopWidth:0
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
  headerButtons:{
    backgroundColor:'transparent',
    flexDirection:'row'
  },
  headerImage:{
    width:width,
    height:100
  },
  imageContainer: {
    width:width,
    flexDirection: 'row',
  },
  imageCard: {
    width: width, // Resim boyutunuzu ayarlayın
    height: 250, // Resim boyutunuzu ayarlayın
     // Resimler arası boşluk
  },
  customButton:{
    width:width/2,
    backgroundColor:'#FCEABA',
    padding:12,
    borderRightWidth:1
  }
});

