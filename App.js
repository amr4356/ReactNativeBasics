import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummyText}>another view core components!</Text>
      </View>
      <Text
        style={{ margin: 16, borderWidth: 2, borderColor: "red", padding: 16 }}
      >
        hello world!
      </Text>
      <Button title="Tap me" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    margin: 16, borderWidth: 2, borderColor: "red", padding: 16
  }
});
