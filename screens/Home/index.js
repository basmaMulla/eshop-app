import React, { useState, useEffect } from 'react';
import { FlatList, ActivityIndicator, View } from "react-native";
import ScrollableTabView, { ScrollableTabBar } from "react-native-scrollable-tab-view";
import { ProductCard } from "../../components";
import { dummyProducts } from "../../dummy";
import axios from 'axios';
import Store from '../../service/store';

function Home({navigation}) {
  const [products, setProducts] = useState(dummyProducts);
  const [categories, setCategories] = useState(['Furniture']);
  const [loading, setLoading] = useState(true);
 
  const fetchData = async () => {
    try {
      const result = await axios('https://fakestoreapi.com/products');
      const response = result.data;
      const categories = [...new Set(response.map(a => a.category))];
      const productsData = response.reduce((acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
      }, {})
      setCategories(prevState => [...prevState, ...categories]);
      setProducts({...products, ...productsData});
      // setCategories(categories);
      // setProducts(productsData);
    } catch( error ) {
      alert('An Error Ocurred!');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    Store.getCachedCart()
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
          data={products[item]}
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

