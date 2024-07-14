import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import RNPickerSelect from "react-native-picker-select";

export const TransferCard = ({
  cards,
  setIsOpen,
  transferSheetRef,
  setTransaction,
  transaction,
}) => {
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);

  const cardOptions = cards.map((card) => ({
    label: card.cardNumber,
    value: card.cardNumber,
  }));

  const isSendDisabled = !accountNumber || !amount || !selectedCard;

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Receiver's Account Number"
        style={styles.input}
        keyboardType="numeric"
        value={accountNumber}
        onChangeText={setAccountNumber}
      />
      <TextInput
        placeholder="Amount"
        style={styles.input}
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <RNPickerSelect
        onValueChange={(value) => setSelectedCard(value)}
        items={cardOptions}
        placeholder={{ label: "Select a card", value: null }}
        style={pickerSelectStyles}
      />
      <Pressable
        style={[styles.sendButton, isSendDisabled && styles.sendButtonDisabled]}
        onPress={() => {
          if (!isSendDisabled) {
            transferSheetRef.current?.close();
            setIsOpen(false);
            setTransaction((prevTransactions) => [
              ...prevTransactions,
              {
                date: "14/07/2024",
                time: new Date().toLocaleTimeString(),
                amount: amount,
                description: "transfered",
                clientName: "Avneet Singh",
              },
            ]);
          }
        }}
        disabled={isSendDisabled}
      >
        <Text style={{ color: "white" }}>Send Money</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
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
  sendButton: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
  },
  sendButtonDisabled: {
    backgroundColor: "#aaa",
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
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
