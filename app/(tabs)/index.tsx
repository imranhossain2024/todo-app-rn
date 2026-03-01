
import useTheme from '@/hooks/useTheme';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const {toggleDarkMode} = useTheme();
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.content}>New Another App..</Text>
      <Text>Imran Hassan</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Click Me</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // web row
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    gap: 10,
  },
  content: {
    color: "black",
    fontSize: 22,
    fontWeight: "bold",
  },
})