import React, {useState} from "react";
import { StyleSheet, View, Dimensions, Text, Image, KeyboardAvoidingView, StatusBar, TouchableOpacity } from "react-native";
import { Button, Input } from "../../components";

function Signup({ navigation }) {
    const [inputs, setInputs] = useState({ fullName: "", email: "", password: "" })

    function onInputChange (text, name) {
        setInputs({ ...inputs, [name]: text });
    };

  return (
    <View style={styles.container}>
        <Image
            source={require("../../assets/authBackground.jpg")}
            resizeMode="cover" 
            style={styles.imgBg}
        />
        <StatusBar barStyle="light-content" />
        <View style={styles.buttonsContainer}>
            <KeyboardAvoidingView style={styles.emailAuth} behavior="padding" enabled>
                <View style={styles.emailAuthForm}>
                    <Input
                        name="fullName"
                        placeholder="Full Name"
                        value={inputs.fullName}
                        onChange={onInputChange}
                    />
                    <Input
                        name="email"
                        placeholder="Email"
                        value={inputs.email}
                        keyboardType="email-address"
                        onChange={onInputChange}
                    />
                    <Input
                      name="password"
                      placeholder="Password"
                      value={inputs.password}
                      password
                      onChange={onInputChange}
                    />
                    <Button transparent={false} style={{width: '70%'}} onPress={() => navigation.navigate("Home")} >
                        <Text>Signup</Text>
                    </Button>
                </View>
            </KeyboardAvoidingView>
            <View style={styles.authTextContainer}>
                <View style={styles.authTextView}>
                    <Text style={{color: 'white', fontWeight: '200'}}>Existing user? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={{color: 'white', fontWeight: '600'}}>Login now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  );
}

export default Signup;


const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 1
    },
    imgBg: {
        position: 'absolute',
        bottom: 0,
        height: height,
        width: width
    },
    buttonsContainer: {
        justifyContent: 'flex-end',
        flex: 1,
        width: '80%'
    },
    divider: {
        color: 'rgba(255, 255, 255, 0.8)',
        textAlign: 'center',
        marginBottom: 25
    },
    authTextContainer: {
        marginVertical: 30,
        marginHorizontal: 0
    },
    emailAuth: {
        alignItems: 'center',
        width: '100%'
    },
    emailAuthForm: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 25
    },
    authTextView: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
});

