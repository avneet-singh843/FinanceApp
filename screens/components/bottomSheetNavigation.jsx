import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const BottomNavigation = ({ navigation, currentScreen }) => {
  const screens = [
    { name: "Home", icon: "home-outline" },
    { name: "qrScanner", icon: "scan-outline" },
    { name: "Stats", icon: "card-outline" },
  ];

  return (
    <View style={styles.container}>
      {screens.map((screen) => (
        <TouchableOpacity
          key={screen.name}
          style={styles.tabButton}
          onPress={() => navigation.navigate(screen.name)}
        >
          <Ionicons
            name={screen.icon}
            size={24}
            color={currentScreen === screen.name ? "#000" : "#A9A9A9"}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    height: 60,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 40, // Adjust for bottom shadow
    },
    shadowOpacity: 0.7,
    shadowRadius: 40, // Adjust for spread of the shadow
    elevation: 10, // Elevation for Android
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    marginTop: 40, // Adjust for top shadow
    marginLeft: 40, // Adjust for left shadow
    marginRight: 40, // Adjust for right shadow
  },
  tabButton: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    height: "100%",
  },
});

export default BottomNavigation;
