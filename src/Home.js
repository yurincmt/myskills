import { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

export function Home() {
  const [newSkill, setNewSkill] = useState();
  const [skillsList, setSkillsList] = useState([]);

  function handleAddNewSkill() {
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
      
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleAddNewSkill}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>

      <Text style={[styles.title, {marginVertical: 40}]}>
        Habilidades
      </Text>

      <FlatList
        data={skillsList}
        renderItem={(item) => (
        <View style={styles.skillContainer}>
          <Text style={styles.skillText}>
            {item.item}
          </Text>
        </View>
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
  },
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  skillContainer: {
    backgroundColor: '#1F1E25',
    padding: 16,
    borderRadius: 50,
    marginVertical: 5,
  },
  skillText: {
    color: '#FFF',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 20,
  }
})