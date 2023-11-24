import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import ShowMoreBtn from "../../../Components/showMoreBtn";
// import axios from "axios";

// import { SearchJobs } from "../../inddedAPI";

const FrontJobs = ({ navigation }) => {

  // const [results, setResults] = useState([]);

  // useEffect(() => {
  //   axios.get('https://workable.p.rapidapi.com/%7BAPIKEY%7D/jobs')
  //     .then((response) => {
  //     setResults(response.data)
  //     })
    
  //     .catch(() => {
  //     console.log("Houve um erro")
  //   })
  // })

  return (
    <ScrollView>
      <View style={styles.backgroundContainer}>
        {/* header */}
        <View style={styles.header}>
          <Text style={styles.title}>Vagas Front-End</Text>
        </View>
        {/* subtitle */}
        <View style={{ paddingBottom: 40 }}>
          <Text>Novas oportunidades todas as semanas </Text>
        </View>

        <View style={{ flexDirection: 'column', gap: 30 }}>

          {/* {results.map((results, key) => { */}
          {/* return( */}
            <View style={styles.backgroundCard}>
          {/* jobinfo */}
          <View>
            <View style={{ flexDirection: "row", paddingBottom:20, gap:40 }}>
              <View style={styles.jobTitle}>
                <View>
                  <Image
                    style={{ width: 30, height: 30, borderRadius: 30 }}
                    source={require("../../../assets/job-logo.png")}
                  />
                </View>
                <View>
                  <Text style={{fontWeight:'900'}}>React Front End Jr.</Text>
                  <Text style={{color:'#A69E9E'}}>Company X</Text>
                </View>
              </View>
              {/* show more btn */}
              <TouchableOpacity>
                  <ShowMoreBtn
                    text="ver mais"
                    color="#390072"
                    onPress={()=> navigation.navigate('FrontSingleJob')}
                  />
              </TouchableOpacity>
            </View>

            {/* company location */}
            <View style={styles.companyLocation}>
              <View style={styles.companyLocationInfo}>
                <Text style={{color:'#fff'}}>Sao Paulo, Brasil</Text>
                <Text style={{color:'#fff'}}>Av. Paulista, 122- Centro - São Paulo - SP</Text>
              </View>
            </View>
          </View>
        </View>
      {/* //       )
      //     }
      //   )
      // } */}

        {/* job card */}
        <View style={styles.backgroundCard}>
          {/* jobinfo */}
          <View>
            <View style={{ flexDirection: "row", paddingBottom:20, gap:40 }}>
              <View style={styles.jobTitle}>
                <View>
                  <Image
                    style={{ width: 30, height: 30, borderRadius: 30 }}
                    source={require("../../../assets/job-logo.png")}
                  />
                </View>
                <View>
                  <Text style={{fontWeight:'900'}}>React Front End Jr.</Text>
                  <Text style={{color:'#A69E9E'}}>Company X</Text>
                </View>
              </View>
              {/* show more btn */}
              <TouchableOpacity>
                  <ShowMoreBtn
                    text="ver mais"
                    color="#390072"
                  />
              </TouchableOpacity>
            </View>

            {/* company location */}
            <View style={styles.companyLocation}>
              <View style={styles.companyLocationInfo}>
                <Text style={{color:'#fff'}}>Sao Paulo, Brasil</Text>
                <Text style={{color:'#fff'}}>Av. Paulista, 122- Centro - São Paulo - SP</Text>
              </View>
            </View>
          </View>
        </View>

        {/* job card */}
        <View style={styles.backgroundCard}>
          {/* jobinfo */}
          <View>
            <View style={{ flexDirection: "row", paddingBottom:20, gap:40 }}>
              <View style={styles.jobTitle}>
                <View>
                  <Image
                    style={{ width: 30, height: 30, borderRadius: 30 }}
                    source={require("../../../assets/job-logo.png")}
                  />
                </View>
                <View>
                  <Text style={{fontWeight:'900'}}>React Front End Jr.</Text>
                  <Text style={{color:'#A69E9E'}}>Company X</Text>
                </View>
              </View>
              {/* show more btn */}
              <TouchableOpacity>
                <ShowMoreBtn text="ver mais" color="#390072" />
              </TouchableOpacity>
            </View>

            {/* company location */}
            <View style={styles.companyLocation}>
              <View style={styles.companyLocationInfo}>
                <Text style={{color:'#fff'}}>Sao Paulo, Brasil</Text>
                <Text style={{color:'#fff'}}>Av. Paulista, 122- Centro - São Paulo - SP</Text>
              </View>
            </View>
          </View>
          </View>
          
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
  },

  header: {
    paddingLeft: 20,
    paddingRight: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    paddingTop: 80,
    paddingBottom: 20,
    textAlign: "center",
  },

  backgroundCard: {
    width: "90%",
    height: 200,
    backgroundColor: "#E6DEEE",
    padding: 20,
    flexDirection: "row",
    justifyContent: "center",
    gap: 60,
    borderRadius: 10,
  },

  jobTitle: {
    flexDirection: "row",
    gap: 20,
  },

  companyLocation: {
    backgroundColor: '#390072',
    borderRadius: 10,
    alignItems:'center'
  },

  companyLocationInfo: {
    alignItems:'flex-start',
    justifyContent: 'center',
    height: 100,
    paddingLeft:15,
    paddingRight:30
  }
});

export default FrontJobs;
