import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import React from "react";
import OptionBtn from "../Components/optionBtn"

const Login = ({navigation}) => {
  return (
    <View style={styles.loginBackground}>
      {/* header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.loginTitle}>Login</Text>
        </View>
        <Image
          style={{position:'absolute', top:0, left:0 }}
          source={require('../assets/wave.svg')}
        />
      </View>
      {/* inputs */}
      <View style={styles.inputsContainer}>
        {/* name */}        
        <View style={styles.inputBox}>
          <TextInput
            style={styles.inputText}
            placeholder="Seu e-mail"
          >
          </TextInput>
          <View style={{borderBottomWidth:1, width:'90%'}}></View>
        </View>
        {/* CPF */}
        <View style={styles.inputBox}>
          <TextInput
            style={styles.inputText}
            placeholder="Seu CPF"
          >
          </TextInput>
          <View style={{borderBottomWidth:1, width:'90%'}}></View>
        </View>
        {/* Password */}
        <View style={styles.inputBox}>
          <TextInput
            style={styles.inputText}
            placeholder="Sua senha"
          >
          </TextInput>
          <View style={{borderBottomWidth:1, width:'90%'}}></View>
        </View>
      </View>
      {/* button */}
      <TouchableOpacity style={{ alignItems: 'center', paddingTop:100}}>
          <OptionBtn
            text="Login"
          color="#390072"
          onPress={()=> navigation.navigate('Home')}
          />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  loginBackground: {
    backgroundColor: "#fff",
    height: "100%",
  },

  header: {
    backgroundColor: "#390072",
    height: 90,
    margin: "auto",
    position:'relative'
  },

  loginTitle: {
    fontSize: 24,
    color: "#fff",
    paddingLeft: 40,
    paddingTop: 40,
  },

  inputsContainer: {
    paddingLeft: 40,
    paddingTop:40
  },

  inputBox: {
    paddingTop:80,
  },

  inputText: {
    color: '#6D6D6D',
    fontWeight: '900',
    fontSize: 20,
  },

});

export default Login;
