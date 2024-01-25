import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  billInformationsContainer: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  billInformations: {
    marginTop: 10,
  },
  priceStyle: {
    flexDirection: "row",
    padding: 15,
    borderColor: "#B6D0E2",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 63,
  },
  billInformationsText: {
    fontWeight: "700",
    fontSize: 18,
  },
  optionsPayment: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
    borderColor: "#D3D3D3",
  },
  bankInformations: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    padding: 10,
  },
  accountInformation: {
    flexDirection: "row",
    marginLeft: 10,
    alignItems: "center",
  },
  accountInformationText: {
    fontWeight: "600",
  },
  cardContainer: {
    backgroundColor: "#167",
    padding: 50,
    marginTop: 15,
    borderRadius: 5,
  },
  cardNumber: {
    color: "#FFF",
    fontSize: 20,
    letterSpacing: 3,
    marginTop: 15,
  },
});
