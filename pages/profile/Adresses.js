import {View,Text, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';
import CustomButton from '../../components/CustomButton';
import { Ionicons } from '@expo/vector-icons';



const { width } = Dimensions.get('window');



function Adresses(){
    return(
        <View>
            <View>
                <Image
                source={require('../images/header.jpg')}
                style={styles.headerImage}
                />
            </View>
            <View style={styles.container}>
                <CustomButton title='Yeni Adres Ekle' style={styles.customButton}/>
                <Text style={{fontWeight:'bold', marginLeft:5}}>Kayıtlı Adreslerim:</Text>
                
                <View style={styles.card}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10, alignItems:'center'}}>
                            <Text style={styles.adressTitle}>Ev</Text>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <TouchableOpacity>
                                    <Ionicons name="create-outline" size={25} color="#F6943F" style={{marginRight:10}} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Ionicons name="trash-outline" size={25} color="#F6943F" />
                                </TouchableOpacity>
                            </View>
                    </View>
                        <Text>Atatürk Mah. 202/45 sk. No:10 Daire:10 Buca/İzmir</Text>
                </View>

                <View style={styles.card}>
                <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10, alignItems:'center'}}>
                            <Text style={styles.adressTitle}>Abimlerin Ev</Text>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <TouchableOpacity>
                                    <Ionicons name="create-outline" size={25} color="#F6943F" style={{marginRight:10}} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Ionicons name="trash-outline" size={25} color="#F6943F" />
                                </TouchableOpacity>
                            </View>
                    </View>
                    <Text>Cumhuriyet Mah. Gökkuşağı Evleri No:16 Daire:5 Çerkezköy/Tekirdağ</Text>
                </View>

                <View style={styles.card}>
                <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10, alignItems:'center'}}>
                            <Text style={styles.adressTitle}>Şirket Adres</Text>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <TouchableOpacity>
                                    <Ionicons name="create-outline" size={25} color="#F6943F" style={{marginRight:10}} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Ionicons name="trash-outline" size={25} color="#F6943F" />
                                </TouchableOpacity>
                            </View>
                    </View>
                    <Text>Şükrü Saracoğlu Stadyumu, Bağdat Cad, Kızıltoprak, No:2, 34724 Kadıköy/İstanbul</Text>
                </View>

                <View style={styles.card}>
                <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10, alignItems:'center'}}>
                            <Text style={styles.adressTitle}>Memo Ev</Text>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <TouchableOpacity>
                                    <Ionicons name="create-outline" size={25} color="#F6943F" style={{marginRight:10}} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Ionicons name="trash-outline" size={25} color="#F6943F" />
                                </TouchableOpacity>
                            </View>
                    </View>
                    <Text>Atatürk Mah. 242/37 sk. No:18 Daire:30 Buca/İzmir</Text>
                </View>
            </View>
        </View>
    );
}

export default Adresses;

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
    },
    card:{
        padding:15,
        borderBottomWidth:10,
        marginVertical:5,
        borderColor:'#52C3BF',
        borderRadius:6
    }
})