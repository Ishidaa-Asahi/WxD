import { View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import CustomButton from '../../../components/CustomButton'
import CustomInput from '../../../components/CustomInput'

const NewPasswordScreen = () => {
    const [newPassword, setNewPassword] = useState('');
    const [reEnterNewPassword, setReEnterNewPassword] = useState('');
    const registerNewPassword = () => {
        console.warn("New Password");
    }
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>NewPasswordScreen</Text>
            <CustomInput 
                placeholder="Enter New Password"
                value={newPassword}
                setValue={setNewPassword}
            />
             <CustomInput 
                placeholder="Enter New Password"
                value={reEnterNewPassword}
                setValue={setReEnterNewPassword}
            />
            <CustomButton 
                text="Submit"
                type="PRIMARY"
                onPress={registerNewPassword}  
            />
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    heading: {
        fontSize: 20,
        marginBottom: 20,
    }
})
export default NewPasswordScreen