import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "../../components";
import { AntDesign } from '@expo/vector-icons'; 

const OrderSuccess = ({navigation}) => (
    <View style={styles.container}>
        <AntDesign name="checkcircle" size={90} color="#118DF0" />
        <Text style={styles.txt}>Thank you!</Text>
        <Text>Your Order Received Successfully</Text>
        <Button 
          transparent={true} color="#118DF0" 
          style={{width: '50%', alignSelf: 'center', position: 'absolute', bottom: 80}}
          onPress={() => navigation.navigate('Home')}
        >
            <Text>Go To Home</Text>
        </Button>
    </View>
);

export default OrderSuccess;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt: {
        fontSize: 20,
        marginTop: 30,
        marginBottom: 10
    }
})


