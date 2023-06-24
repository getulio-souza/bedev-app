import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const FrontSingleJob = () => {
  return (
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
      <View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  backgroundContainer: {
    backgroundColor: '#E6DEEE',
    paddingBottom: 20,
    paddingTop:20
  },

  mainContainer: {
    height: "100%",
    backgroundColor: "#fff",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    height:'auto',
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
    paddingTop:10

  },

  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingTop:10
  },
});

export default FrontSingleJob;
