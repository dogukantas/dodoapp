// DetaySayfa.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, DataDetectorTypes, Dimensions,Image, Platform, Button } from 'react-native';
import Colors from '../color/color';
import {LinearGradient} from 'expo-linear-gradient';
import CustomButton from '../components/CustomButton';
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

const { width } = Dimensions.get('window');





function DetaySayfa() {
  
   const [date, setDate] = useState(new Date());
   const [mode, setMode] = useState('date');
   const [show, setShow] = useState(false);
   const [text, setText] = useState('Empty');

   const onChange = (event,selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS==='android');
    setDate(currentDate);

    let tempDate =new Date(currentDate);
    let fDate=tempDate.getDate() + '/ '+ (tempDate.getMonth() +1) + '/' + tempDate.getFullYear();
    let fTime = 'Hours' + tempDate.getHours() + '| Nşbytes ' + tempDate.getMinutes();
    setText(fDate + '\n' + fTime)

    console.log(fDate + '(' + fTime + ')')


   }
   const showMode =(currentMode) => {
    setShow(false);
    setMode(currentMode)
   }




  // const handleDateChange = (date) => {
  //   // Burada seçilen tarih ile yapmak istediğiniz işlemleri gerçekleştirebilirsiniz.
  //   setSelectedDate(date);
  // };


  const handleButtonPress = () => {
    // Handle button press logic here
    console.log('Button pressed!');
  };

  return (
    <LinearGradient colors={['#00FA9A', '#00BFFF']} style={{ flex: 1 }}>

    <ScrollView style={styles.outerContainer}>
      <View style={styles.container}>


      <View style={styles.card}>
          <View style={styles.cardInner}> 
          <Image
        source={{ uri: 'https://image.cnnturk.com/i/cnnturk/75/740x416/651f3d28ae0a910ed4638946.jpg' }}
        style={styles.image}
      />
            <Text style={styles.txt}>İsmail Kartal</Text>
            <CustomButton onPress={handleButtonPress} title="Seç" />
          </View>
          
        </View>

        <View style={styles.card}>
          <View style={styles.cardInner}> 
          <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Fatih_Terim_2018.jpg/250px-Fatih_Terim_2018.jpg' }}
        style={styles.image}
      />
            <Text style={styles.txt}>Fatih Terim</Text>
            <CustomButton onPress={handleButtonPress} title="Seç" />
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardInner}> 
          <Image
        source={{ uri: 'https://cdnuploads.aa.com.tr/uploads/Contents/2023/03/31/thumbs_b_c_bce4fc88de33ffde82b3d85d33383b76.jpg' }}
        style={styles.image}
      />
            <Text style={styles.txt}>Pep Guardiola</Text>
            <CustomButton onPress={handleButtonPress} title="Seç" />
          </View>
         
        </View>

        <View>
      {/* <Text>Seçilen Tarih: {selectedDate}</Text> */}
      {/* <DatePicker

        style={{ width: 200 }}
        date={selectedDate}
        mode="date"
        placeholder="Tarih Seçin"
        format="YYYY-MM-DD"
        minDate="2022-01-01"
        maxDate="2023-12-31"
        confirmBtnText="Onayla"
        cancelBtnText="İptal"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: 36,
          },
        }}
        onDateChange={handleDateChange}
      /> */}

      <Text style={{fontWeight:'bold', fontSize:20}}>{text}</Text>
      <View>
        <Button title='DATEPICKER' onPress={()=>showMode('date')} />
      </View>
      <View>
        <Button title='TIMEPICKER' onPress={()=>showMode('time')} />
      </View>

      {show && (
        <DateTimePicker
        testID='DATETIEMPICKER'
        value={date}
        mode={mode}
        is24Hour={true}
        display='default'
        onChange={onChange}
        />
      )}

    </View>


      </View>
    </ScrollView>
    </LinearGradient>
  );
}

export default DetaySayfa;


const styles = StyleSheet.create({
  outerContainer:{
    flex:1,
    marginTop:40
  },
 container : {
 
  alignItems:'center'
 },
 txt : {
  color: Colors.renk7,
  fontSize:16,
  fontWeight:'bold'
 },
 card:{
  width:width-50,
  height:75,
  padding:15,
  borderRadius:16,
  justifyContent:'center',
  marginVertical:5,
  backgroundColor:'white'
 
},
cardInner:{
  flexDirection:'row',
  justifyContent:'space-around'
},
image: {
  width: 50,
  height: 50,
  marginRight: 10,
  // Resminizi stilize etmek için özellikleri buraya ekleyebilirsiniz.
},
});