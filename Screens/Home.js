import {
    Button,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
    useState
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
          <Ionicons name="md-notifications-outline" size={24} color="goldenrod" style={{marginRight:20,backgroundColor:'white', borderRadius:30,padding:5}} />
        ),
      });
    }, []);
  
    const customButton = (onConfirm) => {
      return (
        <Button
          onPress={() => onConfirm()}
          style={{
            container: {
              width: "80%",
              marginHorizontal: "3%",
            },
            text: { fontSize: 20 },
          }}
          primary
          title="submit"
        ></Button>
      );
    };
    return (
      <View>
        <Header />
        <ScrollView>
          <View
            style={{ borderRadius: 20, color: "white", margin: 10, padding: 10 }}
          >
            <Pressable>
              <Entypo name="location" size={24} color="black" />
              <TextInput placeholder="Enter Location" />
            </Pressable>
            <Pressable>
              <Fontisto name="date" size={24} color="black" />
             
           
            </Pressable>
            
          </View>
        </ScrollView>
      </View>
    );
  };
  
  export default Home;
  
  const styles = StyleSheet.create({});
  