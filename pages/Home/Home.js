import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { data2 } from "../../Data/Data";
import { GlobalContext } from "../../Context/GlobalStates";
import Icon from "react-native-vector-icons/AntDesign";
import Swiper from "react-native-swiper";
import { useNavigation } from "@react-navigation/native";
import Filter from "../../components/Filter";

function Home() {
  const [favoriteItems, setFavoriteItems] = useState(false);

  const navigation = useNavigation();
  const { setAddToFavorite } = useContext(GlobalContext);

  const data = [
    { id: 1, name: "Ayakkabı" },
    { id: 2, name: "Tişört" },
    { id: 3, name: "Aksesuar" },
    { id: 4, name: "Kozmetik" },
    { id: 5, name: "Spor" },
    { id: 6, name: "Gömlek" },
    { id: 7, name: "Pantolon" },
    { id: 8, name: "Mont" },
    { id: 9, name: "Şort" },
  ];

  const colors = ["#ffa985", "#70dc70", "#f6e3bd", "#9ae7ff"];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#F0F8FF" }}>
      <Filter />

      <Swiper
        showsButtons={false}
        style={styles.wrapper}
        paginationStyle={{ bottom: -15 }}
      >
        <View style={styles.slide}>
          <Image
            source={{
              uri: "https://www.hermosoft.com/images/hermosoft-web-designing-dubai-slider-2.jpg",
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={{
              uri: "https://img.freepik.com/premium-vector/modern-sale-banner-website-slider-template-design_54925-45.jpg",
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={{
              uri: "https://img.freepik.com/premium-vector/modern-sale-banner-website-slider-template-design_54925-49.jpg",
            }}
            style={styles.image}
          />
        </View>
      </Swiper>
      <FlatList
        contentContainerStyle={{ paddingBottom: 10 }}
        data={data}
        renderItem={({ item }) => (
          <View style={styles.categoryNames}>
            <Text style={{ fontWeight: "600", fontSize: 16 }}>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <View
        style={{
          marginHorizontal: 15,
          marginTop: 15,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "500", fontSize: 20 }}>Fırsat Ürünleri</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("OpportunityProducts")}
        >
          <Text style> Hepsini gör</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        contentContainerStyle={{
          justifyContent: "space-between",
          paddingHorizontal: 5,
        }}
        data={data2}
        renderItem={({ item }) => {
          const isFavorite = favoriteItems[item.id];

          return (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.productsContainer,
                { backgroundColor: getRandomColor() },
              ]}
              onPress={() => navigation.navigate("ProductsDetails", { item })}
            >
              <Image source={{ uri: item.url }} style={styles.itemImage} />

              <Text
                style={{ marginTop: 15, fontWeight: "400" }}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                {item.name}
              </Text>
              <View
                style={{
                  marginTop: 5,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontWeight: "700", fontSize: 16 }}>
                  {new Intl.NumberFormat("tr-TR", {
                    style: "currency",
                    currency: "TRY",
                  }).format(Number(item.price))}
                </Text>
                <Icon
                  name={isFavorite ? "heart" : "hearto"}
                  size={20}
                  color={"red"}
                  style={{
                    backgroundColor: "#fff",
                    shadowColor: "#000000",
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.7,
                    shadowRadius: 3.84,
                    elevation: 9,
                    borderRadius: 50,
                    padding: 10,
                    marginLeft: 30,
                  }}
                  onPress={() => {
                    setFavoriteItems((prevFavoriteItems) => ({
                      ...prevFavoriteItems,
                      [item.id]: !isFavorite,
                    }));
                    setAddToFavorite((prevFavorite) => {
                      if (isFavorite) {
                        return prevFavorite.filter(
                          (favoriteItem) => favoriteItem.id !== item.id
                        );
                      } else {
                        return [...prevFavorite, item];
                      }
                    });
                  }}
                />
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />

      <View
        style={{
          marginHorizontal: 15,
          marginTop: 15,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "500", fontSize: 20 }}>Yeni Ürünler</Text>
        <Text onPress={() => navigation.navigate("NewProducts")}>
          {" "}
          Hepsini gör
        </Text>
      </View>
      <FlatList
        contentContainerStyle={{
          justifyContent: "space-between",
          paddingHorizontal: 5,
          marginBottom: 63,
        }}
        data={data2}
        renderItem={({ item }) => {
          const isFavorite = favoriteItems[item.id];

          return (
            <TouchableOpacity
              style={[
                styles.productsContainer,
                { backgroundColor: getRandomColor() },
              ]}
              onPress={() => navigation.navigate("ProductsDetails", { item })}
            >
              <Image source={{ uri: item.url }} style={styles.itemImage} />

              <Text
                style={{ marginTop: 15, fontWeight: "400" }}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                {item.name}
              </Text>

              <View
                style={{
                  marginTop: 5,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontWeight: "700", fontSize: 16 }}>
                  {new Intl.NumberFormat("tr-TR", {
                    style: "currency",
                    currency: "TRY",
                  }).format(Number(item.price))}
                </Text>
                <Icon
                  name={isFavorite ? "heart" : "hearto"}
                  size={20}
                  color={"red"}
                  style={{
                    backgroundColor: "#fff",
                    shadowColor: "#000000",
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.7,
                    shadowRadius: 3.84,
                    elevation: 9,
                    borderRadius: 50,
                    padding: 10,
                    marginLeft: 30,
                  }}
                  onPress={() => {
                    setFavoriteItems((prevFavoriteItems) => ({
                      ...prevFavoriteItems,
                      [item.id]: !isFavorite,
                    }));
                    setAddToFavorite((prevFavorite) => {
                      if (isFavorite) {
                        return prevFavorite.filter(
                          (favoriteItem) => favoriteItem.id !== item.id
                        );
                      } else {
                        return [...prevFavorite, item];
                      }
                    });
                  }}
                />
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    width: "100%",
    marginTop: 25,
  },
  searchInput: {
    backgroundColor: "#fff",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 3.84,
    elevation: 9,
  },
  slide: {
    marginHorizontal: 15,
  },
  wrapper: {
    marginTop: 35,
    height: 200,
  },
  image: {
    aspectRatio: 1.8,
    borderRadius: 8,
    resizeMode: "cover",
  },
  categoryNames: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 9,
    marginTop: 40,
    marginHorizontal: 15,
    padding: 15,
    borderRadius: 12,
  },
  itemImage: {
    width: 150,
    height: 150,
    resizeMode: "cover",
  },
  productsContainer: {
    padding: 15,
    marginTop: 15,
    borderRadius: 12,
    marginHorizontal: 2,
    backgroundColor: "yellow",
    alignItems: "center",
    width: "48%",
  },
  heartIcon: {
    backgroundColor: "#a6a4a4",
    borderRadius: 50,
    padding: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 9,
  },
  pickerContainer: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 30,
    flex: 1,
  },
});

export default Home;
