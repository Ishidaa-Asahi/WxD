import { View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import CustomButton from '../../../components/CustomButton';
import CustomInput from '../../../components/CustomInput';
import { useNavigation } from '@react-navigation/native';

const ConfirmEmailScreen = () => {
const [code, setCode] = useState('');
const navigation = useNavigation();
const onPressConfirm = () => {
    //TODO
    //validate
    navigation.navigate("Home");
}
const onPressGoToSignUp = () => {
  navigation.navigate("Signup");
}
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Confirm Email</Text>
      <CustomInput 
        placeholder="Enter Confirmation Code"
        value={code}
        setValue={setCode}
      />
      <CuscoretomButton 
        text="Confirm"
        onPress={onPressConfirm}
        type="PRIMARY"
      />
      <View style={styles.flexButtons}>
        <CustomButton 
            width="45%"
            text="Resend Code"
            type="SECONDARY"
        />
        <CustomButton 
            width="45%"
            text="Go to Sign Up"
            type="SECONDARY"
            onPress={onPressGoToSignUp}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        padding: 20,
        backgroundColor: '#F7F8FC',
        flex: 1,
    },
    heading: {
        fontSize: 30,
    },
    flexButtons: {
        flexDirection: "row",
        justifyContent: "space-evenly"

    },
});
export default ConfirmEmailScreen;