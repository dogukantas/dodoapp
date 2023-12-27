//Notifications.js

import {View,Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView} from 'react-native';
import CustomButton from '../../components/CustomButton';
import { Ionicons } from '@expo/vector-icons';


const { width } = Dimensions.get('window');


function Notifications(){
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
                            <Text style={styles.adressTitle}>Çerkezköy bölgesinde misiniz?</Text>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <TouchableOpacity>
                                    <Ionicons name="trash-outline" size={25} color="#F6943F" />
                                </TouchableOpacity>
                            </View>
                    </View>
                        <Text>Yeni bir bölgede bulunduğunuz için 16.04.2024 tarihine kadar yapacağınız randevunuza %50 indirim :DDD</Text>
            </View>

            <View style={styles.card}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10, alignItems:'center'}}>
                            <Text style={styles.adressTitle}>Yazdığınız bir yoruma yanıt geldi</Text>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <TouchableOpacity>
                                    <Ionicons name="trash-outline" size={25} color="#F6943F" />
                                </TouchableOpacity>
                            </View>
                    </View>
                        <Text>Neco Erkek Kuaförü yazdığınız bir yoruma cevap verdi...</Text>
            </View>

            <View style={styles.card}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10, alignItems:'center'}}>
                            <Text style={styles.adressTitle}>Dodo'ya hoşgeldiniz!</Text>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <TouchableOpacity>
                                    <Ionicons name="trash-outline" size={25} color="#F6943F" />
                                </TouchableOpacity>
                            </View>
                    </View>
                        <Text>İlk randevuya özel 100tl indirim ♥</Text>
            </View>

            <View style={styles.card}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10, alignItems:'center'}}>
                            <Text style={styles.adressTitle}>Çerkezköy bölgesinde misiniz?</Text>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <TouchableOpacity>
                                    <Ionicons name="trash-outline" size={25} color="#F6943F" />
                                </TouchableOpacity>
                            </View>
                    </View>
                        <Text>Yeni bir bölgede bulunduğunuz için 16.04.2024 tarihine kadar yapacağınız randevunuza %50 indirim :DDD</Text>
            </View>

            <View style={styles.card}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10, alignItems:'center'}}>
                            <Text style={styles.adressTitle}>Yazdığınız bir yoruma yanıt geldi</Text>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <TouchableOpacity>
                                    <Ionicons name="trash-outline" size={25} color="#F6943F" />
                                </TouchableOpacity>
                            </View>
                    </View>
                        <Text>Neco Erkek Kuaförü yazdığınız bir yoruma cevap verdi...</Text>
            </View>

            <View style={styles.card}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10, alignItems:'center'}}>
                            <Text style={styles.adressTitle}>Dodo'ya hoşgeldiniz!</Text>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <TouchableOpacity>
                                    <Ionicons name="trash-outline" size={25} color="#F6943F" />
                                </TouchableOpacity>
                            </View>
                    </View>
                        <Text>İlk randevuya özel 100tl indirim ♥</Text>
            </View>

            <View style={styles.card}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10, alignItems:'center'}}>
                            <Text style={styles.adressTitle}>Çerkezköy bölgesinde misiniz?</Text>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <TouchableOpacity>
                                    <Ionicons name="trash-outline" size={25} color="#F6943F" />
                                </TouchableOpacity>
                            </View>
                    </View>
                        <Text>Yeni bir bölgede bulunduğunuz için 16.04.2024 tarihine kadar yapacağınız randevunuza %50 indirim :DDD</Text>
            </View>

            <View style={styles.card}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10, alignItems:'center'}}>
                            <Text style={styles.adressTitle}>Yazdığınız bir yoruma yanıt geldi</Text>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <TouchableOpacity>
                                    <Ionicons name="trash-outline" size={25} color="#F6943F" />
                                </TouchableOpacity>
                            </View>
                    </View>
                        <Text>Neco Erkek Kuaförü yazdığınız bir yoruma cevap verdi...</Text>
            </View>

            <View style={styles.card}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10, alignItems:'center'}}>
                            <Text style={styles.adressTitle}>Dodo'ya hoşgeldiniz!</Text>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <TouchableOpacity>
                                    <Ionicons name="trash-outline" size={25} color="#F6943F" />
                                </TouchableOpacity>
                            </View>
                    </View>
                        <Text>İlk randevuya özel 100tl indirim ♥</Text>
            </View>
        </ScrollView>
    );
}

export default Notifications;

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
        width:width,
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