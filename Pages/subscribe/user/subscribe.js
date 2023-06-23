import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import OptionBtn from "../../../Components/optionBtn";
import { Picker } from "@react-native-picker/picker";

const Subscribe = ({navigation}) => {

  // salvar opcao select
  state = { user: '' }
  updateUser = (user) => {
    this.setState({user: user})
  }

  return (
    <View style={styles.loginBackground}>
      {/* header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.subscribeTitle}>Subscribe</Text>
        </View>
        {/* <Image
          style={{ position: "absolute", top: 0, left: 0 }}
          source={require("../assets/wave.svg")}
        /> */}
      </View>
      {/* title */}
      <View style={styles.titleInfo}>
        <Text style={styles.title}>Dados pessoais</Text>
      </View>
      {/* inputs */}
      <View style={styles.inputsContainer}>
        {/* name */}
        <View style={styles.inputBox}>
          <TextInput
            style={styles.inputText}
            placeholder="Seu nome completo"
          ></TextInput>
          <View style={{ borderBottomWidth: 1, width: "90%" }}></View>
        </View>
        {/* CPF */}
        <View style={styles.inputBox}>
          <TextInput
            style={styles.inputText}
            placeholder="Seu CPF"
            keyboardType="number-pad"
          ></TextInput>
          <View style={{ borderBottomWidth: 1, width: "90%" }}></View>
        </View>
        {/* select */}
        <View style={styles.selectbox}>
          <Picker selectedValue={this.state.user} onValueChange={this.updateUser}>
            <Picker.Item label="Seu objetivo" value="" />
            <Picker.Item label="Front-end" value="Front-end" />
            <Picker.Item label="Back-end" value="Back-end" />
            <Picker.Item label="Full-Stack" value="Full-Stack" />
            <Picker.Item label="Data" value="Data" />
            <Picker.Item label="Mobile" value="Mobile" />
          </Picker>
        </View>
      </View>
      {/* button */}
      <TouchableOpacity style={{ alignItems: "center", paddingTop: 100 }}>
        <OptionBtn
          text="Continuar"
          color="#390072"
          onPress={()=> navigation.navigate('Subscribe2')}
        />
      </TouchableOpacity>
      {/* status bar */}
      <View style={styles.statusbarContainer}>
        <View style={styles.statusbar}>
          <View style={styles.statusbarCompleted}></View>
        </View>
        <View>
        <Text>1/3</Text>
        </View>
      </View>
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
    position: "relative",
  },

  subscribeTitle: {
    fontSize: 24,
    color: "#fff",
    paddingLeft: 40,
    paddingTop: 40,
  },

  titleInfo: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
  },

  title: {
    fontWeight: "900",
    fontSize: 20,
  },

  inputsContainer: {
    paddingLeft: 40,
    paddingTop: 40,
  },

  inputBox: {
    paddingTop: 80,
  },

  selectbox: {
    paddingTop: 40,
    paddingRight:30
  },

  inputText: {
    color: "#6D6D6D",
    fontWeight: "900",
    fontSize: 20,
  },

  statusbarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    paddingTop:10
  },

  statusbar: {
    width: '70%',
    height: 10,
    backgroundColor: '#9D9D9',
    borderRadius: 10,
    position: 'relative',
    borderWidth: 1,
    borderColor:'#eee5e5'
  },

  statusbarCompleted: {
    position: 'absolute',
    left:0,
    backgroundColor: '#390072',
    width: '33.3%',
    height: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius:10
  },

});

export default Subscribe;
