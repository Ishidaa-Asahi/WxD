import { Pressable, Text, StyleSheet } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type, width}) => {
  return (
    <Pressable 
        style={[styles.container, styles[`container_${type}`]]}
        onPress={onPress} width={width}
    >
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    container : 
    {
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 2,
        marginVertical: 5,
    },
    container_PRIMARY: {
        backgroundColor: '#7165E3',

    },
    container_SECONDARY : {
        backgroundColor: '#111',
    },
    text : {
        fontWeight: 'bold',
        color: 'white',
    },
    text_PRIMARY:{

    },
    text_SECONDARY : {

    },
})

export default CustomButton