import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import FoodData from '../../components/DietZone/FoodData/FoodData';
const DietZoneScreen = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.heading}>DietZoneScreen</Text>
      <FoodData />
    </View>
  );
};


const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    padding: 20,
  },
  heading: {
    fontSize: 20,
  }
})
export default DietZoneScreen   