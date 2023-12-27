//PastReservations.js

import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import CustomButton from '../../components/CustomButton';
import { Ionicons } from '@expo/vector-icons';


const { width } = Dimensions.get('window');


function PastReservations(){
    return(
        <View>
            <View>
                <Image
                source={require('../images/header.jpg')}
                style={styles.headerImage}
                />
            </View>
            <View style={styles.card}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10, alignItems:'center'}}>
                            <Text style={styles.adressTitle}>Neco Erkek Kuaförü</Text>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <TouchableOpacity>
                                    <Ionicons name="trash-outline" size={25} color="#F6943F" />
                                </TouchableOpacity>
                            </View>
                    </View>
                        <Text style={{marginBottom:10}}>14.10.2023</Text>
                        <CustomButton title='Şimdi Değerlendir' style={styles.customButton}/>
            </View>

            <View style={styles.card}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10, alignItems:'center'}}>
                            <Text style={styles.adressTitle}>Adaşlar Berber</Text>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <TouchableOpacity>
                                    <Ionicons name="trash-outline" size={25} color="#F6943F" />
                                </TouchableOpacity>
                            </View>
                    </View>
                        <Text style={{marginBottom:10}}>14.10.2023</Text>
                        <CustomButton title='Şimdi Değerlendir' style={styles.customButton}/>
            </View>

            <View style={styles.card}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10, alignItems:'center'}}>
                            <Text style={styles.adressTitle}>Barbie Güzellik Salonu</Text>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <TouchableOpacity>
                                    <Ionicons name="trash-outline" size={25} color="#F6943F" />
                                </TouchableOpacity>
                            </View>
                    </View>
                        <Text style={{marginBottom:10}}>14.10.2023</Text>
                        <CustomButton title='Şimdi Değerlendir' style={styles.customButton}/>
            </View>
        </View>
    );
}

export default PastReservations;

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        marginTop:10
    },
    headerImage:{
        width:width,
        height:100,
    },
    customButton:{
        backgroundColor:'#EFD48A',
        width:350,
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:10,
    },
    card:{
        padding:15,
        borderWidth:1,
        marginVertical:5
    },
    adressTitle:{
        fontWeight:'bold',
        fontSize:16
    }
})