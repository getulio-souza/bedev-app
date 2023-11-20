import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import HandleSubmitBtn from "../../../Components/submitBtn";

const Subscribe = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    selectOption: "",
  });

  const [selectedUser, setSelectedUser] = useState("");
  const [validationErrors, setValidationErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);


  const validateForm = () => {
    const errors = {};

    if (!userInfo.fullname || userInfo.fullname.length < 6) {
      errors.fullname = "Nome inválido. Mínimo de 6 caracteres.";
    }

    if (!userInfo.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInfo.email)) {
      errors.email = "E-mail inválido.";
    }

    if (!userInfo.password || userInfo.password.length < 6) {
      errors.password = "Senha muito curta. Mínimo de 6 caracteres.";
    }

    if (userInfo.password !== userInfo.confirmPassword) {
      errors.confirmPassword = "Senhas não conferem.";
    }

    if (!userInfo.selectOption) {
      errors.selectOption = "Selecione uma opção.";
    }

    setValidationErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const customSubmit = () => {
    if (validateForm()) {
      console.log("Form is valid");
      console.log(userInfo);
      navigation.navigate("Login")
      setUserInfo({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: "",
        selectOption: ""
      });
      setIsFormValid(false)
    } else {
      console.log("Form is invalid");
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.loginBackground}>
        <View style={styles.loginBackground}>
          {/* header */}
          <View style={styles.header}>
            <View>
              <Text style={styles.subscribeTitle}>Criar conta</Text>
            </View>
          </View>

          {/* inputs */}
          <View style={styles.inputsContainer}>
            {/* name */}
            <View style={styles.inputBox}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                {validationErrors.fullname && (
                  <Text style={{ color: "red", fontSize: 14 }}>
                    {validationErrors.fullname}
                  </Text>
                )}
              </View>
              <TextInput
                value={userInfo.fullname}
                onChangeText={(text) =>
                  setUserInfo({ ...userInfo, fullname: text })
                }
                style={styles.inputText}
                placeholder="Nome completo"
              />
              <View style={{ borderBottomWidth: 1, width: "90%" }} />
            </View>

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
                value={userInfo.email}
                onChangeText={(text) =>
                  setUserInfo({ ...userInfo, email: text })
                }
                style={styles.inputText}
                placeholder="E-mail"
              />
              <View style={{ borderBottomWidth: 1, width: "90%" }} />
            </View>

            {/* password */}
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
                value={userInfo.password}
                onChangeText={(text) =>
                  setUserInfo({ ...userInfo, password: text })
                }
                style={styles.inputText}
                placeholder="********"
              />
              <View style={{ borderBottomWidth: 1, width: "90%" }} />
            </View>

            {/* confirmPassword */}
            <View style={styles.inputBox}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                {validationErrors.confirmPassword && (
                  <Text style={{ color: "red", fontSize: 14 }}>
                    {validationErrors.confirmPassword}
                  </Text>
                )}
              </View>
              <TextInput
                value={userInfo.confirmPassword}
                onChangeText={(text) =>
                  setUserInfo({ ...userInfo, confirmPassword: text })
                }
                style={styles.inputText}
                placeholder="Confirmar senha"
                textContentType="password"
              />
              <View style={{ borderBottomWidth: 1, width: "90%" }} />
            </View>

            {/* select */}
            <View style={styles.selectbox}>
              {validationErrors.selectOption && (
                <Text style={{ color: "red", fontSize: 14 }}>
                  {validationErrors.selectOption}
                </Text>
              )}
              <Picker
                selectedValue={selectedUser}
                onValueChange={(itemValue) => {
                  setUserInfo({ ...userInfo, selectOption: itemValue });
                  setSelectedUser(itemValue);
                }}
              >
                <Picker.Item label="Seu objetivo" value="" />
                <Picker.Item label="Front-end" value="Front-end" />
                <Picker.Item label="Back-end" value="Back-end" />
                <Picker.Item label="Full-Stack" value="Full-Stack" />
                <Picker.Item label="Data" value="Data" />
                <Picker.Item label="Mobile" value="Mobile" />
              </Picker>
            </View>

            {/* button */}
            <HandleSubmitBtn
              title="Cadastrar"
              color="#390072"
              onPress={customSubmit}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

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
    paddingTop: 20,
  },

  inputBox: {
    paddingTop: 50,
  },

  selectbox: {
    paddingTop: 40,
    paddingRight: 30,
  },

  inputText: {
    color: "#6D6D6D",
    fontWeight: "900",
    fontSize: 17,
  },

  statusbarContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    paddingTop: 10,
  },

  statusbar: {
    width: "70%",
    height: 10,
    backgroundColor: "#9D9D9",
    borderRadius: 10,
    position: "relative",
    borderWidth: 1,
    borderColor: "#eee5e5",
  },

  statusbarCompleted: {
    position: "absolute",
    left: 0,
    backgroundColor: "#390072",
    width: "33.3%",
    height: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
});

export default Subscribe