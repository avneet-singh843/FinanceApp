import { useNavigation } from "@react-navigation/native";
import {
  ScrollView,
  View,
  Text,
  Pressable,
  Image,
  FlatList,
} from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { SafeAreaView } from "react-native-safe-area-context";
import DebitCard from "./components/debitCard";
import { useRef, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { TransactionHistory } from "./components/transactionHistory";
import { TransferCard } from "./components/TransferCard";
import BottomNavigation from "./components/bottomSheetNavigation";
const userImage = require("../assets/userImage.jpeg");
const notificationIcon = require("../assets/notification.png");
const Transfer = require("../assets/transfer.png");
const Request = require("../assets/request.png");
const add = require("../assets/add.png");

export const HomeScreen = ({ navigation }) => {
  const navigate = useNavigation();
  const handlePressBack = () => {
    navigate.goBack();
  };
  const [currentScreen, setCurrentScreen] = useState("Home");
  const [transaction, setTransaction] = useState([
    {
      date: "01/01/2021",
      time: "12:00 PM",
      amount: "1000",
      description: "recieved",
      clientName: "John Doe",
    },
    {
      date: "01/01/2021",
      time: "12:00 PM",
      amount: "1000",
      description: "transfered",
      clientName: "John Doe",
    },
    {
      date: "01/01/2021",
      time: "12:00 PM",
      amount: "1000",
      description: "transfered",
      clientName: "John Doe",
    },
    {
      date: "01/01/2021",
      time: "12:00 PM",
      amount: "1000",
      description: "recieved",
      clientName: "John Doe",
    },
    {
      date: "01/01/2021",
      time: "12:00 PM",
      amount: "1000",
      description: "recieved",
      clientName: "John Doe",
    },
    {
      date: "01/01/2021",
      time: "12:00 PM",
      amount: "1000",
      description: "transfered",
      clientName: "John Doe",
    },
  ]);
  const AccoutDetails = {
    userName: "Sarah Muller",
    userImage: userImage,
    cards: [
      {
        id: "1",
        cardNumber: "1234 5678 9101 1121",
        expirationDate: "01/23",
        currency: "US Dollar",
        type: "VISA",
        balance: "40,440.00",
      },
      {
        id: "2",
        cardNumber: "1234 5678 9101 1121",
        expirationDate: "01/23",
        currency: "US Dollar",
        type: "VISA",
        balance: "40,440.00",
      },
      {
        id: "3",
        cardNumber: "1234 5678 9101 1121",
        expirationDate: "01/23",
        currency: "US Dollar",
        type: "VISA",
        balance: "40,440.00",
      },
    ],
    transactions: transaction.reverse(),
  };

  const transferSheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleSheetChanges = (index) => {
    if (index === -1) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ backgroundColor: "#fff" }}>
        <ScrollView
          style={[
            { backgroundColor: "#fff" },
            isOpen ? { opacity: 0.5 } : { opacity: 1 },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 10,
              paddingHorizontal: 20,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                source={AccoutDetails.userImage}
                style={{ width: 50, height: 50, borderRadius: 25 }}
              />
              <View style={{ marginLeft: 20, justifyContent: "center" }}>
                <Text>Welcome back,</Text>
                <Text style={{ fontWeight: "600" }}>
                  {AccoutDetails.userName}
                </Text>
              </View>
            </View>
            <View style={{ justifyContent: "center" }}>
              <Image
                source={notificationIcon}
                style={{ width: 30, height: 30 }}
              />
            </View>
          </View>

          <View style={{ marginVertical: 20, paddingHorizontal: 5 }}>
            <Text
              style={{ paddingHorizontal: 15, fontSize: 24, fontWeight: "600" }}
            >
              Account
            </Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={AccoutDetails.cards}
              renderItem={({ item }) => <DebitCard cardInfo={item} />}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
              contentContainerStyle={{
                paddingVertical: 30,
                paddingHorizontal: 10,
                paddingLeft: 0,
                backgroundColor: "#fff",
              }}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                marginVertical: 10,
              }}
            >
              <Pressable
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#F7F9F2",
                  padding: 13,
                  borderRadius: 20,
                }}
              >
                <Image source={Transfer} style={{ width: 30, height: 30 }} />
                <Text style={{ fontSize: 19, fontWeight: "500" }}>Request</Text>
              </Pressable>
              <Pressable
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#F7F9F2",
                  padding: 13,
                  borderRadius: 20,
                }}
                onPress={() => {
                  transferSheetRef.current?.expand();
                  setIsOpen(true);
                }}
              >
                <Image source={Request} style={{ width: 30, height: 30 }} />
                <Text style={{ fontSize: 19, fontWeight: "500" }}>
                  Transfer
                </Text>
              </Pressable>
              <Pressable>
                <Image source={add} style={{ width: 50, height: 50 }} />
              </Pressable>
            </View>
          </View>
          <TransactionHistory transactions={AccoutDetails.transactions} />
        </ScrollView>

        <BottomNavigation
          navigation={navigation}
          currentScreen={currentScreen}
        />
        <BottomSheet
          ref={transferSheetRef}
          snapPoints={["40%"]}
          onChange={handleSheetChanges}
          enablePanDownToClose={true}
        >
          <BottomSheetView style={{ zIndex: 10 }}>
            <TransferCard
              cards={AccoutDetails.cards}
              setIsOpen={setIsOpen}
              transferSheetRef={transferSheetRef}
              setTransaction={setTransaction}
              transaction={transaction}
            />
          </BottomSheetView>
        </BottomSheet>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};
