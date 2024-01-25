import React, { useContext } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { styles } from "./styles";
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
          marginBottom: 63,
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

export default AllProducts;
