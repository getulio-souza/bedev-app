import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import OptionBtn from '../Components/optionBtn'

const Courses = () => {
  return (
    <ScrollView>
      <View style={styles.backgroundContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Nossos cursos</Text>
        </View>
        <View>
          <Image
            style={{ width: 300, height: 300 }}
            source={require("../assets/intro-img(2).jpg")}
          />
        </View>
        {/* text */}
        <View style={styles.textBox}>
          <Text style={styles.subtitle}>Nossas formações</Text>
          <Text>
            Pensando nas habilidade e aptidões de cada um, resolvemos criar três
            caminhos que convergem para o mesmo objetivo: capacitar todos
            aqueles que se interessam pela programação e querem se tornar
            profissionais qualificados para o mercado de trabalho.
          </Text>
        </View>
        {/* options */}
        <View style={styles.optionsContainer}>
          {/* single option */}
          <TouchableOpacity>
            <OptionBtn text="Formação Front-end" color="#390072" />
          </TouchableOpacity>
          {/* single option */}
          <TouchableOpacity>
            <OptionBtn text="Formação Back-end" color="#390072" />
          </TouchableOpacity>
          {/* single option */}
          <TouchableOpacity>
            <OptionBtn text="Formação Full-Stack" color="#390072" />
          </TouchableOpacity>
          {/* single option */}
          <TouchableOpacity>
            <OptionBtn text="Outras formações" color="#390072" />
          </TouchableOpacity>
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
    overflow:'scroll'
  },

  header: {
    paddingLeft: 20,
    paddingRight:20
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    paddingTop:40,
    paddingBottom: 20,
    textAlign:'center'
  },

  subtitle: {
    fontSize: 20,
    fontWeight:'700'
  },

  textBox: {
    paddingLeft: 30,
    paddingRight:20
  },

  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent:'center',
    gap: 10,
    paddingTop: 20,
    paddingBottom: 20
  }

})

export default Courses       