import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';



const Acordion = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);
  const animationController = useRef(new Animated.Value(0)).current;

  const toggleExpanded = () => {
    setExpanded(!expanded);
    Animated.timing(animationController, {
      toValue: expanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false
    }).start();
  };

  const maxHeight = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 300] // 300 burada açılacak içeriğin maksimum yüksekliği
  });

  return (
    <View>
      <TouchableOpacity style={styles.header} onPress={toggleExpanded}>
        <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10}}>
            <Text style={{fontWeight:'bold'}}>{title}</Text>
            <Ionicons name="chevron-down-outline" size={25} color="#F6943F" style={{marginRight:10}} />
        {/* Burada ok simgesi veya istediğiniz bir simge ekleyebilirsiniz */}
        </View>
      </TouchableOpacity>
      <Animated.View style={[styles.content, { maxHeight }]}>
        {children}
      </Animated.View>
    </View>
  );
};



export default Acordion;


const styles = StyleSheet.create({
    header: {
      fontWeight:'bold'
    },
    content: {
      overflow: 'hidden',
      marginLeft:5
      // İçerik stilinizi burada tanımlayın
    },
  });