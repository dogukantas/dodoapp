import React, { useState,useEffect, useRef  } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity,Dimensions, StatusBar  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import CustomButton from '../components/CustomButton';
import { Ionicons } from '@expo/vector-icons'; // veya başka bir ikon kütüphanesi



const { width } = Dimensions.get('window');

//DETAY KISMINDA NELER OLACAĞI
const DetailContent = () => {

  const navigation = useNavigation(); // Use useNavigation hook to get the navigation prop

  // const [isModalVisible, setModalVisible] = useState(false);

  // const toggleModal = () => {
  //   setModalVisible(!isModalVisible);
  // };

  // 'Detay' sekmesine özel işlemler burada
  return (
    
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('DetaySayfa')}>
          <View style={styles.content}>
            <Text>Saç Kesimi</Text>
            <Text>150$</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('DetaySayfa')}>
          <View style={styles.content}>
            <Text>Saç Kesimi</Text>
            <Text>150$</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('DetaySayfa')}>
          <View style={styles.content}>
            <Text>Saç Kesimi</Text>
            <Text>150$</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('DetaySayfa')}>
          <View style={styles.content}>
            <Text>Saç Kesimi</Text>
            <Text>150$</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('DetaySayfa')}>
          <View style={styles.content}>
            <Text>Saç Kesimi</Text>
            <Text>150$</Text>
          </View>
        </TouchableOpacity>
      </View>
    
  
  );
};

//INFO KIMSINDA NELER OLACAĞI
const InfoContent = () => {
  // 'Bilgi' sekmesine özel işlemler burada
  return (
    <View>
      <Text>Bilgi içeriği buraya</Text>
      {/* Diğer bilgi bileşenleri */}
    </View>
  );
};


//YORUMLAR NELER OLACAĞI
const CommentsContent = () => {
  // 'Yorumlar' sekmesine özel işlemler burada
  return (
    <View>
      <View style={styles.commentContainer}>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <Text style={styles.commentUserName}>Doğukan Taş</Text>
          <Ionicons name="star-half-outline" size={25} color="orange" />
        </View>
        <Text>Hizmet, hijyen 10 numara. Selçuk demir adlı kalfadan tıraş oldum. Biraz uzun sürdü ama acele işe şeytan karışmasın baya iyiydi.</Text>
      </View>
      <View style={styles.commentContainer}>
      <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:5}}>
          <Text style={styles.commentUserName}>Beyzanur Kayaalp</Text>
          <Ionicons name="star-half-outline" size={25} color="orange" />
        </View>
        <Text>Beğenmedim. Saçımı kesmek istemiyordum zorladı ve hiç hoş olmadı.</Text>
      </View>
      <View style={styles.commentContainer}>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <Text style={styles.commentUserName}>Mehmet Çığırgan</Text>
          <Ionicons name="star-half-outline" size={25} color="orange" />
        </View>
        <Text>Pahalıydı bence geçen sefer gittiğim yer 50tl daha ucuzdu</Text>
      </View>
      {/* Diğer yorum bileşenleri */}
    </View>
  );
};

const MapContent = () => {
  // 'Yorumlar' sekmesine özel işlemler burada
  return (
    <View style={styles.imageContainer}>
      <Image source={require('./images/map.jpg')} style={styles.image} />
    </View>
  );
};


function ShopDetailPage() {

  const [active, setActive] = useState(0);
  const scrollRef = useRef();

  const [activeTab, setActiveTab] = useState('Detay');


  //TAB RENDER FONKSİYONU
  const renderContent = () => {
    switch (activeTab) {
      case 'Detay':
        return <DetailContent />;
      case 'Bilgi':
        return <InfoContent />;
      case 'Yorumlar':
        return <CommentsContent />;
        case 'XXXXXXX':
        return <MapContent />;
      default:
        return null;
    }
  };


  // Resimlerinizi ve tab başlıklarınızı bu dizilere ekleyin.
  const images = ['https://wallpapers.com/images/hd/fight-club-red-and-blue-poster-qnhfbor2mck7qaxt.jpg', 
  'https://images7.alphacoders.com/800/800329.jpg', 
  'https://w.forfun.com/fetch/24/24418c1e4cc00ffab2b667c047a9606e.jpeg'];
  const tabs = ['Detay', 'Bilgi', 'Yorumlar',"XXXXXXX","QWEWQEW","SADSA"];

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
      
      <ScrollView style={styles.container}>
      <View style={styles.headerButtons}>
        <CustomButton title='Adres'/>
        <CustomButton title='XQXQXXQX'/>
      </View>
        <ScrollView 
        horizontal  
        pagingEnabled 
        ref={scrollRef}
        showsHorizontalScrollIndicator={false} 
        style={styles.imageContainer}>
          {images.map((image, index) => (
            <Image key={index} source={{ uri: image }} style={styles.image} />
          ))}
        </ScrollView>

        {/* TITLE KISMI */}
        
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Neco Erkek Kuaförü</Text>
        </View>

        <LinearGradient colors={['transparent', 'transparent']} style={{borderTopLeftRadius:360}}>
        <View style={styles.cardContainer}>


        {/* TABBAR KISMI */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsContainer}>
          {tabs.map((tab, index) => (
            <TouchableOpacity 
            key={index}
              style={[styles.tab, activeTab === tab ? styles.activeTab : null]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={styles.tabText}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* İçerik kısmı */}
        <View>
        {renderContent()}
        </View>
        </View>
        </LinearGradient>
        
      </ScrollView>
    </LinearGradient>
  );
}

export default ShopDetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  closeButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  imageContainer: {
    width:width,
    flexDirection: 'row'
  },
  image: {
    width: width, // Resim boyutunuzu ayarlayın
    height: 250, // Resim boyutunuzu ayarlayın
     // Resimler arası boşluk
  },
  tabsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  tab: {
    marginHorizontal: 5, // Sekmeler arası boşluk
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent', // Aktif tab için rengi değiştirin
  },
  tabText: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold"
  },
  content: {
    width:width,
    height:75,
    
    backgroundColor:'transparent',
    padding: 20,
    borderWidth: 1,
    borderTopColor: 'grey',
   
    
  },
  contentText: {
    fontSize: 16,
    color: '#333',
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
    fontStyle:'italic',
    color:'#FA3D76'
  },
  titleContainer:{
    
    marginTop:30,
    marginLeft:10,
    marginBottom: 30
  },
  cardContainer:{
    backgroundColor:'transparent',
    borderTopStartRadius:360,
  },
  headerImage:{
    width:width,
    height:100
  },
  headerButtons:{
    backgroundColor:'transparent',
    flexDirection:'row'
  },
  commentContainer:{
    width:width-2,
    borderWidth:1,
    justifyContent:'center',
    padding:15,
    marginHorizontal:1,
    marginBottom:1
  },
  commentUserName:{
    fontWeight:'bold',
    color:'darkred'
  }
});
