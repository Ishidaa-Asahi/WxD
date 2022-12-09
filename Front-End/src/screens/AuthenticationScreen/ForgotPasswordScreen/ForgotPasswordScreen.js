import { View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import CustomButton from '../../../components/CustomButton'
import CustomInput from '../../../components/CustomInput'

const ForgotPasswordScreen = () => {

    const [username, setUsername] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Reset Password</Text>
      <CustomInput 
        placeholder="Enter Username"
        value={username}
        setValue={setUsername}
        style={styles.enterUsername}
      />
      <CustomButton 
        type="PRIMARY"
        text="Send"
        width="50%"
        style={styles.sendButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container : {
        padding: 20,
    },
    heading : {
        fontSize: 20,
        marginBottom: 20,
    },
    sendButton : {
        justifyContent: "center",
    }
})
export default ForgotPasswordScreen;