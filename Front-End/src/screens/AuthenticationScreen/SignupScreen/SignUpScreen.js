import { View, Text, StyleSheet } from 'react-native';
import React, {useState} from 'react';
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton"
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
//   const 
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation('');
  const onPressSignUp = () => {
    navigation.navigate("Confirm Email");
  }
  const onPressSignIn = () => {
    navigation.navigate("Login");
  }
    return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create Account</Text>
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />
      <CustomInput 
        placeholder="Email"
        value={email}
        setValue={setEmail}
      />
      <CustomInput 
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomInput 
        placeholder="Confirm Password"
        value={confirmPassword}
        setValue={setConfirmPassword}
        secureTextEntry={true}
      />
      <CustomButton 
        onPress={onPressSignUp}
        text="Sign Up"
        type="PRIMARY"
        width="60%"
      />
      <CustomButton 
        onPress={onPressSignIn}
        text="Have an account? Sign In"
        type="SECONDARY"
        width="60%"
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F7F8FC',
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    heading: {
        // flex: 1,
        fontSize: 30,
        paddingTop: 50,

    },
})
export default SignUpScreen