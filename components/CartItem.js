import React from "react";
import { TouchableWithoutFeedback, StyleSheet, Dimensions, View, Text, Image, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import { observer } from "mobx-react"

const CartItem = observer(({ item, onPress, onIncrement, onDecrement, removeItem }) => 
    <View style={styles.container}>
        <TouchableWithoutFeedback style={[styles.imageContainer, styles.imgShadow]} onPress={onPress}>
            <Image
                source={{ uri: item.image }}
                style={{ borderRadius: 15, width: width / 2 - 40, height: 140 }}
            />
        </TouchableWithoutFeedback>
        <View style={styles.details}>
            <View style={{justifyContent: 'space-between', flex: 1, paddingBottom: 20}}>
                <Text style={styles.nameTxt} numberOfLines={1}>{item.title}</Text>
                <Text style={styles.priceTxt}>{`${item.price*item.quantity} SAR`}</Text>
            </View>
            <View style={styles.qtyContainer}>
                <View style={[{flexDirection:'row', flex: 2}, styles.btnShadow]}>
                    <TouchableOpacity style={styles.qtyBtnMinus} onPress={onDecrement}>
                        <Text style={styles.opTxt}>-</Text>
                    </TouchableOpacity>
                    <View style={styles.qty}>
                        <Text style={styles.qtyTxt}>{item.quantity}</Text>
                    </View>
                    <TouchableOpacity style={styles.qtyBtnPLus} onPress={onIncrement}>
                        <Text style={styles.opTxt}>+</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={[styles.deleteBtn, styles.btnShadow]} onPress={removeItem}>
                    <Feather name="trash-2" size={16} color="#ff6666" />
                </TouchableOpacity>
            </View>
        </View>
    </View>
);
export default CartItem;

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        flexDirection: 'row', 
    },
    imageContainer: {
        width: width / 2 - 60,
        borderRadius: 15,
        minHeight: 10,
        marginRight: 25
    },
    details: {
        flex: 1,
        marginLeft: 10,
        paddingVertical: 10,
        justifyContent: 'space-between'
    },
    nameTxt: {
        color: '#3B3B3B',
        fontWeight: "700",
        fontSize: 18
    },
    priceTxt: {
        fontWeight: "700",
        color: '#118DF0',
        fontSize: 17
    },
    descriptionTxt: {
        color: '#A9A9B0',
        fontSize: 14
    },
    qtyContainer: {
        flex: 2, 
        flexDirection:'row',
        width: '95%',
        justifyContent: 'space-between',
        borderRadius: 5,
        backgroundColor: 'white'
    },
    qtyBtnMinus: {
        flex: 1, 
        borderTopLeftRadius: 10, 
        borderBottomLeftRadius: 10, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'white'
    },
    qtyBtnPLus: {
        flex: 1, 
        borderTopRightRadius: 10, 
        borderBottomRightRadius: 10, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'white'
    },
    deleteBtn: {
        flex: 0.5,
        borderRadius: 10,
        marginLeft: 20,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'white'
    },
    qty: {
        flex: 1, 
        backgroundColor: '#edeff2', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    qtyTxt: {
        fontWeight: '700'
    },
    opTxt: {
        fontWeight: '700',
        color: '#a3a5a7',
        fontSize: 16
    },
    imgShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowRadius: 15,
        shadowOpacity: 0.1,
        elevation: 3,
    },
    btnShadow: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 15,
        shadowOpacity: 0.1,
        elevation: 5,
    },
})





