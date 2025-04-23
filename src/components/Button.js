import { StyleSheet, Text, TouchableOpacity } from "react-native"

export function Button({title, onPressFunc}) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={onPressFunc}
      >
      <Text style={styles.buttonText}>{title}</Text>
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