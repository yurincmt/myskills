import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View
} from "react-native";

interface Props extends TouchableOpacityProps {
  skillName: string;
}

export function SkillCard({skillName, ...rest}: Props) {
  return (
    <View style={styles.Container}>
      <View style={styles.skillContainer}>
        <Text style={styles.title}>
          {skillName}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.removeButton}
        {...rest}>
          <Text style={[styles.title, {fontSize: 18}]}>
            Remove
          </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  skillContainer: {
    width: '70%',
    backgroundColor: '#1F1E25',
    borderRadius: 50,
    padding: 16,
    marginRight: 6,
  },
  title: {
    color: '#FFF',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 20,
  },
  removeButton: {
    padding: 16,
    borderRadius: 50,
    backgroundColor: '#ef4444',
    justifyContent: 'center',
  }
})