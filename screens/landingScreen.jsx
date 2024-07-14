import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const DebitCard = ({ balance, accountNumber, validThru }) => (
  <LinearGradient colors={["#e0f2e9", "#d0e8e0"]} style={styles.cardContainer}>
    <View style={styles.cardHeader}>
      <Ionicons name="flag-outline" size={24} color="#000" />
      <Text style={styles.currencyText}>US Dollar</Text>
    </View>
    <Text style={styles.balanceLabel}>Your balance</Text>
    <Text style={styles.balanceAmount}>${balance}</Text>
    <View style={styles.cardFooter}>
      <Text style={styles.accountNumber}>**** {accountNumber}</Text>
      <Text style={styles.validThru}>Valid Thru {validThru}</Text>
    </View>
  </LinearGradient>
);

export const LandingScreen = ({ navigation }) => {
  const onPressHandler = () => {
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>ProfitPilot.</Text>
      <View style={styles.cardsContainer}>
        <DebitCard balance="40,500.80" accountNumber="9934" validThru="05/28" />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Your Financial Navigator</Text>
        <Text style={styles.description}>
          Invest in projects that make a difference. Join us in supporting
          impactful initiatives and create a positive change in the world.
        </Text>
        <Pressable style={styles.button} onPress={onPressHandler}>
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  cardsContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  cardContainer: {
    width: "100%",
    padding: 20,
    borderRadius: 15,
    marginBottom: 10,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  currencyText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "500",
  },
  balanceLabel: {
    fontSize: 14,
    color: "#666",
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 5,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  accountNumber: {
    fontSize: 14,
  },
  validThru: {
    fontSize: 14,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
    lineHeight: 24,
  },
  button: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
