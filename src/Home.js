import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Bem-Vindo, Yuri
      </Text>

      <TextInput
        style={styles.textInput}
        placeholder="Nova Habilidade"
        placeholderTextColor='#555'

      />
      
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>

      <Text style={[styles.title, {marginTop: 50}]}>
        Habilidades
      </Text>
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
  }
})