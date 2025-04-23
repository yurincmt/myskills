import { StyleSheet, Text, View } from "react-native"

export function SkillCard({skillName}) {
  return (
    <View style={styles.skillContainer}>
      <Text style={styles.skillText}>
        {skillName}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
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