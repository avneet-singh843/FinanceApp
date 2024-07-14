import React from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import RNPickerSelect from "react-native-picker-select";

export const TransferCard = () => {
  const options = [
    { label: "Option 1", value: "Option 1" },
    { label: "Option 2", value: "Option 2" },
    { label: "Option 3", value: "Option 3" },
  ];

  return (
    <View style={styles.container}>
      <TextInput placeholder="Receiver's Account Number" style={styles.input} />
      <TextInput
        placeholder="Amount"
        style={styles.input}
        keyboardType="numeric"
      />
      <RNPickerSelect
        onValueChange={(value) => console.log(value)}
        items={options}
        placeholder={{ label: "Select an option", value: null }}
        style={pickerSelectStyles}
      />
      <Pressable>
        <Text>Send Money</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    color: "black",
    paddingRight: 30,
    marginVertical: 10,
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    color: "black",
    paddingRight: 30,
    marginVertical: 10,
  },
});
