import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
