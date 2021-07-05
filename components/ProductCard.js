import React from "react";
import { TouchableWithoutFeedback, StyleSheet, Dimensions, View, Text, Image } from "react-native";

const { width } = Dimensions.get("screen");

const ProductCard = ({ imgSrc, name, price, onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: imgSrc }}
          style={{
            borderRadius: 15,
            width: width / 2 - 30,
            height: 160
          }}
        />
      </View>
      <Text style={styles.nameTxt} numberOfLines={1}>{name}</Text>
      <Text style={styles.priceTxt}>{`${price} SAR`}</Text>
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    imageContainer: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10, },
        shadowRadius: 15,
        shadowOpacity: 0.1,
        width: width / 2 - 30,
        borderRadius: 15,
        elevation: 4,
        marginBottom: 15,
        minHeight: 150,
    },
    nameTxt: {
        color: '#A9A9B0',
        marginLeft: 10,
        marginBottom: 10,
        width: 140
    },
    priceTxt: {
        fontWeight: "600",
        marginLeft: 10,
        color: '#3B3B3B'
    }
})

export default ProductCard;
