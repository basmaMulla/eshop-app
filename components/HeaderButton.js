import React from "react";
import { TouchableOpacity, View, Platform, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons  } from "@expo/vector-icons";

const HeaderButton = ({ color = "black", onPress, customStyle, cartButton = true }) => (
    <TouchableOpacity onPress={onPress} style={[customStyle, styles.container]}>
        {cartButton?
        <View style={styles.nmuberOfCart}>
            <Text style={{color: 'white', fontSize: 8, fontWeight:'600'}}>0</Text>
        </View>
        : null}
        <View
            style={{
            ...Platform.select({ ios: { heigth: 45 } }),
            justifyContent: "center",
            }}
        >
            {cartButton?
            <MaterialCommunityIcons 
                name={"shopping-outline"}
                size={Platform.OS === "ios" ? 25 : 23}
                color={color}
            />
            :
            <MaterialCommunityIcons 
                name="account-box-outline" 
                size={Platform.OS === "ios" ? 27 : 25}
                color={color} 
            />
            }
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        padding: 5,
        height: 35,
        width: 35, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    nmuberOfCart:{
        backgroundColor: '#118DF0',
        height: 14,
        width: 14,
        borderRadius: 6,
        borderWidth: 1.1,
        borderColor: 'white',
        position: 'absolute',
        top:6,
        right: 3,
        zIndex: 1,
        alignItems:'center',
        justifyContent: 'center',
    },
})

export default HeaderButton;
