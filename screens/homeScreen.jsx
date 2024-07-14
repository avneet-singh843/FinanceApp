import { useNavigation } from "@react-navigation/native";
import { ScrollView, View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const HomeScreen = ({ navigation }) => {
  const navigate = useNavigation();
  const handlePressBack = () => {
    navigate.goBack();
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View>
            <Text>img</Text>
            <View>
              <Text>Welcome back,</Text>
              <Text>User Name</Text>
            </View>
          </View>
          <View>
            <Text>img</Text>
          </View>
        </View>
        <Pressable>
          <Text onPress={handlePressBack}>Go back</Text>
        </Pressable>
        <Pressable>
          <Text onPress={() => navigation.navigate("qrScanner")}>
            Qr Scanner
          </Text>
        </Pressable>
        <Pressable>
          <Text onPress={() => navigation.navigate("Stats")}>Stats</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};
