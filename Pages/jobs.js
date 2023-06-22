import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import GenericBtn from '../Components/optionBtn';
const Jobs = () => {
  return (
    <ScrollView>
      <View style={styles.backgroundContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Nossas vagas</Text>
        </View>
        <View>
          <Image
            style={{ width: 300, height: 300 }}
            source={require("../assets/intro-img(2).jpg")}
          />
        </View>
        {/* text */}
        <View style={styles.textBox}>
          <Text style={styles.subtitle}>Sua carreira começa aqui!</Text>
          <Text>
            Entrar na área de programação não precisa ser uma tarefa difícil e penosa. Por isso que resolvemos criar essa ponte entre empresas que estão em busca de jovens talentos e programadores recém-formados que querem a primeira oportunidade para mostrarem todo o seu potencial. 
          </Text>
        </View>
        {/* options */}
        <View style={styles.optionsContainer}>
          {/* single option */}
          <TouchableOpacity>
            <GenericBtn text="Vagas Front-end" color="#390072" />
          </TouchableOpacity>
          {/* single option */}
          <TouchableOpacity>
            <GenericBtn text="Vagas Back-end" color="#390072" />
          </TouchableOpacity>
          {/* single option */}
          <TouchableOpacity>
            <GenericBtn text="Vagas Full-Stack" color="#390072" />
          </TouchableOpacity>
          {/* single option */}
          <TouchableOpacity>
            <GenericBtn text="Outras vagas" color="#390072" />
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
    fontWeight: '700',
    paddingBottom: 10,
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

export default Jobs       