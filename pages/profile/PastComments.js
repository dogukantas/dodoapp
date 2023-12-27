//PastComments.js

import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity,Animated, ScrollView} from 'react-native';
import CustomButton from '../../components/CustomButton';
import { Ionicons } from '@expo/vector-icons';
import Acordion from '../../components/Acordion';



const { width } = Dimensions.get('window');


function PastComments(){
    return(
        <ScrollView>
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
                                    <Ionicons name="create-outline" size={25} color="#F6943F" style={{marginRight:10}} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Ionicons name="trash-outline" size={25} color="#F6943F" />
                                </TouchableOpacity>
                            </View>
                    </View>
                        <Text>4,8</Text>
                        <Text>Çok beğendim sadece biraz kısa sürdü, bi hafif kıllandım ama güzel oldu valla</Text>
                            <View style={{marginTop:10}}>
                                
                                <Acordion title="Restoranın Cevabı:">
                                <Text>Teşekkür ederiz efendim. Ellerimiz biraz hızlıdır :D</Text>
                                {/* Diğer içerikler... */}
                                </Acordion>

                                
                            </View>
                </View>

                <View style={styles.card}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10, alignItems:'center'}}>
                            <Text style={styles.adressTitle}>Barbie Güzellik Salonu</Text>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <TouchableOpacity>
                                    <Ionicons name="create-outline" size={25} color="#F6943F" style={{marginRight:10}} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Ionicons name="trash-outline" size={25} color="#F6943F" />
                                </TouchableOpacity>
                            </View>
                    </View>
                        <Text>0,8</Text>
                        <Text>Hiç beğenmedim saçlarım bok gibi oldu elinizi sikiyim</Text>
                            <View style={{marginTop:10}}>
                                
                                <Acordion title="Restoranın Cevabı:">
                                <Text>Kusura bakmayın lütfen, Birdahaki sefere ücret almayalım tekrardan bkeliyoruz iyi günler dileriz.</Text>
                                {/* Diğer içerikler... */}
                                </Acordion>

                                
                            </View>
                </View>

                <View style={styles.card}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10, alignItems:'center'}}>
                            <Text style={styles.adressTitle}>Barbie Güzellik Salonu</Text>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <TouchableOpacity>
                                    <Ionicons name="create-outline" size={25} color="#F6943F" style={{marginRight:10}} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Ionicons name="trash-outline" size={25} color="#F6943F" />
                                </TouchableOpacity>
                            </View>
                    </View>
                        <Text>0,8</Text>
                        <Text>Hiç beğenmedim saçlarım bok gibi oldu elinizi sikiyim</Text>
                            <View style={{marginTop:10}}>
                                
                                <Acordion title="Restoranın Cevabı:">
                                <Text>Kusura bakmayın lütfen, Birdahaki sefere ücret almayalım tekrardan bkeliyoruz iyi günler dileriz.</Text>
                                {/* Diğer içerikler... */}
                                </Acordion>

                                
                            </View>
                </View>

                <View style={styles.card}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10, alignItems:'center'}}>
                            <Text style={styles.adressTitle}>Barbie Güzellik Salonu</Text>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <TouchableOpacity>
                                    <Ionicons name="create-outline" size={25} color="#F6943F" style={{marginRight:10}} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Ionicons name="trash-outline" size={25} color="#F6943F" />
                                </TouchableOpacity>
                            </View>
                    </View>
                        <Text>0,8</Text>
                        <Text>Hiç beğenmedim saçlarım bok gibi oldu elinizi sikiyim</Text>
                            <View style={{marginTop:10}}>
                                
                                <Acordion title="Restoranın Cevabı:">
                                <Text>Kusura bakmayın lütfen, Birdahaki sefere ücret almayalım tekrardan bkeliyoruz iyi günler dileriz.</Text>
                                {/* Diğer içerikler... */}
                                </Acordion>

                                
                            </View>
                </View>
        </ScrollView>
    );
}

export default PastComments;

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
        borderBottomWidth:10,
        marginVertical:5,
        borderColor:'#52C3BF',
        borderRadius:6
    },
    adressTitle:{
        fontWeight:'bold',
        fontSize:16
    }
})