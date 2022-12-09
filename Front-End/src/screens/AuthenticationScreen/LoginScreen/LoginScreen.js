import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Image} from "react-native";
import logo from '../../../../assets/images/logo.png'
import CustomInput from "../../../components/CustomInput";
import CustomButton from '../../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
export default function LoginScreen(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation('');
    const onLoginPressed = () => {
        //TODO - 
        //validate user
        navigation.navigate('Home');
    };
    const onCreateAccountPressed = () =>{
        navigation.navigate("Signup");
    }; 
    return(
        <SafeAreaView style={styles.page}>
            <Image 
                source={logo}  
                style={styles.logo} 
                resizeMode="contain" 
            />
            <CustomInput 
                placeholder="Username" 
                value={username} 
                setValue={setUsername} 
            />
            <CustomInput 
                placeholder="Password" 
                value={password} 
                setValue={setPassword} 
                secureTextEntry={true} 
            />
            <CustomButton 
                text='Login'
                onPress={onLoginPressed}
                type="PRIMARY"
                width="35%"
            />
            <CustomButton 
                text='Create Account'
                onPress={onCreateAccountPressed}
                type="SECONDARY"
                width="35%"
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    page: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F7F8FC',
    },
    logo: {
        width: '70%',
        height: 350,
    }
});