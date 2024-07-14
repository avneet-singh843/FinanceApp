import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const DebitCard = ({ cardInfo }) => {
  return (
    <LinearGradient colors={["#87dcfb", "#87dcfb"]} style={styles.container}>
      <View style={styles.cardHeader}>
        <View style={styles.currencyContainer}>
          <Image
            source={require("../../assets/us-flag.png")}
            style={styles.flagIcon}
          />
          <Text style={styles.currencyText}>{cardInfo.currency}</Text>
        </View>
        <Text style={styles.cardType}>{cardInfo.type}</Text>
      </View>

      <Text style={styles.balanceLabel}>Your balance</Text>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceAmount}>${cardInfo.balance}</Text>
        <Ionicons name="eye-outline" size={24} color="#000" />
      </View>

      <View style={styles.cardFooter}>
        <View>
          <Text style={styles.footerLabel}>Account number</Text>
          <Text style={styles.footerValue}>
            **** {cardInfo.cardNumber.slice(-4)}
          </Text>
        </View>
        <View>
          <Text style={styles.footerLabel}>Valid Thru</Text>
          <Text style={styles.footerValue}>{cardInfo.expirationDate}</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    padding: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  currencyContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  flagIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  currencyText: {
    fontSize: 14,
    fontWeight: "600",
  },
  cardType: {
    fontSize: 16,
    fontWeight: "bold",
  },
  balanceLabel: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  balanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: "bold",
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerLabel: {
    fontSize: 12,
    color: "#666",
    marginBottom: 2,
  },
  footerValue: {
    fontSize: 14,
    fontWeight: "600",
  },
});

export default DebitCard;
