import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = ({ placeholder, password = false, value, keyboardType = "default", onChange, name }) => (
    <TextInput
        onChangeText={text => onChange(text, name)}
        placeholder={placeholder}
        value={value}
        keyboardType={keyboardType}
        secureTextEntry={password}
        placeholderTextColor="white"
        underlineColorAndroid="transparent"
        style={styles.input}
    />
  );

const styles = StyleSheet.create({
    input: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: 30,
        width: '100%',
        color: 'white',
        marginBottom: 20
    },
})

export default Input;


