import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const HandleSubmitBtn = ({ title, submitting, onPress }) => {

  const backgroundColor = submitting ? 'rgba(27,27,51,0.4)' : '#390072'

  return (
    <TouchableOpacity
      onPress={!submitting ? onPress : null}
      style={[styles.button, {backgroundColor}]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 65,
    color: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent:'center'
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight:'900'
  }
})

export default HandleSubmitBtn