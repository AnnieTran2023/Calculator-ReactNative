import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [result, setResult] = useState("0");
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const addition = () => {
    const sum = parseInt(firstNumber,10) + parseInt(secondNumber,10)
    setResult(sum.toString())
  }
  const substract = () => {
    const minus = parseInt(firstNumber, 10) - parseInt(secondNumber,10)
    setResult(minus.toString())
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={{ fontWeight: 700, fontSize: 20 }}>Result: {result}</Text>
        <TextInput
          placeholder="Enter first number"
          onChangeText={(firstNumber) => setFirstNumber(firstNumber)}
          value={firstNumber}
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          placeholder="Enter second number"
          onChangeText={(secondNumber) => setSecondNumber(secondNumber)}
          value={secondNumber}
          keyboardType="numeric"
          style={styles.input}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={addition} title="+" />
        <Button onPress={substract} title="-" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    height: 40,
    padding: 20,
    margin: 10,
    width: 200,
  },
});
