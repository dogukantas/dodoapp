import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';


const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleGenderChange = (value) => {
    setGender(value);
  };

  const handleSignUp = () => {
    // Kayıt işlemleri burada gerçekleştirilebilir
    console.log('Name:', name);
    console.log('Surname:', surname);
    console.log('Gender:', gender);
    console.log('Email:', email);
    console.log('Address:', address);
  };

  const handleSignUpWithGoogle = () => {
    // Google ile kayıt işlemleri burada gerçekleştirilebilir
    console.log('Sign Up with Google');
  };

  return (
    <LinearGradient colors={['#00FA9A', '#00BFFF']} style={{ flex: 1 }}>
        <View style={styles.container}>

    <View style={{ padding: 16 }}>
      <Text>Name</Text>
      <TextInput
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.txtInput}
      />

      <Text>Surname</Text>
      <TextInput
        value={surname}
        onChangeText={(text) => setSurname(text)}
        style={styles.txtInput}
      />

      <Text>Gender</Text>
      <Picker
        selectedValue={gender}
        onValueChange={(itemValue) => handleGenderChange(itemValue)}
        style={{ height: 50, width: 200, marginBottom: 16 }}
      >
        <Picker.Item label="Select Gender" value="" />
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
        <Picker.Item label="Other" value="other" />
      </Picker>

      <Text>Email Address</Text>
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.txtInput}
      />

      <Text>Address</Text>
      <TextInput
        value={address}
        onChangeText={(text) => setAddress(text)}
        style={styles.txtInput}
      />
        <View style={{marginTop:16}}>
      <Button title="Sign Up" onPress={() => navigation.navigate('LoginScreen')} />
      </View>
      <View style={{ marginTop: 16 }}>
        <Button title="Sign Up with Google" onPress={() => navigation.navigate('LoginScreen')}  />
      </View>
    </View>
    </View>
    </LinearGradient>
  );
};

export default Register;

const styles = StyleSheet.create({
    txtInput:{
        width:350,
        height:50,
        padding:15,
        borderRadius:12,
        backgroundColor:'white'
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
   
})