 import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Button } from 'react-native'
import React from 'react'
import ShowMoreBtn from '../../../Components/showMoreBtn';

const FrontJobs = () => {
  return (
    <ScrollView>
      <View style={styles.backgroundContainer}>
        {/* header */}
        <View style={styles.header}>
          <Text style={styles.title}>Vagas Front-End</Text>
        </View>
        {/* subtitle */}
        <View style={{paddingBottom:40}}>
          <Text>Novas oportunidades todas as semanas </Text>
        </View>
        {/* job card */}
        <View style={styles.backgroundCard}>
          {/* jobinfo */}
          <View style={styles.jobTitle}>
            <View>
              <Image
                style={{width:30, height:30, borderRadius:30}}
                source={require('../../../assets/job-logo.png')}
              />
            </View>
            <View>
              <Text>React Front End Jr.</Text>
              <Text>Company X</Text>
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
          <Text>Sao Paulo, Brasil</Text>
          <Text>Rua xxxx - Bairro xxxxx - Cidade yyyy - SP</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor:'#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },

  header: {
    paddingLeft: 20,
    paddingRight:20
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    paddingTop:80,
    paddingBottom: 20,
    textAlign:'center'
  },

  backgroundCard: {
    width:'90%',
    height: 120,
    backgroundColor: '#E6DEEE',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems:'center',
    gap: 60,
    borderRadius: 10,
  },

  jobTitle: {
    flexDirection: 'row',
    gap: 20,
  },


})

export default FrontJobs       