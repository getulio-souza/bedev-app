import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const ShowMoreBtn = props => {
  const content = (
    <View style={[styles.button, {backgroundColor: props.color}]}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  )
  return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
}

const styles = StyleSheet.create({
  button: {
    width: 85,
    height: 40,
    color: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent:'center'
  },
  text: {
    color: '#fff',
    fontSize: 12,
    fontWeight:'900'
  }
})

export default ShowMoreBtn