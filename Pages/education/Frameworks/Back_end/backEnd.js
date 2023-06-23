import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import GenericBtn from "../../../../Components/optionBtn";

const BackEnd = () => {
  return (
    <ScrollView>
      <View style={styles.backgroundContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Formação Back-End</Text>
        </View>
        <View>
          <Image
            style={{ width: 300, height: 300 }}
            source={require("../../../../assets/intro-img(2).jpg")}
          />
        </View>
        {/* text */}
        <View style={styles.textBox}>
          <Text style={styles.subtitle}>Saiba o que acontece por trás dos panos</Text>
          <Text>
            A nossa formação Back-End foi criada pensando em oferecer ao aluno a
            oportunidade de aprender mais sobre banco de dados, conexão e
            construção de APIs. Escolha uma das linguagens abaixo para começar
            a sua jornada como desenvolvedor Back-end.
          </Text>
        </View>
        {/* options */}
        <View style={styles.optionsContainer}>
          {/* single option */}
          <TouchableOpacity>
            <GenericBtn text="Java" color="#390072" />
          </TouchableOpacity>
          {/* single option */}
          <TouchableOpacity>
            <GenericBtn text="C#" color="#390072" />                                   
          </TouchableOpacity>
          {/* single option */}
          <TouchableOpacity>
            <GenericBtn text="Phyton" color="#390072" />
          </TouchableOpacity>
          {/* single option */}
          <TouchableOpacity>
            <GenericBtn text="Node" color="#390072" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    overflow: "scroll",
  },

  header: {
    paddingLeft: 20,
    paddingRight: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    paddingTop: 40,
    paddingBottom: 20,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 20,
    fontWeight: "600",
    paddingBottom: 10,
  },

  textBox: {
    paddingLeft: 30,
    paddingRight: 20,
  },

  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
});

export default BackEnd;
