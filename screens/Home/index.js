import React from "react";
import { FlatList } from "react-native";
import ScrollableTabView, { ScrollableTabBar } from "react-native-scrollable-tab-view";
import { ProductCard } from "../../components";

const Categories = Array(5).fill(0).map((item, index) => ({
  title: `Category #${index + 1}`,
}));

const productData = Array(5).fill(0).map((item, index) => ({
  title: `Product #${index + 1}`,
  url: "https://i.pinimg.com/564x/c4/85/18/c48518a3605711c48db1f04039815702.jpg",
  price: 89,
}));


function Home({navigation}) {
  return (
    <ScrollableTabView 
      renderTabBar={() => 
        <ScrollableTabBar activeTextColor="#118DF0" underlineStyle={{backgroundColor: '#118DF0', height: 2}} />
      }
      style={{backgroundColor: 'white'}} initialPage={0} 
    >
      {Categories.map((item, index) => 
        <FlatList
          key={index}
          tabLabel={item.title}
          data={productData}
          style={{ paddingTop: 15, paddingHorizontal: 20 }}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => { return (
            <ProductCard 
              imgSrc={item.url} 
              name={item.title} 
              price={item.price} 
              onPress={() => navigation.navigate("ProductDetails")}
            />
          )}}
        />
      )}
    </ScrollableTabView>
  );
}
export default Home;

