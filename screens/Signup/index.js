import React, {useState} from "react";
import { StyleSheet, View, Dimensions, Text, Image, KeyboardAvoidingView, StatusBar, TouchableOpacity, ActivityIndicator } from "react-native";
import { Button, Input } from "../../components";
import axios from "axios";
import Store from '../../service/store';

function Signup({ navigation }) {
    const [inputs, setInputs] = useState({ fullName: "", email: "", password: "" })
    const [loading, setLoading] = useState(false);

    const Signup = () => {
        setLoading(true);
        const data = {
            email: inputs.email,
            username: inputs.email,
            name:{
                firstname: inputs.fullName.split(" ")[0],
                lastname: inputs.fullName.split(" ")[1]
            },
            password: inputs.password
        }
        axios.post('https://fakestoreapi.com/users', data).then(res => {
            const response = res.data;
            if(response.id){
                Store.setIsLogin(true);
                navigation.navigate("Home");
            } else {
                alert('An Error Ocurred!');
            }
        }).catch(err => {
            alert('An Error Ocurred!');
        }).finally(() => {
            setLoading(false);
        });
    }

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
                    <Button transparent={false}
                        onPress={Signup}
                        style={{width: '70%'}}
                        disabled={loading || !inputs.fullName || !inputs.email || !inputs.password}
                    >
                        {loading?
                            <ActivityIndicator color={'black'} size="small" />
                            :
                            <Text>Signup</Text>
                        }
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

