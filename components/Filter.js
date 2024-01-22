import React, { useEffect, useContext, useRef, useState } from "react";
import { GlobalContext } from "../Context/GlobalStates";
import RNPickerSelect from "react-native-picker-select";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";
import Input from "./Input";
import Button from "./Button";
import Icon from "react-native-vector-icons/AntDesign";

function Filter() {
  const [isOpen, setIsOpen] = useState(false);
  const [model, setModel] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState(null);

  const animation = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: isOpen ? 0 : 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();

    setIsOpen(!isOpen);
  };

  const height = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 250],
  });

  return (
    <View style={styles.searchContainer}>
      <View
        style={{
          marginHorizontal: 55,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Input placeholder={"Ara..."} style={styles.searchInput} />
        <TouchableOpacity onPress={startAnimation}>
          <Icon
            name="filter"
            size={27}
            backgroundColor="#ee3a1f"
            color={"white"}
            style={{ marginLeft: 22, padding: 15, borderRadius: 15 }}
          />
        </TouchableOpacity>
      </View>
      <Animated.View
        style={{
          height: height,
          backgroundColor: "white",
          marginTop: 30,
          marginHorizontal: 15,
          borderRadius: 15,
        }}
      >
        {isOpen && (
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Text style={{ marginLeft: 15, fontWeight: "500", fontSize: 20 }}>
                Kategori
              </Text>
              <View style={styles.pickerContainer}>
                <RNPickerSelect
                  placeholder={{ label: "Kategori Seçiniz...", value: null }}
                  style={{
                    inputIOS: {
                      marginLeft: 15,
                      fontWeight: "500",
                      fontSize: 20,
                      flex: 1,
                    },
                  }}
                  onValueChange={(value) => setModel(value)}
                  items={[
                    { label: "Ayakkabı", value: "ayakkabi" },
                    { label: "Tişört", value: "tisort" },
                    { label: "Aksesuar", value: "aksesuar" },
                    { label: "Kozmetik", value: "kozmetik" },
                    { label: "Spor", value: "spor" },
                    { label: "Gömlek", value: "gomlek" },
                    { label: "Pantolon", value: "pantolon" },
                    { label: "Mont", value: "mont" },
                    { label: "Şort", value: "sort" },
                  ]}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Text style={{ marginLeft: 15, fontWeight: "500", fontSize: 20 }}>
                Beden
              </Text>
              <View style={styles.pickerContainer}>
                <RNPickerSelect
                  placeholder={{ label: "Beden Seçiniz...", value: null }}
                  style={{
                    inputIOS: {
                      marginLeft: 15,
                      fontWeight: "500",
                      fontSize: 20,
                      flex: 1,
                    },
                  }}
                  onValueChange={(value) => setModel(value)}
                  items={[
                    { label: "Small", value: "S" },
                    { label: "Medium", value: "M" },
                    { label: "Large", value: "L" },
                    { label: "XSmall", value: "XS" },
                    { label: "XLarge", value: "XL" },
                    { label: "XXLarge", value: "XXL" },
                    { label: "XXXLarge", value: "XXXL" },
                  ]}
                />
              </View>
            </View>

            <View style={{ marginHorizontal: 15, marginTop: 15 }}>
              <Button
                text={"Ara"}
                backgroundColor={"#ee3a1f"}
                borderRadius={15}
                color={"#FFF"}
                fontSize={18}
              />
            </View>
          </View>
        )}
      </Animated.View>
    </View>
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
    resizeMode: "contain",
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

export default Filter;
