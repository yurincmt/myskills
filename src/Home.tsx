import { useEffect, useState } from "react";
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

interface SkillDataType {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [skillsList, setSkillsList] = useState<SkillDataType[]>([]);
  const [greeting, setGreeting] = useState('');

  function handleAddNewSkill() {
    if (newSkill.trim().length === 0) {
      return Alert.alert('Nova Habilidade', 'Nome inválido para habilidade!');
    }

    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    }
    
    setSkillsList([...skillsList, data]);
    setNewSkill('');
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting('Bom dia');
    } else if (12 <= currentHour && currentHour < 18) {
      setGreeting('Boa tarde');
    } else {
      setGreeting('Boa noite');
    }
  }, [])
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Bem-Vindo, Yuri
      </Text>

      <Text style={{color: '#FFF'}}>{greeting}</Text>

      <TextInput
        style={styles.textInput}
        placeholder="Nova Habilidade"
        placeholderTextColor='#555'
        onChangeText={setNewSkill}
        value={newSkill}
      />

      <Button
        title="Adicionar"
        onPress={handleAddNewSkill}
      />

      <Text style={[styles.title, {marginVertical: 40}]}>
        Habilidades
      </Text>

      <FlatList
        data={skillsList}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <SkillCard skillName={item.name}/>
        )}
        showsVerticalScrollIndicator={false}
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