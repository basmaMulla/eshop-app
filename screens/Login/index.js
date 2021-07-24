import React, {useState} from "react";
import { StyleSheet, View, Dimensions, Text, Image, KeyboardAvoidingView, StatusBar, TouchableOpacity, ActivityIndicator } from "react-native";
import { Button, Input } from "../../components";
import axios from "axios";
import Store from '../../service/store';

function Login({ navigation }) {
    const [inputs, setInputs] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);

    const Login = () => {
        setLoading(true); 
        const data = {
            username: inputs.email,
            password: inputs.password
        }
        axios.post('https://fakestoreapi.com/auth/login', data).then(res => {
            const response = res.data;
            if(response.token){
                Store.setIsLogin(true);
                navigation.navigate("Home");
            } else {
                alert(response.msg);
            }
        }).catch(() => {
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
                    <Button
                        transparent={false}
                        onPress={Login}
                        style={{width: '70%'}}
                        disabled={loading || !inputs.email || !inputs.password}
                    >
                        {loading?
                            <ActivityIndicator color={'black'} size="small" />
                            :
                            <Text>Login</Text>
                        }
                    </Button>
                </View>
            </KeyboardAvoidingView>
            <View style={styles.authTextContainer}>
                <View style={styles.authTextView}>
                    <Text style={{color: 'white', fontWeight: '200'}}>New user? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                    <Text style={{color: 'white', fontWeight: '600'}}>Signup now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  );
}

export default Login;

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
    },
});

