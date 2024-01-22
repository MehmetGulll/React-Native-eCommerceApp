import React, { useContext } from "react";
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
import Icon from "react-native-vector-icons/Feather";

import { useNavigation } from "@react-navigation/native";
import Filter from "../../components/Filter";

function AllProducts() {
  const navigation = useNavigation();
  const { setAddToFavorite } = useContext(GlobalContext);

  const colors = ["#ffa985", "#70dc70", "#f6e3bd", "#9ae7ff"];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#F0F8FF" }}>
      <Filter />
      <FlatList
        contentContainerStyle={{
          justifyContent: "space-between",
          paddingHorizontal: 5,
        }}
        data={data2}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ProductsDetails", { item })}
            style={[
              styles.productsContainer,
              { backgroundColor: getRandomColor() },
            ]}
          >
            <Image
              source={{ uri: item.url }}
              style={styles.itemImage}
              resizeMode="contain"
            />
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
              <TouchableOpacity
                onPress={() =>
                  setAddToFavorite((prevFavorites) => [...prevFavorites, item])
                }
              >
                <Icon name="heart" size={20} style={styles.heartIcon} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
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
  pickerContainer: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 30,
    flex: 1,
  },
  itemImage: {
    width: 150,
    height: 150,
  },
  productsContainer: {
    padding: 15,
    marginTop: 15,
    borderRadius: 12,
    marginHorizontal: 2,
    backgroundColor: "yellow",
    width: "48%",
    alignItems: "center",
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
    marginLeft: 30,
  },
});

export default AllProducts;
