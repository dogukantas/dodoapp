//CustomButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';



const { width } = Dimensions.get('window');

function CustomButton({ onPress, title }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width:width/2,
    padding: 10,
    borderWidth:1,
    alignItems: 'center',
    justifyContent:'center'
  },
  buttonText: {
    color:'black',
    fontSize: 16,
  },
});

export default CustomButton;
