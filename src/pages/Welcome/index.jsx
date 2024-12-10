import React from "react";
import { StyleSheet, Text, View, Image,TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable'
import { useNavigation } from "@react-navigation/native";

export default function Welcome(){
    const navigation = useNavigation()
    return (
        <View style={styles.container} >
       
         <View style={styles.containerLogo}>
        <Animatable.Image source={{uri:'https://i.ibb.co/Fn5L4tV/logo.png'}} 
        animation='flipInY'
        style={{width:'100%',height:'50%'}}
        resizeMode='contain' />
         </View>

        
        <Animatable.View style={styles.containerForm} animation="fadeInUp" delay={600}>
        <Text style={styles.title}>Monitore, organize seus gastosde qualquer lugar!</Text>
        <Text style={styles.text}>Faça Login para começar</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.butonText} >Acessar</Text>
        </TouchableOpacity>
        </Animatable.View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
    flex:1,
    backgroundColor:'#38a69d'
    },
    containerLogo:{
        flex:2,
        backgroundColor:'#38a69d',
        justifyContent:'center',
        alignItems:'center'
    },
    containerForm:{
        flex:1,
        backgroundColor:'#FFF',
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingStart:'5%',
        paddingEnd:'5%'
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        marginTop:28,
        marginBottom:12,
    },
    text:{
        color:'#a1a1a1',
        textAlign:'center',
        marginTop:10,
        fontSize:18
    },
    button:{
        position:'absolute',
        backgroundColor:'#38a69d',
        borderRadius:50,
        paddingVertical:8,
        width:'60%',
        alignSelf:'center',
        bottom:'15%',
        alignItems:'center',
        justifyContent:'center'
    },
    butonText:{
        fontSize:18,
        fontWeight:'bold',
        color:'#FFF'
    }
})