import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DebitCard from "./components/debitCard";
export const LandingScreen = ({ navigation }) => {
  const cardInfo = [
    {
      cardNumber: "1234 5678 9101 1121",
      expirationDate: "01/23",
      currency: "US Dollar",
      type: "VISA",
      balance: "40,440.00",
    },
  ];
  const onPressHandler = () => {
    navigation.navigate("Home");
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <Text>ProfitPilot.</Text>
      <View>
        <Text>IMAGES</Text>
      </View>
      <View>
        <Text>Your Financial Navigator</Text>
      </View>
      <View>
        <Text>
          Invest in rojects that make a difference. Join us in supporting
          impactful initiatives and create a positive change in the world
        </Text>
      </View>
      <Pressable onPress={onPressHandler}>
        <Text>Get Started</Text>
      </Pressable>
      <DebitCard cardInfo={cardInfo[0]} />
    </SafeAreaView>
  );
};
