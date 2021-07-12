import React from "react";
import { View, ScrollView, Image, Text, Dimensions, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import { Button } from "../../components";

const ProductDetails = () => (
  <ScrollView contentContainerStyle={{ paddingBottom: 40 }} bounces={false}>
    <Swiper
      containerStyle={styles.slider}
      dotStyle={{ transform : [ { scaleX : 0.5 } ] }}
      activeDotStyle={{ transform : [ { scaleX : 0.5 } ] }}
      activeDotColor="white"
      dotColor="rgba(255, 255, 255, 0.3)"
    >
      <Image
        style={styles.image}
        source={{ uri:"https://i.pinimg.com/564x/8f/27/44/8f27446e4f69541cb465e50b93dae15e.jpg" }}
      />
      <Image
        style={styles.image}
        source={{ uri: "https://i.pinimg.com/564x/6e/90/41/6e90412772257e9d16b18f6449d0b141.jpg" }}
      />
    </Swiper>
    <View style={styles.dataContainer}>
      <Text style={styles.timeLocation}>Watches</Text>
      <View style={styles.namePrice}>
        <Text style={styles.namePriceText}>MVMTH Watch</Text>
        <Text style={styles.namePriceText}>49 SAR</Text>
      </View>
      <View style={styles.divider} />
      <Text style={styles.description}>
        Selling my 2017 DJI Spark. Barely used, pretty new in condition and its the “Fly More Combo". zz
      </Text>
    </View>
    <View style={{alignItems: 'center'}}>
      <Button transparent={false} color="#118DF0" style={{width: '70%'}}>
        <Text style={{color: 'white'}}>ADD TO CART</Text>
      </Button>
    </View>
  </ScrollView>
);

export default ProductDetails;


const { width, height } = Dimensions.get("screen");

const getHeight = () => height <= 667 ? height / 2.8 : height / 2.3;

const styles = StyleSheet.create({
  slider: {
    height: getHeight(), marginBottom: 20,
    transform : [ { scaleX : 2 } ],
    borderBottomStartRadius : 200,
    borderBottomEndRadius : 200,
    overflow : 'hidden',
  },
  image: {
    width: width,
    height: getHeight(),
    position: 'relative',
    transform : [ { scaleX : 0.5 } ],
  },
  dataContainer: {
    paddingHorizontal: 20,
  },
  timeLocation: {
    color: "#A9A9B0",
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 10
  },
  namePrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  namePriceText: {
    fontSize: 24,
    color: "#3B3B3B",
    fontWeight: "600"
  },
  divider: {
    width: '100%',
    height: 2,
    backgroundColor: "rgba(151, 151, 151, 0.1)",
    marginBottom: 25
  },
  description: {
    marginBottom: 25,
    color: "#A9A9B0",
  },
  readMore: {
    color: "#3B3B3B",
    marginBottom: 40,
  }
})

