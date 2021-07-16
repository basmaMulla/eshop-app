import React, {useState} from "react";
import { StyleSheet, FlatList, View, Dimensions, Text, ActivityIndicator } from "react-native";
import { CartItem, Button } from "../../components";
import Store from '../../service/store';
import { observer } from 'mobx-react';
import { FontAwesome5 } from '@expo/vector-icons';
import axios from "axios";

const Cart = observer(({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const Checkout = () => {
    setLoading(true);
    const products = Store.cart.map(item => ({ productId: item.id, quantity: item.quantity }));
    axios.post('https://fakestoreapi.com/carts', {products}).then(res => {
      const response = res.data;
      if(response.id){
        Store.clear();
        navigation.navigate("OrderSuccess");
      } else {
        alert('An Error Ocurred!');
      }
    }).catch(err => {
      alert('An Error Ocurred!');
    }).finally(() => {
      setLoading(false);
    });
  }

  if(!Store.cart.length) return (
    <View style={styles.container}>
      <FontAwesome5 name="sad-tear" size={90} color="#118DF0" />
      <Text style={styles.txt}>Your Cart is Empty</Text>
    </View>
  );

  return(
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <FlatList
        data={Store.cart}
        style={{ paddingTop: 15, paddingHorizontal: 25, marginBottom: 220 }}
        contentContainerStyle={{paddingBottom: 15}}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => 
          <CartItem 
            item={item}
            onPress={() => navigation.navigate("ProductDetails")}
            onIncrement={() => Store.updateCartItem(index, true)}
            onDecrement={() => Store.updateCartItem(index, false)}
            removeItem={() => Store.removeCartItem(index)}
          />
        }
      />
      <View style={[styles.summaryContainer, styles.shadow]}>
        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>Subtotal</Text>
          <Text style={styles.price}>{Store.getTotalPrice().toFixed(2)} SAR</Text>
        </View>
        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>Tax</Text>
          <Text style={styles.price}>0.00 SAR</Text>
        </View>
        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>Discount</Text>
          <Text style={styles.price}>0.00 SAR</Text>
        </View>
        <View style={styles.priceRow}>
          <Text style={styles.totalPriceLabel}>TOTAL</Text>
          <Text style={[styles.price, {fontSize: 17}]}>{Store.getTotalPrice().toFixed(2)} SAR</Text>
        </View>
        <Button 
          transparent={false} color="white" 
          style={{width: '100%', alignSelf: 'center', paddingTop: 10}}
          onPress={Checkout}
          disabled={loading}
        >
          {loading?
            <ActivityIndicator color={'black'} size="small" />
            :
            <Text style={{color: 'black', paddingRight: 10}}>CHECKOUT</Text>
          }
        </Button>
      </View>
    </View>
  );
})

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
  },
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
});
