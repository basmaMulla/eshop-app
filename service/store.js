import { makeAutoObservable } from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Store {
  cart = [];
  cartCount = 0;
  isLogin = false;

  constructor() {
    makeAutoObservable(this)
  }
  
  setCart(data) {
    this.cart = data;
  }

  setCartCount(count) {
    this.cartCount += count;
  }

  setIsLogin(value) {
    this.isLogin = value;
  }

  addToCart(data) {
    const itemId = data.id;
    let existData = this.cart.find((x) => x.id === itemId);
    if (existData) {
      existData.quantity += 1;
    } else {
      data.quantity = 1;
      this.cart.push(data);
    }
    this.setCartCount(1);
    this.setCacheCart(this.cart, this.cartCount);
  }

  updateCartItem(i, increment) {
    if (increment) {
      this.cart[i].quantity += 1;
      this.setCartCount(1);
    }
    if (!increment && this.cart[i].quantity > 1) {
      this.cart[i].quantity -= 1;
      this.decrementCartCount(1);
    }
    this.setCacheCart(this.cart, this.cartCount);
  }
  
  decrementCartCount(count) {
    this.cartCount -= count;
  }

  removeCartItem(index) {
    this.setCartCount(-this.cart[index].quantity);
    this.cart.splice(index, 1);
    this.setCacheCart(this.cart, this.cartCount);
  }

  clearCart() {
    this.cart = [];
    this.cartCount = 0;
    this.setCacheCart([], 0);
  }

  setCacheCart(cart, cartCount) {
    AsyncStorage.setItem('@cart', JSON.stringify(cart));
    AsyncStorage.setItem('@cartCount', cartCount.toString());
  }

  getCachedCart() {
    AsyncStorage.multiGet(['@cart', '@cartCount']).then(data => {
      if (data[0][1]) this.setCart(JSON.parse(data[0][1]));
      if (data[1][1]) this.setCartCount(parseInt(data[1][1]));
    }).catch();
  }

  getTotalPrice() {
    return this.cart.map(x => {
        return x.price * x.quantity
    }).reduce((a, b) => a + b, 0)
  }
}

export default new Store();
