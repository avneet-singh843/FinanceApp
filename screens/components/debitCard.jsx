import React from "react";
import { Text, View, StyleSheet } from "react-native";

const DebitCard = ({ cardInfo }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardHeader}>
        <View>
          <Text>{cardInfo.currency}</Text>
        </View>
        <Text>{cardInfo.type}</Text>
      </View>
      <View style={styles.cardHeader}>
        <Text>${cardInfo.balance}</Text>
      </View>
      <View style={styles.cardHeader}>
        <Text>{cardInfo.cardNumber}</Text>
        <Text>{cardInfo.expirationDate}</Text>
      </View>
    </View>
  );
};
export default DebitCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "red",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
