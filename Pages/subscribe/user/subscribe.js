import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Formik } from "formik";
import * as Yup from "yup";
import OptionBtn from "../../../Components/optionBtn";

const validationSchema = Yup.object({
  fullname: Yup.string()
    .trim()
    .min(6, "Nome invalido")
    .required("Nome obrigatório"),
  email: Yup.string().email("E-mail invalido").required("E-mail obrigatório"),
  password: Yup.string()
    .trim()
    .min(8, "Senha muito curta")
    .required("Senha obrigatória"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Senhas nao conferem")
    .required("Confirme sua senha"),
  selectOption: Yup.string().trim().required('Selecione uma opção')
});

const Subscribe = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    selectOption: ""
  });

  const [selectedUser, setSelectedUser] = useState("");

  return (
    <View style={styles.loginBackground}>
      {/* header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.subscribeTitle}>Criar conta</Text>
        </View>
      </View>

      {/* inputs */}
      <View style={styles.inputsContainer}>
        <Formik initialValues={userInfo} validationSchema={validationSchema}>
          {({ values, errors, handleChange }) => {
            // console.log(values)
            const { fullname, email, password, confirmPassword } = values;

            return (
              <>
                {/* name */}
                <View style={styles.inputBox}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    {errors.fullname ? (
                      <Text style={{ color: "red", fontSize: 16 }}>
                        {errors.fullname}
                      </Text>
                    ) : null}
                  </View>
                  <TextInput
                    error="Invalid name"
                    value={fullname}
                    onChangeText={handleChange("fullname")}
                    style={styles.inputText}
                    placeholder="Nome completo"
                  ></TextInput>
                  <View style={{ borderBottomWidth: 1, width: "90%" }}></View>
                </View>
                {/* email */}
                <View style={styles.inputBox}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    {errors.email ? (
                      <Text style={{ color: "red", fontSize: 16 }}>
                        {errors.email}
                      </Text>
                    ) : null}
                  </View>
                  <TextInput
                    value={email}
                    onChangeText={handleChange("email")}
                    style={styles.inputText}
                    placeholder="E-mail"
                  ></TextInput>
                  <View style={{ borderBottomWidth: 1, width: "90%" }}></View>
                </View>
                {/* senha */}
                <View style={styles.inputBox}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    {errors.password ? (
                      <Text style={{ color: "red", fontSize: 16 }}>
                        {errors.password}
                      </Text>
                    ) : null}
                  </View>
                  <TextInput
                    value={password}
                    onChangeText={handleChange("password")}
                    style={styles.inputText}
                    placeholder="********"
                  ></TextInput>
                  <View style={{ borderBottomWidth: 1, width: "90%" }}></View>
                </View>
                {/* senha */}
                <View style={styles.inputBox}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    {errors.confirmPassword ? (
                      <Text style={{ color: "red", fontSize: 16 }}>
                        {errors.confirmPassword}
                      </Text>
                    ) : null}
                  </View>
                  <TextInput
                    value={confirmPassword}
                    onChangeText={handleChange("confirmPassword")}
                    style={styles.inputText}
                    placeholder="Confirmar senha"
                    textContentType="password"
                  ></TextInput>
                  <View style={{ borderBottomWidth: 1, width: "90%" }}></View>
                </View>
                {/* select */}
                <View style={styles.selectbox}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    {errors.selectOption ? (
                      <Text style={{ color: "red", fontSize: 16 }}>
                        {errors.selectOption}
                      </Text>
                    ) : null}
                  </View>
                  <Picker
                    selectedValue={selectedUser}
                    onValueChange={(itemValue) => setSelectedUser(itemValue)}
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
                <TouchableOpacity style={{ paddingTop: 70 }}>
                  {/* Assuming OptionBtn is a custom component */}
                  <OptionBtn text="Cadastrar" color="#390072" />
                </TouchableOpacity>
              </>
            );
          }}
        </Formik>
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
    paddingTop: 20,
  },

  inputBox: {
    paddingTop: 60,
  },

  selectbox: {
    paddingTop: 40,
    paddingRight: 30,
  },

  inputText: {
    color: "#6D6D6D",
    fontWeight: "900",
    fontSize: 20,
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

export default Subscribe;
