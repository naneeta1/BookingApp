import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  useState,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../Components/Header";
import { Entypo } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import DatePicker from "react-native-date-ranges";

const Home = () => {
  const navigation = useNavigation();
  const [selectedDates, setSelectedDates] = useState([]);
  console.log(selectedDates) ;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Booking.com",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "goldenrod",
        height: 90,
      },
      headerRight: () => (
        <Ionicons
          name="md-notifications-outline"
          size={24}
          color="goldenrod"
          style={{
            marginRight: 20,
            backgroundColor: "white",
            borderRadius: 30,
            padding: 5,
          }}
        />
      ),
    });
  }, []);

  const customButton = (onConfirm) => {
    return (
      <Button
        onPress={onConfirm}
        style={{
          container: {width: "80%",  marginHorizontal: "3%",borderWidth:0},
          text: { fontSize: 20 },
        }}
        primary
        title="submit"
      />
    );
  };
  return (
    <View>
      <Header />
      <ScrollView>
        <View
          style={{
            borderRadius: 10,
            color: "white",
            margin: 20,
            borderColor: "blue",
            borderWidth: 3,
          }}
        >
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              paddingHorizontal: 5,
              paddingVertical: 8,
              borderWidth: 2,
              borderColor: "goldenrod",
            }}
          >
            <Entypo name="location" size={24} color="black" />
            <TextInput placeholder="Enter Location" />
          </Pressable>

          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              paddingHorizontal: 5,
              paddingVertical: 8,
              borderWidth: 2,
              borderColor: "goldenrod",
            }}
          >
            <Fontisto name="date" size={24} color="black" />
            <DatePicker
              style={{ width: 280, height: 30, borderWidth: 0, borderColor: 'transparent'}}
              customStyles={{
                placeholderText: {
                  fontSize: 15,
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: "auto",
                },
                headerStyle: {
                  backgroundColor: "goldenrod",
                },
                contentText: {
                  fontSize: 15,
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: "auto",
                }
              }}
              selectedBgColor="goldenrod"
              customButton={(onConfirm)=> customButton(onConfirm)}
              onConfirm={({startDate,endDate}) => setSelectedDates([...setSelectedDates,{startDate,endDate}]) }
              allowFontScaling={false}
              placeholder={"Apr 27, 2018 → Jul 10, 2018"}
              mode={"range"}
            />
          </Pressable>

          <Pressable>
            <Entypo name="location" size={24} color="black" />
            <TextInput placeholder="Enter Location" />
          </Pressable>
          <Pressable>
            <Entypo name="location" size={24} color="black" />
            <TextInput placeholder="Enter Location" />
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
