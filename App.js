import { StyleSheet, Text, View } from "react-native";
import { LandingScreen } from "./screens/landingScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./screens/homeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QrScanner } from "./screens/qrScanner";
import { Statistics } from "./screens/statistics";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Landing" component={LandingScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="qrScanner" component={QrScanner} />
          <Stack.Screen name="Stats" component={Statistics} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
