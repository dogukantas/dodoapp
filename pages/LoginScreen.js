//LoginScreen .js
import { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const LogInScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleLogin = () => {
    if (phoneNumber === '1234') {
      // HomeTabs ekranına git, bu otomatik olarak AnaSayfa ekranını açacaktır.
      navigation.navigate('Home');
    } else {
      // Hata mesajı göster
      Alert.alert('Error', 'The phone number is incorrect.');
    }
  };

  return (
    <LinearGradient colors={['#00FA9A', '#00BFFF']} style={{ flex: 1 }}>
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ marginBottom: 20 }}>
        {/* This would be replaced with your app's logo image */}
      </View>
      <TextInput
        style={{ padding:15,height: 60,width:250, borderColor: 'transparent', borderWidth: 1, marginBottom: 20, backgroundColor:'white', borderRadius:16 }}
        onChangeText={text => setPhoneNumber(text)}
        value={phoneNumber}
        placeholder="Enter phone number"
        keyboardType="phone-pad"
      />
      <View stlye={{marginBottom:16}}>
      <Button
        title="Log in"
        onPress={handleLogin}
      />
      </View>
      <View style={{marginTop:16}}>
      <Button
        title="Don't you have an account?"
        onPress={() => navigation.navigate('RegisterScreen')} // Replace with your sign-up screen
      />
      </View>
    </View>
    </LinearGradient>
  );
};

export default LogInScreen;