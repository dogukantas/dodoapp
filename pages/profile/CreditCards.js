// CreditCards.js

import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import CustomButton from '../../components/CustomButton';
import { Ionicons } from '@expo/vector-icons';



const { width } = Dimensions.get('window');


function CreditCards(){
    return(
        <View>
            <View>
                <Image
                source={require('../images/header.jpg')}
                style={styles.headerImage}
                />
            </View>
            <View style={styles.container}>
                <CustomButton title='Yeni Kart Ekle' style={styles.customButton}/>
                <Text style={{fontWeight:'bold', marginLeft:5}}>Kayıtlı Kartlarım:</Text>

                <View style={styles.card}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10, alignItems:'center'}}>
                            <Text style={styles.adressTitle}>Doğukan Garanti</Text>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <TouchableOpacity>
                                    <Ionicons name="create-outline" size={25} color="#F6943F" style={{marginRight:10}} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Ionicons name="trash-outline" size={25} color="#F6943F" />
                                </TouchableOpacity>
                            </View>
                    </View>
                        <Text>4712 0524 9875 0171</Text>
                        <Text>CCV:157</Text>
                        <Text>Doğukan Taş</Text>
                </View>

                <View style={styles.card}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10, alignItems:'center'}}>
                            <Text style={styles.adressTitle}>Bonus Kartım</Text>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <TouchableOpacity>
                                    <Ionicons name="create-outline" size={25} color="#F6943F" style={{marginRight:10}} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Ionicons name="trash-outline" size={25} color="#F6943F" />
                                </TouchableOpacity>
                            </View>
                    </View>
                        <Text>4712 0524 9875 0171</Text>
                        <Text>CCV:157</Text>
                        <Text>Doğukan Taş</Text>
                </View>

                <View style={styles.card}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10, alignItems:'center'}}>
                            <Text style={styles.adressTitle}>Doğukan Ziraat</Text>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <TouchableOpacity>
                                    <Ionicons name="create-outline" size={25} color="#F6943F" style={{marginRight:10}} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Ionicons name="trash-outline" size={25} color="#F6943F" />
                                </TouchableOpacity>
                            </View>
                    </View>
                        <Text>4712 0524 9875 0171</Text>
                        <Text>CCV:157</Text>
                        <Text>Doğukan Taş</Text>
                </View>

            </View>
        </View>
    );
}

export default CreditCards;

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
        borderWidth:1,
        marginVertical:5
    },
    adressTitle:{
        fontWeight:'bold',
        fontSize:16
    }
})