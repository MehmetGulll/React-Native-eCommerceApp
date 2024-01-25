import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
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

  itemImage2: {
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
