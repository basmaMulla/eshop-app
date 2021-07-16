import React from "react";
import { View, ScrollView, Image, Text, Dimensions, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import { Button } from "../../components";
import Store from '../../service/store';

function ProductDetails ({ route }) { 
  const { item  } = route.params;
  return (
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
        source={{ uri: item.image }}
      />
    </Swiper>
    <View style={styles.dataContainer}>
      <Text style={styles.timeLocation}>{item.category}</Text>
      <View style={styles.namePrice}>
        <Text style={styles.namePriceText}>{item.title}</Text>
        <Text style={styles.namePriceText}>{item.price} SAR</Text>
      </View>
      <View style={styles.divider} />
      <Text style={styles.description}>
        {item.description}
      </Text>
    </View>
    <View style={{alignItems: 'center'}}>
      <Button 
        transparent={false} color="#118DF0" style={{width: '70%'}} 
        onPress={() => Store.addToCart(item)}
      >
        <Text style={{color: 'white'}}>ADD TO CART</Text>
      </Button>
    </View>
  </ScrollView>
)};

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
    fontSize: 18,
    color: "#3B3B3B",
    fontWeight: "600",
    maxWidth: width/2 + 15
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

