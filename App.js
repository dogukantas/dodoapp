//APP.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DetaySayfa from './pages/detailpage';
import AnaSayfa from './pages/anasayfa';
import Shops from './pages/shops';
import ShopDetailPage from './pages/shopDetailPage';
import LogInScreen from './pages/LoginScreen';
import { StyleSheet, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // veya başka bir ikon kütüphanesi
import Register from './pages/Register';
import Account from './pages/Account';
import Adresses from './pages/profile/Adresses';
import CreditCards from './pages/profile/CreditCards';
import FavoritePlaces from './pages/profile/FavoritePlaces';
import GiftedCoupons from './pages/profile/GiftedCoupons';
import Notifications from './pages/profile/Notifications';
import PastComments from './pages/profile/PastComments';
import PastReservations from './pages/profile/PastReservations';

// Stack ve Tab navigatorları oluştur
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigator bileşenini oluştur
function HomeTabs() {
  return (
    
    <Tab.Navigator>
      <Tab.Screen name="AnaSayfa" component={AnaSayfa} options={{ tabBarIcon: ({ color, size }) => (<Ionicons name="home" color={color} size={size} />),headerShown: false}} />
      <Tab.Screen name="Dükkanlar" component={Shops} options={{ tabBarIcon: ({ color, size }) => (<Ionicons name="compass" color={color} size={size} />),headerShown: false}} />
      <Tab.Screen name="Hesap" component={Account} options={{ tabBarIcon: ({ color, size }) => (<Ionicons name="person-outline" color={color} size={size} />),headerShown: false}} />
      <Tab.Screen name="DetaySayfa" component={DetaySayfa} options={{ headerShown: false, tabBarButton: () => null}} />
      <Tab.Screen name="ShopDetail" component={ShopDetailPage} options={{headerShown: false, tabBarButton: () => null}} />
    </Tab.Navigator>
  );
}

// Stack Navigator içinde Tab Navigator'ı kullan
export default function App() {
  return (
    
    <NavigationContainer>
      <>
    <StatusBar hidden={true} />
    {/* Uygulamanızın geri kalan içeriği */}
  </>
      <Stack.Navigator>
      <Stack.Screen 
          name="LoginScreen" 
          component={LogInScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="RegisterScreen" 
          component={Register} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Home" 
          component={HomeTabs} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="KayitliAdreslerim" 
          component={Adresses} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="KayitliKartlarim" 
          component={CreditCards} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="FavoriMekanlarım" 
          component={FavoritePlaces} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="KazandigimKuponlar" 
          component={GiftedCoupons} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Bildirimlerim" 
          component={Notifications} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="GecmisYorumlarım" 
          component={PastComments} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="GecmisRandevularim" 
          component={PastReservations} 
          options={{ headerShown: false }} 
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt :{
    fontSize: 25,
    color:"darkblue",
    margin:16,
    textAlign:'center'

  }
});
