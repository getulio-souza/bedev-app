import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import ApplyJobBtn from "../../../Components/applyJobBtn";

const FrontSingleJob = () => {
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        {/* header */}
        <View style={styles.backgroundContainer}>
          {/* title and logo */}
          <View style={styles.header}>
            <View>
              <Text style={styles.titleJob}>React Front End Jr.</Text>
              <Text style={styles.city}>Sao Paulo - Brasil</Text>
            </View>
            <View>
              {/* logo */}
              <Image
                style={{ width: 30, height: 30, borderRadius: 20 }}
                source={require("../../../assets/job-logo.png")}
              />
            </View>
          </View>
          {/* salary */}
          <View style={styles.salaryAndRatingContainer}>
            <View>
              <Text>R$4000/mês</Text>
            </View>
            <View style={styles.ratingContainer}>
              <Image
                source={require("../../../assets/star-icon-2.png")}
                style={{ width: 20, height: 20, borderRadius: 20 }}
              />
              <Text>4.5</Text>
            </View>
          </View>
        </View>
        {/* job description */}
        <View style={styles.jobDescription}>
          {/* description */}
          <View>
            <Text style={styles.jobTitleDescription}>Descrição da vaga</Text>
          </View>
          <View>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </Text>
          </View>

          {/* requisitos */}
          <View>
            <Text style={[styles.jobTitleDescription, styles.extraPadding]}>
              Requisitos
            </Text>
          </View>
          <View>
            <Text style={{ paddingBottom: 20 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </View>
          {/* topics */}
          <View>
            <View style={styles.singleRequirement}>
              <Image
                style={styles.singleRequirementIcon}
                source={require("../../../assets/check.png")}
              />
              <Text style={styles.requirementTopic}>2 ou + de experiência</Text>
            </View>

            <View style={styles.singleRequirement}>
              <Image
                style={styles.singleRequirementIcon}
                source={require("../../../assets/check.png")}
              />
              <Text style={styles.requirementTopic}>
                Formação em Ciência da Computação, Sistemas para internet,
                Analise e Desenvolvimento de Sistemas ou afins
              </Text>
            </View>

            <View style={styles.singleRequirement}>
              <Image
                style={styles.singleRequirementIcon}
                source={require("../../../assets/check.png")}
              />
              <Text style={styles.requirementTopic}>
                Experiência em Java, SQL e Spring
              </Text>
            </View>

            <View style={styles.singleRequirement}>
              <Image
                style={styles.singleRequirementIcon}
                source={require("../../../assets/check.png")}
              />
              <Text style={styles.requirementTopic}>
                Disponibilidade de atuação híbrida 2x por semana.
              </Text>
            </View>
          </View>
          {/* action buttons */}
          <TouchableOpacity style={styles.btnContainer}>
            <ApplyJobBtn color="#390072" text="Aplicar" />
            <ApplyJobBtn color="#000" text="Salvar vaga" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: "#E6DEEE",
    paddingBottom: 20,
    paddingTop: 20,
  },

  mainContainer: {
    height: "100%",
    backgroundColor: "#fff",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "auto",
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },

  titleJob: {
    textAlign: "left",
  },

  city: {
    color: "#BCBCBC",
  },

  salaryAndRatingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
  },

  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingTop: 10,
  },

  jobDescription: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },

  jobTitleDescription: {
    paddingBottom: 20,
    fontWeight: "700",
    fontSize: 18,
  },

  extraPadding: {
    paddingTop: 20,
  },

  requirementTopic: {
    paddingBottom: 10,
    paddingRight:20
  },

  singleRequirement: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "flex-start",
  },

  singleRequirementIcon: {
    width: 25,
    height: 25,
  },

  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
    paddingTop: 20,
    paddingBottom: 20,
  },
});

export default FrontSingleJob;
