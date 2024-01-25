import { StyleSheet } from "react-native";

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
