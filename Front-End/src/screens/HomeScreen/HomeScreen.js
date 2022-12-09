import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hey Pal</Text>
      <Text>HOME Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        padding: 20,
        backgroundColor: '#F7F8FC',
    },
    heading :{
        fontSize: 20,
    }
})
export default HomeScreen