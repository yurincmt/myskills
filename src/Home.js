import { useState } from "react";
import {
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import { SkillCard } from "./components/SkillCard";
import { Button } from "./components/Button";

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [skillsList, setSkillsList] = useState([]);

  function handleAddNewSkill() {
    if (newSkill.trim().length === 0) {
      return Alert.alert('Nova Habilidade', 'Nome inválido para habilidade!');
    }
    setSkillsList([...skillsList, newSkill]);
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Bem-Vindo, Yuri
      </Text>

      <TextInput
        style={styles.textInput}
        placeholder="Nova Habilidade"
        placeholderTextColor='#555'
        onChangeText={setNewSkill}
      />

      <Button />

      <Text style={[styles.title, {marginVertical: 40}]}>
        Habilidades
      </Text>

      <FlatList
        data={skillsList}
        renderItem={(item) => (
          <SkillCard />
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 50,
    paddingHorizontal: 20
  },
  title:{
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 24,
  },
  textInput: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: 20,
    marginTop: 20,
    borderRadius: 6,
  }
})