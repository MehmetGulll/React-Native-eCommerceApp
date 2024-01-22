import React, { useState, useContext, useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { GlobalContext } from "../../Context/GlobalStates";
import Icon from "react-native-vector-icons/AntDesign";
import Button from "../../components/Button";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import Input from "../../components/Input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const windowWidth = Dimensions.get("window").width;

function ProductDetails({ route }) {
  const { item } = route.params;
  const imageUrls = [];
  if (item.url) {
    imageUrls.push(item.url);
  }
  if (item.url2) {
    imageUrls.push(item.url2);
  }
  if (item.url3) {
    imageUrls.push(item.url3);
  }
  console.log(imageUrls);
  const { setAddToCart, setAddToFavorite } = useContext(GlobalContext);
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState("Açıklama");
  const [selectedComment, setSelectedComment] = useState("----");
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const scrollViewRef = useRef();
  const animatedLocation = (location) => {
    scrollViewRef.current.scrollToPosition(0, location, true);
  };

  const plusQuantity = () => {
    setQuantity(quantity + 1);
  };
  const minusQuantity = () => {
    if (quantity <= 1) {
      setQuantity(1);
    } else {
      setQuantity(quantity - 1);
    }
  };
  const handleScroll = (event) => {
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    const contentOffset = event.nativeEvent.contentOffset.x;
    const selectedIndex = Math.floor(contentOffset / viewSize);
    setActiveImageIndex(selectedIndex);
  };
  return (
    <KeyboardAwareScrollView
      ref={scrollViewRef}
      style={{ flex: 1, backgroundColor: "#F0F8FF" }}
    >
      <View>
        <View style={{ flex: 1 }}>
          <Icon
            name="arrowleft"
            size={20}
            color={"#ee3a1f"}
            style={{
              position: "absolute",
              left: 20,
              top: 20,
              zIndex: 1,
              backgroundColor: "#FFF",
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
            }}
            onPress={() => navigation.goBack()}
          />
          <View style={{ flexDirection: "row" }}>
            <Icon
              name={isFavorite ? "heart" : "hearto"}
              size={20}
              color={"red"}
              style={{
                position: "absolute",
                zIndex: 1,
                left: 335,
                top: 15,
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
              }}
              onPress={() => {
                setIsFavorite(!isFavorite);
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
            <Icon
              name="sharealt"
              size={20}
              color={"red"}
              style={{
                position: "absolute",
                zIndex: 1,
                left: 278,
                top: 15,
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
              }}
            />
          </View>

          <ScrollView
            horizontal
            pagingEnabled
            onScroll={handleScroll}
            showsHorizontalScrollIndicator={false}
          >
            {imageUrls.map((url, index) => (
              <Image
                key={index}
                source={{ uri: url }}
                style={styles.itemImage}
                onError={(error) => console.log("Hata", error)}
                resizeMode="contain"
              />
            ))}
          </ScrollView>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            {imageUrls.map((_, index) => (
              <View
                key={index}
                style={{
                  height: 10,
                  width: 10,
                  backgroundColor:
                    index === activeImageIndex ? "#0096FF" : "#D3D3D3",
                  margin: 5,
                  borderRadius: 5,
                }}
              />
            ))}
          </View>
        </View>
        <View style={styles.itemInformations}>
          <View style={styles.itemName}>
            <Text style={{ color: "black", fontSize: 24, fontWeight: "700" }}>
              {item.name}
            </Text>
          </View>
          <View style={styles.quantityContainer}>
            <Text style={{ fontSize: 20 }}>Adet</Text>
            <View style={styles.quantityCount}>
              <Icon
                name="minus"
                size={30}
                style={{ marginRight: 15 }}
                color={"#ee3a1f"}
                onPress={() => minusQuantity()}
              />
              <Text style={{ fontSize: 20, color: "#4c4cff" }}>{quantity}</Text>
              <Icon
                name="plus"
                size={24}
                style={{ marginLeft: 15 }}
                color={"#ee3a1f"}
                onPress={() => plusQuantity()}
              />
            </View>
          </View>
          <View style={styles.itemPriceAddToCart}>
            <Text style={{ fontSize: 24, color: "#ee3a1f", fontWeight: "700" }}>
              {new Intl.NumberFormat("tr-TR", {
                style: "currency",
                currency: "TRY",
              }).format(Number(item.price))}
            </Text>
            <Button
              text={"Sepete Ekle"}
              backgroundColor={"#ee3a1f"}
              borderBottomLeftRadius={35}
              borderTopLeftRadius={35}
              color={"white"}
              fontSize={20}
              onPress={() =>
                setAddToCart((prevCart) => {
                  const existingItem = prevCart.find(
                    (cartItem) => cartItem.id === item.id
                  );
                  if (existingItem) {
                    return prevCart.map((cartItem) =>
                      cartItem.id === item.id
                        ? {
                            ...cartItem,
                            quantity: cartItem.quantity + quantity,
                          }
                        : cartItem
                    );
                  } else {
                    return [...prevCart, { ...item, quantity }];
                  }
                })
              }
            />
          </View>
          <View style={styles.itemFeatures}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View
                style={{
                  backgroundColor:
                    activeTab === "Açıklama" ? "#ee3a1f" : "#FFF",
                }}
              >
                <Text
                  style={[
                    styles.itemFeatureLabel,
                    { color: activeTab === "Açıklama" ? "#FFF" : "#000" },
                  ]}
                  onPress={() => {
                    setActiveTab("Açıklama"), animatedLocation(500);
                  }}
                >
                  Açıklama
                </Text>
              </View>
              <View
                style={{
                  backgroundColor:
                    activeTab === "Özellikler" ? "#ee3a1f" : "#FFF",
                }}
              >
                <Text
                  style={[
                    styles.itemFeatureLabel,
                    { color: activeTab === "Özellikler" ? "#FFF" : "#000" },
                  ]}
                  onPress={() => {
                    setActiveTab("Özellikler"), animatedLocation(500);
                  }}
                >
                  Özellikler
                </Text>
              </View>
              <View
                style={{
                  backgroundColor:
                    activeTab === "Yorumlar" ? "#ee3a1f" : "#FFF",
                }}
              >
                <Text
                  style={[
                    styles.itemFeatureLabel,
                    { color: activeTab === "Yorumlar" ? "#FFF" : "#000" },
                  ]}
                  onPress={() => {
                    setActiveTab("Yorumlar"), animatedLocation(500);
                  }}
                >
                  Yorumlar
                </Text>
              </View>
              <View
                style={{
                  backgroundColor:
                    activeTab === "Ürün Etiketleri" ? "#ee3a1f" : "#FFF",
                }}
              >
                <Text
                  style={[
                    styles.itemFeatureLabel,
                    {
                      color: activeTab === "Ürün Etiketleri" ? "#FFF" : "#000",
                    },
                  ]}
                  onPress={() => {
                    setActiveTab("Ürün Etiketleri"), animatedLocation(500);
                  }}
                >
                  Ürün Etiketleri
                </Text>
              </View>
              <View
                style={{
                  backgroundColor:
                    activeTab === "Taksitler" ? "#ee3a1f" : "#FFF",
                }}
              >
                <Text
                  style={[
                    styles.itemFeatureLabel,
                    { color: activeTab === "Taksitler" ? "#FFF" : "#000" },
                  ]}
                  onPress={() => {
                    setActiveTab("Taksitler"), animatedLocation(500);
                  }}
                >
                  Taksitler
                </Text>
              </View>
            </View>
            <View>
              {activeTab === "Açıklama" && (
                <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                  <Text style={{ fontWeight: "700" }}>{item.name}</Text>
                </View>
              )}
              {activeTab === "Özellikler" && (
                <View style={{ alignItems: "center", marginTop: 10 }}>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontWeight: "700", fontSize: 20 }}>
                      Beden: {item.body}
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontWeight: "700", fontSize: 20 }}>
                      Renk:{item.color}
                    </Text>
                  </View>
                </View>
              )}
              {activeTab === "Yorumlar" && (
                <View>
                  <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                    <Text style={{ fontSize: 20 }}>Yorum Yapın</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "column",
                      marginHorizontal: 15,
                      marginTop: 10,
                      gap: 5,
                    }}
                  >
                    <Text>Değerlendirmeniz</Text>
                    <View
                      style={{
                        borderWidth: 1,
                        borderRadius: 12,
                        borderColor: "#d3d3d3",
                      }}
                    >
                      <Picker
                        selectedValue={selectedComment}
                        onValueChange={(itemValue, itemIndex) =>
                          setSelectedComment(itemValue)
                        }
                      >
                        <Picker.Item label="Mükemmel" value="mukemmel" />
                        <Picker.Item label="Çok İyi " value="cok_iyi" />
                        <Picker.Item label="İyi" value="iyi" />
                        <Picker.Item label="Fena Değil" value="fena_degil" />
                        <Picker.Item label="Kötü" value="kotu" />
                      </Picker>
                    </View>
                  </View>
                  <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                    <Text>Yorum Başlığı Giriniz 100</Text>
                    <Input placeholder={""} borderWidth={1} />
                  </View>
                  <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                    <Text>Yorumunuzu Yazınız 1000</Text>
                    <Input placeholder={""} borderWidth={1} />
                    <View style={{ marginTop: 10 }}>
                      <Button
                        text={"Yorumu Kaydet"}
                        backgroundColor={"#ee3a1f"}
                        color={"#FFF"}
                        borderRadius={15}
                      />
                    </View>
                  </View>
                </View>
              )}
              {activeTab === "Taksitler" && (
                <View style={{ marginTop: 15 }}>
                  <View style={{ marginHorizontal: 60 }}>
                    <Image
                      source={{
                        uri: "https://cdnuploads.aa.com.tr/uploads/sirkethaberleri/Contents/2018/11/30/thumbs_b_c_eee85060d5e32db6d1bb1e2da1ca285e.jpg",
                      }}
                      height={150}
                    />
                    <View
                      style={{
                        flexDirection: "column",
                        gap: 5,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>Tek Çekim</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>
                            1550 x 1 = 1550
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>2 Taksit</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>
                            1550 x 1 = 1550
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>3 Taksit</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>
                            1550 x 1 = 1550
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>4 Taksit</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>
                            1550 x 1 = 1550
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>5 Taksit</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>
                            1550 x 1 = 1550
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>6 Taksit</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>
                            1550 x 1 = 1550
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={{ marginHorizontal: 60, marginTop: 10 }}>
                    <Image
                      source={{
                        uri: "https://www.worldcard.com.tr/medium/General-Image-5888-5888-2x.vsf",
                      }}
                      resizeMode="contain"
                      height={150}
                    />
                    <View
                      style={{
                        flexDirection: "column",
                        gap: 5,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>Tek Çekim</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>
                            1550 x 1 = 1550
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>2 Taksit</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>
                            1550 x 1 = 1550
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>3 Taksit</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>
                            1550 x 1 = 1550
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>4 Taksit</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>
                            1550 x 1 = 1550
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>5 Taksit</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>
                            1550 x 1 = 1550
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>6 Taksit</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>
                            1550 x 1 = 1550
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={{ marginHorizontal: 60, marginTop: 10 }}>
                    <Image
                      source={{
                        uri: "https://www.qnbfinansbank.com/medium/GalleryImage-Image-172-2x.vsf",
                      }}
                      resizeMode="contain"
                      height={150}
                    />
                    <View
                      style={{
                        flexDirection: "column",
                        gap: 5,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>Tek Çekim</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>
                            1550 x 1 = 1550
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>2 Taksit</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>
                            1550 x 1 = 1550
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>3 Taksit</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>
                            1550 x 1 = 1550
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>4 Taksit</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>
                            1550 x 1 = 1550
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>5 Taksit</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>
                            1550 x 1 = 1550
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>6 Taksit</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>
                            1550 x 1 = 1550
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={{ marginHorizontal: 60, marginTop: 10 }}>
                    <Image
                      source={{
                        uri: "https://www.halkbank.com.tr/content/dam/halkbank/tr/gorseller/bankam%C4%B1z/logolarimiz/hblogoerkek.jpg",
                      }}
                      resizeMode="contain"
                      height={150}
                    />
                    <View
                      style={{
                        flexDirection: "column",
                        gap: 5,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>Tek Çekim</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>
                            1550 x 1 = 1550
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>2 Taksit</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>
                            1550 x 1 = 1550
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>3 Taksit</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>
                            1550 x 1 = 1550
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>4 Taksit</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>
                            1550 x 1 = 1550
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>5 Taksit</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>
                            1550 x 1 = 1550
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>6 Taksit</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>
                            1550 x 1 = 1550
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={{ marginHorizontal: 60, marginTop: 10 }}>
                    <Image
                      source={{
                        uri: "https://cdnuploads.aa.com.tr/uploads/sirkethaberleri/Contents/2017/02/02/thumbs_b_c_1ad5745d7d8c5389abf1e57f542c8d34.jpg",
                      }}
                      resizeMode="contain"
                      height={150}
                    />
                    <View
                      style={{
                        flexDirection: "column",
                        gap: 5,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>Tek Çekim</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>
                            1550 x 1 = 1550
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>2 Taksit</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>
                            1550 x 1 = 1550
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>3 Taksit</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>
                            1550 x 1 = 1550
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>4 Taksit</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>
                            1550 x 1 = 1550
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>5 Taksit</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>
                            1550 x 1 = 1550
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>6 Taksit</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>
                            1550 x 1 = 1550
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={{ marginHorizontal: 60, marginTop: 10 }}>
                    <Image
                      source={{
                        uri: "https://seeklogo.com/images/T/turkiye-is-bankasi-logo-C5058B05BF-seeklogo.com.png",
                      }}
                      resizeMode="contain"
                      height={150}
                    />
                    <View
                      style={{
                        flexDirection: "column",
                        gap: 5,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>Tek Çekim</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>
                            1550 x 1 = 1550
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>2 Taksit</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>
                            1550 x 1 = 1550
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>3 Taksit</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>
                            1550 x 1 = 1550
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>4 Taksit</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>
                            1550 x 1 = 1550
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>5 Taksit</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>
                            1550 x 1 = 1550
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>6 Taksit</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.installmentText}>
                            1550 x 1 = 1550
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              )}
            </View>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  itemImage: {
    width: windowWidth,
    height: 380,
  },
  itemInformations: {
    backgroundColor: "white",
    borderRadius: 12,
    marginTop: 12,
  },
  itemName: {
    alignItems: "center",
    marginHorizontal: 15,
    marginTop: 15,
  },
  itemDescription: {
    alignItems: "center",
    marginHorizontal: 15,
    marginTop: 15,
  },
  quantityContainer: {
    flexDirection: "row",
    marginHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
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
  itemPriceAddToCart: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 15,
    marginTop: 20,
    marginBottom: 30,
  },
  itemFeatures: {
    marginBottom: 70,
  },
  itemFeatureLabel: {
    borderWidth: 1,
    padding: 5,
    borderColor: "#ee3a1f",
    borderRadius: 5,
    fontWeight: "500",
  },
  installmentText: {
    borderWidth: 1,
    padding: 5,
  },
});
export default ProductDetails;
