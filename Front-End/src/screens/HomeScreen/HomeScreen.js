import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

  const navigation = useNavigation('');
  const onDietZonePressed = () => {
      navigation.navigate('Diet Zone');
  };
  return (
    <View style={styles.container}>

      <Text style={styles.heading}>HOME Page</Text>
      
      <CustomButton 
        text="Diet Zone"
        type="PRIMARY"
        onPress={onDietZonePressed}
      />
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