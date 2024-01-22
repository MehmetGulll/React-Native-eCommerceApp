import React, { useContext, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Button from "../../components/Button";
import { GlobalContext } from "../../Context/GlobalStates";
import { useNavigation } from "@react-navigation/native";

function Like() {
  const { addToFavorite, setAddToCart } = useContext(GlobalContext);
  const navigation = useNavigation();
  console.log(addToFavorite);
  const colors = ["#ffa985", "#70dc70", "#f6e3bd", "#9ae7ff"];
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#F0F8FF" }}>
      {addToFavorite && addToFavorite.length > 0 ? (
        <FlatList
          data={addToFavorite}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.favoriteItem,
                { backgroundColor: getRandomColor() },
              ]}
              onPress={() => navigation.navigate("ProductsDetails", { item })}
            >
              <Image source={{ uri: item.url }} style={styles.itemImage} />
              <View style={{ flex: 1 }}>
                <View style={styles.favoriteInformations}>
                  <Text
                    style={{ fontSize: 18, fontWeight: "600" }}
                    numberOfLines={3}
                    ellipsizeMode="tail"
                  >
                    {item.name}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      marginTop: 10,
                    }}
                  >
                    <Text
                      style={{
                        marginTop: 15,
                        color: "#1F51FF",
                        fontSize: 20,
                        fontWeight: "700",
                      }}
                    >
                      {new Intl.NumberFormat("tr-TR", {
                        style: "currency",
                        currency: "TRY",
                      }).format(Number(item.price))}
                    </Text>
                    <Button
                      text={"Ürünü Gör"}
                      fontSize={16}
                      color={"white"}
                      backgroundColor={"#ee3a1f"}
                      borderRadius={15}
                      onPress={() =>
                        navigation.navigate("ProductsDetails",{item})
                      }
                    />
                  </View>
                </View>
                <View style={{ marginLeft: 100 }}></View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <View style={{ alignItems: "center" }}>
          <Image
            source={{
              uri: "https://i.pinimg.com/originals/49/e5/8d/49e58d5922019b8ec4642a2e2b9291c2.png",
            }}
            width={300}
            height={300}
            style={{ marginTop: 50 }}
          />
          <View style={{ marginTop: 50 }}>
            <Text style={{ fontSize: 20, fontWeight: "700", color: "#ee3a1f" }}>
              Herhangi bir beğeni bulunmamakta!
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
  },
  favoriteItem: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: 20,
    backgroundColor: "#fff",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 3.84,
    elevation: 9,
    borderRadius: 12,
    padding: 8,
  },

  favoriteInformations: {
    marginTop: 15,
    marginLeft: 30,
  },
});
export default Like;
