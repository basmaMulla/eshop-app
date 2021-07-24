import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator, View } from "react-native";
import ScrollableTabView, { ScrollableTabBar } from "react-native-scrollable-tab-view";
import { ProductCard } from "../../components";
import Store from '../../service/store';
import axios from 'axios';
import { dummyProducts } from "../../dummy";

function Home({navigation}) {
  const [products, setProducts] = useState(dummyProducts);
  const [categories, setCategories] = useState(['Furniture']);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const fetchCategories = await axios('https://fakestoreapi.com/products/categories');
      const fetchProducts = await axios('https://fakestoreapi.com/products');
      const categories = fetchCategories.data;
      const products = fetchProducts.data;
      setCategories(prevState => [...prevState, ...categories]);
      setProducts(prevState => [...prevState, ...products]);
      // setCategories(categories);
      // setProducts(products);
    } catch( error ) {
      alert('An Error Ocurred!');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    Store.getCachedCart();
    fetchData();
  }, []);
  
  if(loading) return (
    <View style={{flex: 1, backgroundColor: "white", justifyContent: 'center'}}>
      <ActivityIndicator color={'#118DF0'} size="small" />
    </View>
  );

  return ( 
    <ScrollableTabView 
      renderTabBar={() => 
        <ScrollableTabBar activeTextColor="#118DF0" underlineStyle={{backgroundColor: '#118DF0', height: 2}} />
      }
      tabBarTextStyle={{textTransform: 'capitalize'}}
      style={{backgroundColor: 'white'}} initialPage={0} 
    >
      {categories.map((item, index) => 
        <FlatList
          key={index}
          tabLabel={item}
          data={products.filter((product => product.category === item))}
          style={{ paddingTop: 15, paddingHorizontal: 20 }}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => { return (
            <ProductCard 
              imgSrc={item.image} 
              name={item.title} 
              price={item.price} 
              onPress={() => navigation.navigate("ProductDetails", {item})}
            />
          )}}
        />
      )}
    </ScrollableTabView>
  );
}
export default Home;

