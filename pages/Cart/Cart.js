import React, { useContext} from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GlobalContext } from "../../Context/GlobalStates";
import Icon2 from "react-native-vector-icons/FontAwesome";
import Button from "../../components/Button";

function Cart() {
  const navigation = useNavigation();
  const { addToCart, setAddToCart } = useContext(GlobalContext);
  const colors = ["#ffa985", "#70dc70", "#f6e3bd", "#9ae7ff"];
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };
  const DestroyToCart = (item) => {
    console.log("Ürün siliniyor");
    setAddToCart((prevCart) => {
      return prevCart.filter((cartItem) => cartItem.id !== item.id);
    });
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#F0F8FF" }}>
      {addToCart && addToCart.length > 0 ? (
        <>
          <FlatList
            data={addToCart}
            renderItem={({ item }) => (
              <View
                style={[styles.cartItem, { backgroundColor: getRandomColor() }]}
              >
                <Image
                  source={{ uri: item.url }}
                  style={styles.itemImage}
                  resizeMode="contain"
                />
                <View>
                  <View style={styles.cartInformations}>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View style={{ flex: 1 }}>
                        <Text
                          style={{ fontSize: 18, fontWeight: "600" }}
                          numberOfLines={3}
                          ellipsizeMode="tail"
                        >
                          {item.name}
                        </Text>
                      </View>

                      <Icon2
                        name="times-circle-o"
                        size={24}
                        onPress={() => DestroyToCart(item)}
                      />
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 15 }}>
                      <View>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: "700",
                            color: "#1F51FF",
                          }}
                        >
                           {new Intl.NumberFormat("tr-TR", {
                    style: "currency",
                    currency: "TRY",
                  }).format(Number(item.price))}
                        </Text>
                      </View>
                      <View style={{ flexDirection: "row", marginLeft: 50 }}>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: "700",
                            color: "#1F51FF",
                          }}
                        >
                          Miktar:
                        </Text>
                        <Text
                          style={{
                            marginLeft: 5,
                            fontSize: 16,
                            fontWeight: "700",
                            color: "#1F51FF",
                          }}
                        >
                          {item.quantity}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            )}
          />
          <View style={{ flex: 1, marginBottom: 90 }}>
            <View style={{ marginHorizontal: 5 }}>
              <View style={styles.priceStyle}>
                <Text style={styles.priceText}>Tutar</Text>
                <Text style={styles.priceText}>100TL</Text>
              </View>
              <View style={{ borderBottomWidth: 1, borderColor: "#B6D0E2" }}>
                <View
                  style={{
                    flexDirection: "row",
                    padding: 15,
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={styles.priceText}>KDV</Text>
                  <Text style={styles.priceText}>100TL</Text>
                </View>
              </View>
              <View style={styles.priceStyle}>
                <Text style={styles.priceText}>Toplam</Text>
                <Text style={{ fontSize: 20, fontWeight: "600" }}>100 TL</Text>
              </View>
              <View style = {{marginTop:10}}>
                <Button
                  text={"Siparişi Tamamla"}
                  backgroundColor={"#0F52BA"}
                  color={"white"}
                  borderRadius={5}
                  fontSize={16}
                  onPress={() => navigation.navigate("DeliveryInformations")}
                />
              </View>
            </View>
          </View>
        </>
      ) : (
        <View style={{ alignItems: "center" }}>
          <Image
            source={{ uri: "https://iticsystem.com/img/empty-cart.png" }}
            width={300}
            height={300}
            resizeMode="contain"
            style={{ marginTop: 50 }}
          />
          <View style={{ marginTop: 50 }}>
            <Text style={{ fontSize: 20, fontWeight: "700", color: "#ee3a1f" }}>
              Sepetinizde ürün bulunmamakta!
            </Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  cartItem: {
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
  cartInformations: {
    marginLeft: 30,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
  },
  quantityCount: {
    flexDirection: "row",
    marginLeft: 20,
    borderWidth: 1,
    paddingHorizontal: 2,
    paddingVertical: 3,
    borderColor: "#d3d3d3",
    borderRadius: 5,
    alignItems: "center",
  },
  priceStyle: {
    flexDirection: "row",
    borderBottomWidth: 1,
    padding: 15,
    borderColor: "#B6D0E2",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceText: {
    fontSize: 16,
    fontWeight: "500",
  },
});
export default Cart;
