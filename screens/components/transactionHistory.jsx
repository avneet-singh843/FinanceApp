import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TransactionCard = ({ date, time, amount, description, clientName }) => {
  return (
    <View style={styles.transactionCard}>
      <Text>Date: {date}</Text>
      <Text>Time: {time}</Text>
      <Text>Amount: {amount}</Text>
      <Text>Description: {description}</Text>
      <Text>Client Name: {clientName}</Text>
    </View>
  );
};

export const TransactionHistory = ({ transactions }) => {
  return (
    <View style={styles.transactionHistoryContainer}>
      <Text style={styles.transactionHistoryTitle}>Transaction History</Text>
      <View>
        {transactions.map((transaction, index) => (
          <TransactionCard
            key={index}
            date={transaction.date}
            time={transaction.time}
            amount={transaction.amount}
            description={transaction.description}
            clientName={transaction.clientName}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  transactionHistoryContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  transactionHistoryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  transactionCard: {
    backgroundColor: "lightgray",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
