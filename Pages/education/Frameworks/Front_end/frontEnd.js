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

const FrontEnd = () => {
  return (
    <ScrollView>
      <View style={styles.backgroundContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Formação Front-End</Text>
        </View>
        <View>
          <Image
            style={{ width: 300, height: 300 }}
            source={require("../../../../assets/intro-img(2).jpg")}
          />
        </View>
        {/* text */}
        <View style={styles.textBox}>
          <Text style={styles.subtitle}>Construa latyouts incríveis</Text>
          <Text>
            A formação Front-End foi criada pensando em todos que se identificam
            com o desenvolvimento de interfaces gráficas chamativas, intuitivas
            e responsivas. Escolha um dos frameworks abaixo para começar a sua
            jornada como desenvolvedor front-end.
          </Text>
        </View>
        {/* options */}
        <View style={styles.optionsContainer}>
          {/* single option */}
          <TouchableOpacity>
            <GenericBtn text="Javascript" color="#390072" />
          </TouchableOpacity>
          {/* single option */}
          <TouchableOpacity>
            <GenericBtn text="Angular" color="#390072" />
          </TouchableOpacity>
          {/* single option */}
          <TouchableOpacity>
            <GenericBtn text="React" color="#390072" />   
          </TouchableOpacity>
          {/* single option */}
          <TouchableOpacity>
            <GenericBtn text="Vue.js" color="#390072" />
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

export default FrontEnd;
