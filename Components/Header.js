import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.icons}>
      <Ionicons name="bed" size={24} color="black" />
      <Text>Stays</Text>
      </Pressable>
      <Pressable style={styles.icons}>
      <Ionicons name="bed" size={24} color="black" />
      <Text>Flights</Text>
      </Pressable>
      <Pressable style={styles.icons}>
      <Ionicons name="bed" size={24} color="black" />
      <Text>Car Rentals</Text>
      </Pressable>
      <Pressable style={styles.icons}>
      <Ionicons name="bed" size={24} color="black" />
      <Text>Taxi</Text>
      </Pressable>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:'goldenrod',
        height:65,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    icons:{
        flexDirection:'row',
        alignItems:'center',
        borderColor:'white',
        borderWidth:2,
        borderRadius:25,
        padding:6,
    },
    iconText:{
        marginLeft:8,
        fontWeight:'bold',
        color:'white',
        fontSize:15,

    }
})