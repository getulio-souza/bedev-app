import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import OptionBtn from "../Components/optionBtn"

const Login = ({ navigation }) => {

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  
  const [validationErrors, setValidationErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  //validando tela de login
  const validateLogin = () => {
    const errors = {};

    if (!userInfo.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInfo.email)) {
      errors.email = 'E-mail obrigatório';
    }

    if (!userInfo.password || userInfo.password.length < 6) {
      errors.password = "Senha obrigatória. Mínimo de 6 caracteres.";
    }

    setValidationErrors(errors);

    return Object.keys(errors).length === 0;
  }

  const customLogin = () => {
    if (validateLogin()) {
      console.log("Login feito com sucesso");
      console.log(userInfo);
      navigation.navigate("Home");

      setUserInfo({
        email: "",
        password: "",
      });
      setIsFormValid(false)
    } else {
      console.log("Login falhou. Tente novamente.")
    }
  }


  return (
    <View style={styles.loginBackground}>
      {/* header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.loginTitle}>Bem-vindo de volta</Text>
        </View>
        <Image
          style={{position:'absolute', top:0, left:0 }}
          source={require('../assets/wave.svg')}
        />
      </View>
      {/* inputs */}
      <View style={styles.inputsContainer}>
        {/* email */}        
        <View style={styles.inputBox}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {validationErrors.email && (
              <Text style={{ color: "red", fontSize: 14 }}>
                {validationErrors.email}
              </Text>
            )}
          </View>
          <TextInput
            autoCapitalize="none"
            value={userInfo.email}
            onChangeText={(text)=> setUserInfo({...userInfo, email: text})}
            style={styles.inputText}
            placeholder="Seu e-mail"
          >
          </TextInput>
          <View style={{borderBottomWidth:1, width:'90%'}}></View>
        </View>
        {/* Password */}
        <View style={styles.inputBox}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {validationErrors.password && (
              <Text style={{ color: "red", fontSize: 14 }}>
                {validationErrors.password}
              </Text>
            )}
          </View>
          <TextInput
            autoCapitalize = "none"
            value={userInfo.password}
            onChangeText={(text)=> setUserInfo({...userInfo, password : text})}
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
          onPress={customLogin}
          />
      </TouchableOpacity>
      <TouchableOpacity style={styles.linkToSubscribe}>
        <Text
          style={styles.linkToSubscribeText}
          onPress={()=> navigation.navigate('Subscribe')}
        >
          Ainda não tem cadastro?
        </Text>
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

  linkToSubscribe: {
    alignItems: "center",
    paddingTop: 10,
  },

  linkToSubscribeText: {
    textDecorationLine: 'underline'
  }

});

export default Login;
