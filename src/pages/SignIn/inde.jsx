import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import * as Animatable from 'react-native-animatable'

export default function SignIN(){
 
    return (
        <View style={styles.container}>
      
        <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Bem-vindo(a)</Text>
        </Animatable.View>

        <Animatable.View  animation='fadeInUp' style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput
        placeholder="Digite um email..."
        style={styles.input}
        placeholderTextColor='#333'
        />
        <Text style={styles.title}>Senha</Text>
        <TextInput
        placeholder="Sua senha"
        style={styles.input}
        placeholderTextColor='#333'
        />
   
       <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Acessar</Text>
       </TouchableOpacity>
      
       <TouchableOpacity style={styles.buttonRegister}>
        <Text style={styles.registerbuttonText}>Não possui conta? Cadastra-se</Text>
       </TouchableOpacity>

        </Animatable.View>
       
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
     flex:1,
     backgroundColor:'#38a69d',

    },
    containerHeader:{
        marginTop:'14%',
        marginBottom:'8%',
        paddingStart:'5%'
    },
    message:{
        fontSize:28,
        fontWeight:'bold',
        color:'#FFF'
    },
    containerForm:{
        backgroundColor:'#FFF',
        flex:1,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingStart:'5%',
        paddingEnd:'5%'
    },
    title:{
        fontSize:20,
        marginTop:28
    },
    input:{
        borderBottomWidth:1,
        height:40,
        marginBottom:12,
        fontSize:16,
        color:'#333'
    },
    button:{
        backgroundColor:'#38a69d',
        width:'100%',
        borderRadius:4,
        paddingVertical:8,
        marginTop:14,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        fontWeight:'bold',
        fontSize:18,
        color:'#fff'
    },
    buttonRegister:{
        marginTop:14,
        alignSelf:'center'
    },
    registerbuttonText:{
        color:'a1a1a1'
    }
})