import React, { useEffect, useState } from 'react';
import {
  FlatList, Platform, StyleSheet,
  Text,
  TextInput, View
} from 'react-native';
import { AddSkillButton } from '../components/AddSkillButton';
import { SkillCard } from '../components/SkillCard';

export function Home() {
  const [newSkill, setNewSkill] = useState('')
  const [mySkills, setMySkills] = useState([])
  const [greeting, setGreeting] = useState('')

  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill])
  }

  useEffect(() => {
    const currentHour = new Date().getHours()

    if (currentHour < 12) {
      setGreeting('Good morning')
    } else if(currentHour >= 12 && currentHour < 18) {
      setGreeting('Good afternoon')
    } else {
      setGreeting('Good night')
    }
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.text} >Hello Mobile Development</Text>

      <Text>{greeting}</Text>

      <TextInput 
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="white"
        onChangeText={setNewSkill}
      />

      <AddSkillButton onPress={handleAddNewSkill}/>

      <Text style={[styles.text, { marginVertical: 50 }]} >
        My Skills
      </Text>

      <FlatList 
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <SkillCard skill={item} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  text: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#a7c',
    marginTop: 30,
    padding: Platform.OS === 'ios' ? 15 : 10,
    borderRadius: 7,
  },
})