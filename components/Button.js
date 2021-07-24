import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";

const Button = ({ transparent = false, color = "#FFFFFF", children, onPress, style, disabled = false }) => (
    <TouchableOpacity onPress={onPress} style={style} disabled={disabled}>
        <View style={[styles.container, {
            backgroundColor: transparent ? "transparent" : color,
            borderStyle: 'solid',
            borderWidth: transparent ? 2 : 0,
            borderColor: transparent ? color : "black"
        }]}>
            {children}
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 30
    }
})

export default Button;

