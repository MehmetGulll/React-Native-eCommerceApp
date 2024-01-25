import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
