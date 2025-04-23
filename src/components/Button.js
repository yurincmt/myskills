import { StyleSheet, Text, TouchableOpacity } from "react-native"

export function Button() {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      // onPress={handleAddNewSkill}
      >
      <Text style={styles.buttonText}>Adicionar</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
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
})