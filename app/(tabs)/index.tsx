import { Link } from 'expo-router';
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.content}>New Another App..</Text>
      <Text>Imran Hassan</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // web row
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    gap: 10,
  },
  content: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
})