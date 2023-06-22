import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import ActionBtn from '../Components/actionBtn'

const Home = ({navigation}) => {
  return (
    <View style={styles.backgroundContainer}>
      {/* header */}
      <View style={styles.header}>
        <Text style={styles.title}>Seja bem vindo ao BeDev!</Text>
        <Text>Estamos aqui para te desenvolver profissionalmente e te alocar no mercado de trabalho, e o melhor: de forma gratuita</Text>
      </View>
      {/* logo */}
      <View>
        <Image
          style={{width: 300, height: 300}}
          source={require('../assets/photo-1.jpeg')}
        />
      </View>
      {/* buttons */}
      <View style={styles.btnsContainer}>
        <TouchableOpacity>
          <ActionBtn
            text="quero estudar"
            color='#390072'
            onPress={()=> navigation.navigate('Courses')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <ActionBtn
            text="quero trabalhar"
            color="#390072"
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor:'#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  header: {
    paddingLeft: 20,
    paddingRight:20
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    paddingBottom:20
  },

  logo: {
    flex:1
  },

  btnsContainer: {
    flexDirection: 'row',
    gap:20
  }

})


export default Home