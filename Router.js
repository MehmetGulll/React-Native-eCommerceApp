import React, { useContext, useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Text,
  Animated,
  Image,
  ScrollView,
} from "react-native";
import "react-native-gesture-handler";
import {
  NavigationContainer,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RNPickerSelect from "react-native-picker-select";
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GlobalProvider } from "./Context/GlobalStates";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Entypo";
import Icon3 from "react-native-vector-icons/Ionicons";
import Like from "./pages/Like/Like";
import Cart from "./pages/Cart/Cart";
import AllProducts from "./pages/Shop/AllProducts";
import ProductDetails from "./pages/Shop/ProductDetails";
import DeliveryInformations from "./pages/Payment/DeliveryInformations";
import PaymentInformations from "./pages/Payment/PaymentInformations";
import { GlobalContext } from "./Context/GlobalStates";
import Input from "./components/Input";
import DateTimePicker from "@react-native-community/datetimepicker";
import Button from "./components/Button";
import * as Animatable from "react-native-animatable";
import OpportunityProducts from "./pages/Shop/OpportunityProducts";
import NewProducts from "./pages/Shop/NewProducts";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabButton = (props) => {
  const { onPress, accessibilityState, iconName } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({
        0: { scale: 0.5, rotate: "0deg" },
        1: { scale: 1.5, rotate: "360deg" },
      });
    } else {
      viewRef.current.animate({
        0: { scale: 0.5, rotate: "360deg" },
        1: { scale: 1.5, rotate: "0deg" },
      });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      style={styles.tabBarContainer}
      onPress={onPress}
      activeOpacity={1}
    >
      <Animatable.View
        style={styles.tabBarContainer}
        ref={viewRef}
        duration={1000}
      >
        <Icon3
          name={iconName}
          size={24}
          color={focused ? "#ee3a1f" : "#B6D0E2"}
        />
      </Animatable.View>
    </TouchableOpacity>
  );
};

function BottomTabNavigator() {
  const { addToCart } = useContext(GlobalContext);
  const shakeAnimation = useRef(new Animated.Value(0)).current;
  const startShake = () => {
    Animated.sequence([
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };
  useEffect(() => {
    if (addToCart) {
      startShake();
    }
  }, [addToCart]);
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          position: "absolute",
          bottom: 2,
          right: 16,
          left: 16,
          borderRadius: 10,
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon3
              name={focused ? "home" : "home-outline"}
              size={24}
              color={"#ee3a1f"}
            />
          ),
          tabBarButton: (props) => (
            <TabButton
              {...props}
              iconName={
                props.accessibilityState.selected ? "home" : "home-outline"
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Animated.View
              style={{ transform: [{ translateX: shakeAnimation }] }}
            >
              <Icon3 name={"cart"} size={24} color={"#ee3a1f"} />
            </Animated.View>
          ),
          tabBarButton: (props) => (
            <TabButton
              {...props}
              iconName={props.accessibilityState.selected ? "cart" : "cart"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Like"
        component={Like}
        options={{
          headerTitle: "Beğendiklerim",
          tabBarIcon: ({ color, focused }) => (
            <Icon3
              name={focused ? "heart" : "heart-outline"}
              size={24}
              color={"#ee3a1f"}
            />
          ),
          tabBarButton: (props) => (
            <TabButton
              {...props}
              iconName={
                props.accessibilityState.selected ? "heart" : "heart-outline"
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function CustomDrawerContent(props) {
  const { navigation } = props;

  const navigateToHome = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "HomeDrawer" }],
    });
  };
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        style={{ backgroundColor: "#F0F8FF" }}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("./assets/logo.webp")}
            style={{
              height: 200,
              width: 200,
              marginBottom: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
            resizeMode="contain"
          />
          <Text style={{ color: "#000", fontSize: 18, fontWeight: "500" }}>
            Mehmet Rıdvan Gül
          </Text>
        </View>

        <View style={{ flex: 1, backgroundColor: "#F0F8FF", paddingTop: 10 }}>
          <DrawerItem
            label="Ana Sayfa"
            onPress={navigateToHome}
            activeTintColor="#fff"
            activeBackgroundColor="#ee3a1f"
            style={
              props.state.routes[props.state.index].name === "HomeDrawer"
                ? { backgroundColor: "#ee3a1f", paddingLeft: 15 }
                : {}
            }
            labelStyle={
              props.state.routes[props.state.index].name === "HomeDrawer"
                ? { color: "#FFF" }
                : {}
            }
          />
          <DrawerItem
            label={"Ürünler"}
            onPress={() => props.navigation.navigate("AllProductsNavigator")}
            activeTintColor="#FFF"
            activeBackgroundColor="#ee3a1f"
            style={
              props.state.routes[props.state.index].name ===
              "AllProductsNavigator"
                ? { backgroundColor: "#ee3a1f", paddingLeft: 15 }
                : {}
            }
            labelStyle={
              props.state.routes[props.state.index].name ===
              "AllProductsNavigator"
                ? { color: "#FFF" }
                : {}
            }
          />
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

function CartNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CartNav" component={Cart} />
      <Stack.Screen
        name="DeliveryInformations"
        component={DeliveryInformations}
      />
      <Stack.Screen
        name="PaymentInformations"
        component={PaymentInformations}
      />
    </Stack.Navigator>
  );
}

function AllProductsNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AllProducts" component={AllProducts} />
      <Stack.Screen name="ProductsDetails" component={ProductDetails} />
      
    </Stack.Navigator>
  );
}

function HomeNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductsDetails" component={ProductDetails} />
      <Stack.Screen name ="OpportunityProducts" component={OpportunityProducts} />
      <Stack.Screen name = "NewProducts" component={NewProducts} />
    </Stack.Navigator>
  );
}

function DrawerNavigator() {
  const navigation = useNavigation();
  const { addToCart } = useContext(GlobalContext);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [accountSettingsVisible, setAccountSettingsVisible] = useState(false);
  const [orderVisible, setOrderVisible] = useState(false);
  const [orderDetail, setOrderDetail] = useState(false);
  const [gender, setGender] = useState();
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const openModal = () => {
    setModalIsVisible(true);
  };
  const closeModal = () => {
    setModalIsVisible(false);
  };
  const accountVisibleOpen = () => {
    setAccountSettingsVisible(true);
  };
  const accountVisibleClose = () => {
    setAccountSettingsVisible(false);
  };
  const orderVisibleOpen = () => {
    setOrderVisible(true);
  };
  const orderVisibleClose = () => {
    setOrderVisible(false);
  };
  const navigateToHome = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "HomeDrawer" }],
    });
  };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };
  const orderDetailClose = () => {
    setOrderDetail(false);
  };
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        drawerActiveBackgroundColor: "#ee3a1f",
        drawerActiveTintColor: "#fff",
        headerTitle: "",
        headerLeft: () => (
          <Icon
            name="appstore1"
            size={24}
            color={"#ee3a1f"}
            style={{ ...styles.icons, marginLeft: 20 }}
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: () => (
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
              {addToCart.length > 0 && (
                <View style={{ color: "#ee3a1f", zIndex: 1 }}>
                  <Text
                    style={{
                      fontSize: 60,
                      position: "absolute",
                      left: 28,
                      top: -50,
                      color: "#ee3a1f",
                    }}
                  >
                    .
                  </Text>
                </View>
              )}

              <Icon2
                name="shopping-cart"
                size={24}
                color={"#ee3a1f"}
                style={{ ...styles.icons, marginRight: 10 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon
                name="user"
                size={24}
                color={"#ee3a1f"}
                style={{ ...styles.icons, marginRight: 20 }}
                onPress={openModal}
              />
            </TouchableOpacity>

            <Modal
              animationType="slide"
              transparent={false}
              visible={modalIsVisible}
              onRequestClose={closeModal}
            >
              <View style={{ flex: 1, backgroundColor: "#F0F8FF" }}>
                <View style={{ flexDirection: "row", padding: 25 }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "white",
                      padding: 8,
                      borderRadius: 8,
                    }}
                  >
                    <Icon3 name="chevron-back" size={24} onPress={closeModal} />
                  </TouchableOpacity>
                  <View
                    style={{
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ fontSize: 24 }}>Hesabım</Text>
                  </View>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    backgroundColor: "white",
                    marginHorizontal: 15,
                    borderRadius: 12,
                  }}
                >
                  <View style={{ alignItems: "center", padding: 50 }}>
                    <Text style={{ fontSize: 18, fontWeight: "500" }}>
                      Mehmet Rıdvan Gül
                    </Text>
                    <Text style={{ fontSize: 15 }}>info@gmail.com</Text>
                    <Text style={{ marginTop: 15, fontSize: 16 }}>
                      05555555555
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: "#B6D0E2",
                    height: 1,
                    marginTop: 80,
                    marginHorizontal: 15,
                  }}
                ></View>
                <View style={{ padding: 15 }}>
                  <Text style={{ fontSize: 16, fontWeight: "300" }}>
                    Ayarlar
                  </Text>
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 15,
                      }}
                    >
                      <Icon name="user" size={24} />
                      <Text
                        style={{ marginLeft: 15, fontSize: 18 }}
                        onPress={accountVisibleOpen}
                      >
                        Hesap Ayarları
                      </Text>
                      <Modal
                        animationType="slide"
                        transparent={false}
                        visible={accountSettingsVisible}
                        onRequestClose={accountVisibleClose}
                      >
                        <View style={{ backgroundColor: "#F0F8FF", flex: 1 }}>
                          <View style={{ flexDirection: "row", padding: 25 }}>
                            <TouchableOpacity
                              style={{
                                backgroundColor: "white",
                                padding: 8,
                                borderRadius: 8,
                              }}
                            >
                              <Icon3
                                name="chevron-back"
                                size={24}
                                onPress={accountVisibleClose}
                              />
                            </TouchableOpacity>
                            <View
                              style={{
                                flex: 1,
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Text style={{ fontSize: 24 }}>
                                Hesap Ayarları
                              </Text>
                            </View>
                          </View>
                          <View style={styles.accountSettingContainer}>
                            <View style={{ flex: 1 }}>
                              <Text style={styles.accountSettingText}>
                                Adınız:
                              </Text>
                              <Input placeholder={""} value={"Mehmet Rıdvan"} />
                            </View>
                            <View style={{ flex: 1 }}>
                              <Text style={styles.accountSettingText}>
                                Soyadınız:
                              </Text>
                              <Input placeholder={""} value={"Gül"} />
                            </View>
                          </View>
                          <View style={styles.accountSettingContainer}>
                            <View style={{ flex: 1 }}>
                              <Text style={styles.accountSettingText}>
                                Kullanıcı Adınız
                              </Text>
                              <Input
                                placeholder={""}
                                value={"admin"}
                                editable={true}
                              />
                            </View>
                            <View style={{ flex: 1 }}>
                              <Text style={styles.accountSettingText}>
                                Cinsiyetiniz
                              </Text>
                              <View
                                style={{
                                  borderRadius: 12,
                                  backgroundColor: "#FFF",
                                  flex: 1,
                                }}
                              >
                                <RNPickerSelect
                                  style={{
                                    inputIOS: {
                                      marginLeft: 15,
                                      fontWeight: "500",
                                      fontSize: 20,
                                    },
                                  }}
                                  onValueChange={(value) => setGender(value)}
                                  items={[
                                    { label: "Bay", value: "bay" },
                                    { label: "Bayan", value: "bayan" },
                                  ]}
                                />
                              </View>
                            </View>
                            <View></View>
                          </View>
                          <View style={styles.accountSettingContainer}>
                            <View style={{ flex: 1 }}>
                              <Text style={styles.accountSettingText}>
                                Doğum Tarihiniz
                              </Text>
                              <TouchableOpacity
                                onPress={showDatepicker}
                                style={{
                                  flex: 1,
                                  backgroundColor: "#FFF",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  borderRadius: 12,
                                }}
                              >
                                <Text>
                                  {date ? date.toLocaleDateString() : Seçiniz}
                                </Text>
                              </TouchableOpacity>
                              {show && (
                                <DateTimePicker
                                  testID="dateTimePicker"
                                  value={date}
                                  mode={mode}
                                  is24Hour={true}
                                  display="default"
                                  onChange={onChange}
                                />
                              )}
                            </View>
                            <View style={{ flex: 1 }}>
                              <Text style={styles.accountSettingText}>
                                Telefon Numarınız
                              </Text>
                              <Input
                                placeholder={""}
                                keyboardType={"numeric"}
                              />
                            </View>
                          </View>
                          <View style={{ marginHorizontal: 15, marginTop: 25 }}>
                            <Button
                              text={"Kaydet"}
                              backgroundColor={"#ee3a1f"}
                              borderRadius={12}
                              color={"#FFF"}
                              fontSize={18}
                              onPress={accountVisibleClose}
                            />
                          </View>
                        </View>
                      </Modal>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 15,
                      }}
                    >
                      <Icon name="inbox" size={24} />
                      <Text
                        style={{ marginLeft: 15, fontSize: 18 }}
                        onPress={orderVisibleOpen}
                      >
                        Siparişlerim
                      </Text>
                      <Modal
                        animationType="slide"
                        onRequestClose={orderVisibleClose}
                        visible={orderVisible}
                        transparent={false}
                      >
                        <View style={{ backgroundColor: "#F0F8FF", flex: 1 }}>
                          <View style={{ flexDirection: "row", padding: 25 }}>
                            <TouchableOpacity
                              style={{
                                backgroundColor: "white",
                                padding: 8,
                                borderRadius: 8,
                              }}
                            >
                              <Icon3
                                name="chevron-back"
                                size={24}
                                onPress={orderVisibleClose}
                              />
                            </TouchableOpacity>
                            <View
                              style={{
                                flex: 1,
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Text style={{ fontSize: 24 }}>Siparişlerim</Text>
                            </View>
                          </View>
                          <View
                            style={{ padding: 10, flexDirection: "column" }}
                          >
                            <View
                              style={{
                                flexDirection: "row",
                                marginTop: 15,
                                alignItems: "center",
                                backgroundColor: "#FFF",
                                padding: 5,
                              }}
                            >
                              <Text style={{ fontWeight: "500", flex: 1 }}>
                                Sipariş Kodu
                              </Text>
                              <Text style={{ fontWeight: "500", flex: 1 }}>
                                Sipariş Tarihi
                              </Text>
                              <Text style={{ fontWeight: "500", flex: 1 }}>
                                Sipariş Durumu
                              </Text>
                            </View>
                            <TouchableOpacity
                              style={{
                                flexDirection: "row",
                                marginTop: 10,
                                padding: 5,
                                backgroundColor: "#FFF",
                              }}
                              onPress={() => setOrderDetail(true)}
                            >
                              <Text style={{ fontSize: 10, flex: 1 }}>
                                20231206014144805
                              </Text>
                              <Text style={{ fontSize: 10, flex: 1 }}>
                                Çrş 06 Ara 2023 13:41
                              </Text>
                              <Text style={{ fontSize: 10, flex: 1 }}>
                                İptal Edildi
                              </Text>
                            </TouchableOpacity>
                            <Modal
                              animationType="slide"
                              onRequestClose={orderDetailClose}
                              visible={orderDetail}
                              transparent={false}
                            >
                              <ScrollView
                                style={{ flex: 1, backgroundColor: "#F0F8FF" }}
                              >
                                <View
                                  style={{ flexDirection: "row", padding: 25 }}
                                >
                                  <TouchableOpacity
                                    style={{
                                      backgroundColor: "white",
                                      padding: 8,
                                      borderRadius: 8,
                                    }}
                                  >
                                    <Icon3
                                      name="chevron-back"
                                      size={24}
                                      onPress={orderVisibleClose}
                                    />
                                  </TouchableOpacity>
                                  <View
                                    style={{
                                      flex: 1,
                                      alignItems: "center",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <Text style={{ fontSize: 24 }}>
                                      Sipariş Detayı
                                    </Text>
                                  </View>
                                </View>
                                <View style={{ padding: 20 }}>
                                  <View
                                    style={{ flexDirection: "column", gap: 10 }}
                                  >
                                    <View
                                      style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                      }}
                                    >
                                      <Text style={styles.orderDetailText}>
                                        Sipariş Kodu:
                                      </Text>
                                      <Text style={styles.orderDetailText}>
                                        20231206014144805
                                      </Text>
                                    </View>
                                    <View
                                      style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                      }}
                                    >
                                      <Text style={styles.orderDetailText}>
                                        Ödeme Tipi:
                                      </Text>
                                      <Text style={styles.orderDetailText}>
                                        EFT/ Havale
                                      </Text>
                                    </View>
                                    <View
                                      style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                      }}
                                    >
                                      <View style={{ flex: 1 }}>
                                        <Text style={styles.orderDetailText}>
                                          Ödeme Detayları:
                                        </Text>
                                      </View>

                                      <View style={{ flex: 1, borderWidth: 1 }}>
                                        <Text>Ödeme Türü: EFT/Havale, </Text>
                                        <Text>
                                          Aktarılan banka: ÇAMKIRAN OTOMOTİV
                                          AKBANK,
                                        </Text>
                                        <Text>Hesap numarası: 16808,</Text>
                                        <Text>
                                          IBAN: TR850004600284888000016808
                                        </Text>
                                      </View>
                                    </View>
                                    <View style={{ flexDirection: "row" }}>
                                      <Text style={styles.orderDetailText}>
                                        TL Kur Değeri
                                      </Text>
                                      <Text style={styles.orderDetailText}>
                                        1,0000 TL
                                      </Text>
                                    </View>
                                    <View style={{ flexDirection: "row" }}>
                                      <Text style={styles.orderDetailText}>
                                        Sipariş Oluşturma tarihi:
                                      </Text>
                                      <Text style={styles.orderDetailText}>
                                        06 Aralık 2023 13:41:53
                                      </Text>
                                    </View>
                                    <View style={{ flexDirection: "row" }}>
                                      <Text style={styles.orderDetailText}>
                                        Son Güncelleme Tarihi:
                                      </Text>
                                      <Text style={styles.orderDetailText}>
                                        06 Aralık 2023 13:42:35
                                      </Text>
                                    </View>
                                    <View style={{ flexDirection: "row" }}>
                                      <Text style={styles.orderDetailText}>
                                        Durumu:
                                      </Text>
                                      <Text style={styles.orderDetailText}>
                                        İptal Edildi
                                      </Text>
                                    </View>
                                  </View>
                                  <View
                                    style={{
                                      flexDirection: "column",
                                      gap: 10,
                                      marginTop: 15,
                                    }}
                                  >
                                    <Text>Ürün Bilgileri</Text>

                                    <View style={{ flexDirection: "row" }}>
                                      <Text style={styles.orderDetailText}>
                                        KONA IÇIN UYUMLU KLIMA DÜĞME
                                        KAPLAMA-PİANO BLACK-
                                      </Text>
                                      <Text style={styles.orderDetailText}>
                                        Miktar: 1
                                      </Text>
                                      <Text style={styles.orderDetailText}>
                                        İndirim: 0,00TL
                                      </Text>
                                      <Text style={styles.orderDetailText}>
                                        KDV Oranı: %20
                                      </Text>
                                      <Text style={styles.orderDetailText}>
                                        Fiyat: 54,17TL
                                      </Text>
                                    </View>
                                    <View style={{ flexDirection: "row" }}>
                                      <Text style={styles.orderDetailText}>
                                        3/4 SERISI F30 F32 F362012-2018 IÇIN
                                        UYUMLU AYNA KAPAĞI PIANO BLACK-
                                      </Text>
                                      <Text style={styles.orderDetailText}>
                                        Miktar: 1
                                      </Text>
                                      <Text style={styles.orderDetailText}>
                                        İndirim: 0,00TL
                                      </Text>
                                      <Text style={styles.orderDetailText}>
                                        KDV Oranı: %20
                                      </Text>
                                      <Text style={styles.orderDetailText}>
                                        Fiyat: 629,17TL
                                      </Text>
                                    </View>
                                    <View>
                                      <Text>Teslimat Bilgileri</Text>
                                      <View style={{ flexDirection: "row" }}>
                                        <Text style={styles.orderDetailText}>
                                          Teslimat Bilgiler:
                                        </Text>
                                        <View
                                          style={{
                                            flex: 1,
                                            borderWidth: 1,
                                            padding: 5,
                                          }}
                                        >
                                          <Text>Adres Tanımı: asd</Text>
                                          <Text>Adı Soyadı: asd asd</Text>
                                          <Text>Telefon: (333) 333 33 33 </Text>
                                          <Text>
                                            Posta Kodu: asd@asdasd.com
                                          </Text>
                                          <Text>
                                            Açık Adres: asda İSTANBUL-Türkiye
                                          </Text>
                                          <Text>Ticari mi?: Evet</Text>
                                          <Text>Şirket Adı: asdasd</Text>
                                          <Text>
                                            Vergi Numarası: 3333 | Vergi Daires:
                                            asdasd
                                          </Text>
                                        </View>
                                      </View>

                                      <View style={{ flexDirection: "row" }}>
                                        <Text style={styles.orderDetailText}>
                                          Fatura Bilgiler:
                                        </Text>
                                        <View
                                          style={{
                                            flex: 1,
                                            borderWidth: 1,
                                            padding: 5,
                                          }}
                                        >
                                          <Text>Adres Tanımı: asd</Text>
                                          <Text>Adı Soyadı: asd asd</Text>
                                          <Text>Telefon: (333) 333 33 33 </Text>
                                          <Text>
                                            Posta Kodu: asd@asdasd.com
                                          </Text>
                                          <Text>
                                            Açık Adres: asda İSTANBUL-Türkiye
                                          </Text>
                                          <Text>Ticari mi?: Evet</Text>
                                          <Text>Şirket Adı: asdasd</Text>
                                          <Text>
                                            Vergi Numarası: 3333 | Vergi Daires:
                                            asdasd
                                          </Text>
                                        </View>
                                      </View>
                                      <View style={{ flexDirection: "row" }}>
                                        <Text style={styles.orderDetailText}>
                                          Kargo Şirketi:
                                        </Text>
                                        <View
                                          style={{
                                            flex: 1,
                                            borderWidth: 1,
                                            padding: 5,
                                          }}
                                        >
                                          <Text>Kargo</Text>
                                        </View>
                                      </View>
                                      <View style={{ flexDirection: "row" }}>
                                        <Text style={styles.orderDetailText}>
                                          Kargo Takip:
                                        </Text>
                                        <View
                                          style={{
                                            flex: 1,
                                            borderWidth: 1,
                                            padding: 5,
                                          }}
                                        >
                                          <Text>Kargoya verilmemiş</Text>
                                        </View>
                                      </View>
                                      <View style={{ flexDirection: "row" }}>
                                        <Text style={styles.orderDetailText}>
                                          Kargo Takip No:
                                        </Text>
                                        <View
                                          style={{
                                            flex: 1,
                                            borderWidth: 1,
                                            padding: 5,
                                          }}
                                        >
                                          <Text>-</Text>
                                        </View>
                                      </View>
                                    </View>
                                  </View>
                                </View>
                              </ScrollView>
                            </Modal>
                            <TouchableOpacity
                              style={{
                                flexDirection: "row",
                                marginTop: 10,
                                padding: 5,
                                backgroundColor: "#FFF",
                              }}
                            >
                              <Text style={{ fontSize: 10, flex: 1 }}>
                                20231206014144805
                              </Text>
                              <Text style={{ fontSize: 10, flex: 1 }}>
                                Çrş 06 Ara 2023 13:41
                              </Text>
                              <Text style={{ fontSize: 10, flex: 1 }}>
                                Beklemede
                              </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                              style={{
                                flexDirection: "row",
                                marginTop: 10,
                                padding: 5,
                                backgroundColor: "#FFF",
                              }}
                            >
                              <Text style={{ fontSize: 10, flex: 1 }}>
                                20231206014144805
                              </Text>
                              <Text style={{ fontSize: 10, flex: 1 }}>
                                Çrş 06 Ara 2023 13:41
                              </Text>
                              <Text style={{ fontSize: 10, flex: 1 }}>
                                Teslim Edildi
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </Modal>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: "#B6D0E2",
                    height: 1,
                    marginTop: 15,
                    marginHorizontal: 15,
                  }}
                ></View>
                <View style={{ padding: 15, flexDirection: "row" }}>
                  <Icon3 name="log-out-outline" size={24} />
                  <Text
                    style={{ marginLeft: 15, fontSize: 18 }}
                    onPress={() => navigation.navigate("Login")}
                  >
                    Çıkış Yap
                  </Text>
                </View>
              </View>
            </Modal>
          </View>
        ),
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#F0F8FF" },
      })}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="HomeDrawer"
        component={BottomTabNavigator}
        options={{ drawerLabel: "Ana Sayfa" }}
        onPress={navigateToHome}
      />
      <Drawer.Screen
        name="AllProductsNavigator"
        component={AllProductsNavigator}
        options={{ drawerLabel: "Ürünler" }}
      />
    </Drawer.Navigator>
  );
}

function Router() {
  return (
    <GlobalProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen
            name="Home"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalProvider>
  );
}

const styles = StyleSheet.create({
  icons: {
    borderRadius: 50,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 3.84,
    elevation: 9,
    transform: [{ scale: 0.8 }],
  },
  accountSettingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 5,
    marginHorizontal: 15,
  },
  accountSettingText: {
    fontSize: 18,
    fontWeight: "500",
  },
  tabBarContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  orderDetailText: {
    padding: 5,
    flex: 1,
    borderWidth: 1,
  },
});

export default Router;
