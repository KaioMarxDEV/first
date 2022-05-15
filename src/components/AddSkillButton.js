import React from 'react'
import {
  StyleSheet, Text, TouchableOpacity
} from 'react-native'

export function AddSkillButton({ onPress }) {
  return (
    <TouchableOpacity 
        style={styles.button}
        onPress={onPress}
        >
        <Text style={styles.buttonText}>Register New Skill</Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a370F7',
    marginTop: 30,
    padding: Platform.OS === 'ios' ? 15 : 10,
    borderRadius: 7,
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFF'
  },
})