import React from "react";
import { StyleSheet, FlatList, View, Dimensions, Text } from "react-native";
import { CartItem, Button } from "../../components";

const productData = Array(5).fill(0).map((item, index) => ({
    title: `Product #${index + 1}`,
    url: "https://i.pinimg.com/564x/c4/85/18/c48518a3605711c48db1f04039815702.jpg",
    price: 89,
}));


function Cart({ navigation }) {
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <FlatList
        data={productData}
        style={{ paddingTop: 15, paddingHorizontal: 25, marginBottom: 220 }}
        contentContainerStyle={{paddingBottom: 15}}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => { return (
          <CartItem 
            imgSrc={item.url} 
            name={item.title} 
            price={item.price} 
            onPress={() => navigation.navigate("ProductDetails")}
          />
        )}}
      />
      <View style={[styles.summaryContainer, styles.shadow]}>
        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>Subtotal</Text>
          <Text style={styles.price}>96.00 SAR</Text>
        </View>
        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>Tax</Text>
          <Text style={styles.price}>2.00 SAR</Text>
        </View>
        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>Discount</Text>
          <Text style={styles.price}>0.00 SAR</Text>
        </View>
        <View style={styles.priceRow}>
          <Text style={styles.totalPriceLabel}>TOTAL</Text>
          <Text style={[styles.price, {fontSize: 17}]}>96.00 SAR</Text>
        </View>
        <Button 
          transparent={false} color="white" 
          style={{width: '100%', alignSelf: 'center', paddingTop: 10}}
          onPress={() => navigation.navigate('OrderSuccess')}
        >
          <Text style={{color: 'black', paddingRight: 10}}>CHECKOUT</Text>
        </Button>
      </View>
    </View>
  );
}
export default Cart;

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  summaryContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#118DF0',
    height: 220,
    width: width,
    flex: 1,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    justifyContent: 'flex-start',
    paddingVertical: 20,
    paddingHorizontal: 35
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingBottom: 10
  },
  price: {
    color: 'white',
    fontWeight: '700',
  },
  priceLabel: {
    color: 'white',
    fontWeight: '400',
    opacity: 0.7,
    fontSize: 16
  },
  totalPriceLabel: {
    color: 'white',
    opacity: 0.9, 
    fontWeight: '600',
    fontSize: 17
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 10,
    },
    shadowRadius: 15,
    shadowOpacity: 0.1,
  }
});
