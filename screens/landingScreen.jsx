import React from "react";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DebitCard from "./components/debitCard";
const thread = require("../assets/thread.png");
const transfer = require("../assets/transfer.png");
export const LandingScreen = ({ navigation }) => {
  const onPressHandler = () => {
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>ProfitPilot.</Text>
      <View style={[styles.cardsContainer, { marginTop: 80, marginLeft: 50 }]}>
        <View>
          <Image
            source={thread}
            style={{
              position: "absolute",
              zIndex: 100,
              width: 120,
              height: 120,
              transform: [{ translateX: -40 }, { translateY: -120 }],
            }}
          />
          <DebitCard
            cardInfo={{
              id: "2",
              cardNumber: "1234 5678 9101 1121",
              expirationDate: "01/23",
              currency: "US Dollar",
              type: "VISA",
              balance: "40,440.00",
            }}
          />
        </View>
        <View
          style={{
            position: "absolute",
            transform: [{ translateX: 120 }, { translateY: -100 }],
          }}
        >
          <DebitCard
            cardInfo={{
              id: "0",
              cardNumber: "1234 5678 9101 1121",
              expirationDate: "01/23",
              currency: "US Dollar",
              type: "VISA",
              balance: "40,440.00",
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#fff",
            padding: 15,
            borderRadius: 24,
            opacity: 0.8,
            position: "relative",
            transform: [
              { translateX: 50 },
              { translateY: -20 },
              { rotate: "22deg" },
            ],
          }}
        >
          <Image source={transfer} style={{ height: 30, width: 30 }} />
          <Text>Request</Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Text style={{ fontSize: 73, lineHeight: 70, fontWeight: "400" }}>
          Your
        </Text>
        <Text style={{ fontSize: 73, lineHeight: 70, fontWeight: "800" }}>
          Financial
        </Text>
        <Text style={{ fontSize: 73, lineHeight: 70, fontWeight: "400" }}>
          Navigator
        </Text>
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
    backgroundColor: "#c8e9ca",
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
    fontSize: 73,
    lineHeight: 70,
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
