import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import transferIcon from "../../assets/transfer.png";
import requestIcon from "../../assets/request.png";

const TransactionCard = ({ date, time, amount, description, clientName }) => {
  const icon = description === "transfered" ? transferIcon : requestIcon;

  return (
    <View style={styles.transactionCard}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={styles.iconContainer}>
          {description === "transfered" ? (
            <Image source={requestIcon} style={styles.icon} />
          ) : (
            <Image
              source={transferIcon}
              style={[styles.icon, { height: 35, width: 35 }]}
            />
          )}
        </View>
        <View style={{ marginLeft: 12 }}>
          <Text>
            {description === "transfered"
              ? `Transfered to ${clientName}`
              : `Requested from ${clientName}`}
          </Text>
          <Text>{time}</Text>
        </View>
      </View>
      <Text style={styles.amountText}>
        {description === "transfered" ? `-$${amount}` : `+$${amount}`}
      </Text>
    </View>
  );
};

export const TransactionHistory = ({ transactions }) => {
  return (
    <View style={styles.transactionHistoryContainer}>
      <Text style={styles.transactionHistoryTitle}>Transaction</Text>
      <View>
        {transactions.map((transaction, index) => (
          <TransactionCard
            key={index}
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
    padding: 10,
    marginBottom: 20,
  },
  transactionHistoryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  transactionCard: {
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconContainer: {
    height: 45,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 45,
    backgroundColor: "lightgray",
    padding: 5,
  },
  icon: {
    height: 30,
    width: 30,
  },
  amountText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default TransactionHistory;
