import { View, Text, StyleSheet } from 'react-native'
import CircularProgress from 'react-native-circular-progress-indicator';
import React from 'react'
const DietZoneScreen = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.heading}>Good Afternoon, USER!</Text>
      <Text> Time to add Lunch calories</Text>
      <CircularProgress
        value={500}
        radius={120}
        duration={1000}
        progressValueColor={'#111'}
        maxValue={1200}
        title={'Calories'}
        titleColor={'green'}
        titleStyle={{fontWeight: 'bold'}}
        style={styles.progressBar}
      />

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
  },
  progressBar: {
    paddingHorizontal: 5,
    marginTop: 5,
  }
})
export default DietZoneScreen   