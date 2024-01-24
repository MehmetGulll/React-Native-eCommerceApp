import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
  Alert,
} from "react-native";
import RadioForm from "react-native-simple-radio-button";
import Icon from "react-native-vector-icons/Ionicons";
import Button from "../../components/Button";
import { Picker } from "@react-native-picker/picker";
import Input from "../../components/Input";
import { useNavigation } from "@react-navigation/native";
import Checkbox from "expo-checkbox";

function DeliveryInformations() {
  const navigation = useNavigation();
  const radio_props = [{ label: "Kargo", value: 0 }];

  const adres_props = [
    { label: "Kişisel", value: 0 },
    { label: "Kurumsal", value: 1 },
  ];

  const [selectedAdress, setSelectedAdress] = useState("---");
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [adressType, setAdressType] = useState(0);
  const [sameAdressChecked, setSameAdressChecked] = useState(false);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#F0F8FF" }}>
      <View style={{ flexDirection: "row", padding: 25 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            padding: 8,
            borderRadius: 8,
          }}
        >
          <Icon
            name="chevron-back"
            size={24}
            onPress={() => navigation.navigate("Cart")}
          />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        ></View>
      </View>
      <View style={styles.billInformationsContainer}>
        <View style={{ padding: 20 }}>
          <View>
            <Text style={{ fontSize: 20, fontWeight: "500", color: "#ee3a1f" }}>
              Teslimat Bilgileriniz
            </Text>
          </View>
          <View style={{ marginTop: 15 }}>
            <View style={styles.billInformations}>
              <Text style={styles.billInformationsText}>İsim Soyisim</Text>
              <Text style={{ textTransform: "uppercase" }}>
                Mehmet Rıdvan Gül
              </Text>
            </View>
            <View style={styles.billInformations}>
              <Text style={styles.billInformationsText}>Email Adresi</Text>
              <Text style={{ textTransform: "uppercase" }}>info@gmail.com</Text>
            </View>
            <View style={styles.billInformations}>
              <Text style={styles.billInformationsText}>Telefon</Text>
              <Text style={{ textTransform: "uppercase" }}>
                +90 555 555 55 55
              </Text>
            </View>
            <View style={styles.billInformations}>
              <Text style={styles.billInformationsText}>Teslimat Adresi</Text>
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 12,
                  borderColor: "#d3d3d3",
                }}
              >
                <Picker
                  selectedValue={selectedAdress}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedAdress(itemValue)
                  }
                >
                  <Picker.Item
                    label="Buca/İzmir Adatepe Mahallesi 35.sokak no 35"
                    value="mukemmel"
                  />
                  <Picker.Item
                    label="Buca/İzmir Adatepe Mahallesi 35.sokak no 35"
                    value="mukemmel"
                  />
                  <Picker.Item
                    label="Buca/İzmir Adatepe Mahallesi 35.sokak no 35"
                    value="mukemmel"
                  />
                  <Picker.Item
                    label="Buca/İzmir Adatepe Mahallesi 35.sokak no 35"
                    value="mukemmel"
                  />
                  <Picker.Item
                    label="Buca/İzmir Adatepe Mahallesi 35.sokak no 35"
                    value="mukemmel"
                  />
                </Picker>
              </View>
              <View style={{ marginHorizontal: 50, marginTop: 10 }}>
                <Button
                  text={"Yeni Adres Ekle"}
                  color={"#FFF"}
                  backgroundColor={"#ee3a1f"}
                  borderRadius={15}
                  onPress={() => setIsVisibleModal(!isVisibleModal)}
                />
              </View>
              <View style={{ marginTop: 10 }}>
                <Text style={styles.billInformationsText}>Fatura Adresi</Text>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                  <Checkbox
                    color={"#ee3a1f"}
                    value={sameAdressChecked}
                    onValueChange={setSameAdressChecked}
                  />
                  <Text style={{ marginLeft: 6 }}>
                    Teslimat ve fatura adresi aynı olsun
                  </Text>
                </View>
              </View>
              <Modal
                animationType="slide"
                transparent={false}
                visible={isVisibleModal}
                onRequestClose={() => setIsVisibleModal(!isVisibleModal)}
              >
                <ScrollView style={{ flex: 1, backgroundColor: "#F0F8FF" }}>
                  <View
                    style={{
                      padding: 15,
                      borderBottomWidth: 1,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={{ fontSize: 16 }}>Yeni Adres Tanımı</Text>
                    <Icon
                      name="close"
                      size={30}
                      onPress={() => setIsVisibleModal(!isVisibleModal)}
                    />
                  </View>
                  <View style={{ padding: 15 }}>
                    <Text>Adres Türü:</Text>
                  </View>
                  <View style={{ marginLeft: 15 }}>
                    <RadioForm
                      radio_props={adres_props}
                      initial={0}
                      onPress={(value) => setAdressType(value)}
                      buttonColor="black"
                      selectedButtonColor="#ee3a1f"
                    />
                  </View>
                  <View style={{ flexDirection: "column", padding: 15 }}>
                    <View>
                      <Text>Adres İsmi:</Text>
                      <Input borderWidth={1} />
                    </View>
                    <View>
                      <Text>Adı:</Text>
                      <Input borderWidth={1} />
                    </View>
                    <View>
                      <Text>Soyadı:</Text>
                      <Input borderWidth={1} />
                    </View>
                    {adressType == 0 ? (
                      <View>
                        <Text>TC Kimlik Numarası:</Text>
                        <Input borderWidth={1} />
                        <Text
                          onPress={() =>
                            Alert.alert(
                              "Neden TC Kimlik istiyoruz?",
                              "TC kimlik numaranızı, işlem güvenliğiniz sağlanması ve ilgili mevzuat gereği fatura üzerinde yer alması gerektiği için bir defaya mahsus olmak üzere talep ediyoruz. Bu bilgi, sadece mevzuatça zorunlu görülen hallerde kullanılacak olup 3.kişilerin erişimine kapalı olarak güvenli bir ortamda saklanacaktır.",
                              [{ text: "Tamam", style: "cancel" }]
                            )
                          }
                          style={{ color: "#ee3a1f" }}
                        >
                          Bu bilgi neden gerekli?
                        </Text>
                      </View>
                    ) : (
                      <>
                        <View>
                          <Text>Firma Adı:</Text>
                          <Input borderWidth={1} />
                        </View>
                        <View>
                          <Text>Vergi Dairesi:</Text>
                          <Input borderWidth={1} />
                        </View>
                        <View>
                          <Text>Vergi Numarası:</Text>
                          <Input borderWidth={1} />
                        </View>
                      </>
                    )}

                    <View>
                      <Text>E-Posta:</Text>
                      <Input borderWidth={1} />
                    </View>
                    <View>
                      <Text>Posta Kodu:</Text>
                      <Input borderWidth={1} />
                    </View>
                    <View>
                      <Text>Adres:</Text>
                      <Input borderWidth={1} />
                    </View>
                    <View>
                      <Text>Telefon:</Text>
                      <Input borderWidth={1} />
                    </View>

                    <View style={{ marginTop: 15 }}>
                      <Button
                        text={"Kaydet"}
                        color={"#FFF"}
                        backgroundColor={"#ee3a1f"}
                        borderRadius={15}
                      />
                    </View>
                  </View>
                </ScrollView>
              </Modal>
            </View>
          </View>
          <View style={{ marginTop: 25 }}>
            <Text style={{ fontSize: 20, fontWeight: "500" }}>
              Kargo Firmaları
            </Text>
          </View>
          <View style={{ marginTop: 15 }}>
            <RadioForm
              radio_props={radio_props}
              initial={0}
              onPress={(value) => console.log(value)}
              buttonColor="#D2042D"
              selectedButtonColor="#D2042D"
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#B6D0E2",
            height: 1,
            marginHorizontal: 15,
          }}
        ></View>
        <View style={styles.priceStyle}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: "600" }}>100TL</Text>
          </View>
          <View>
            <Button
              text={"Onayla & İlerle"}
              backgroundColor={"#0F52BA"}
              color={"white"}
              borderRadius={5}
              fontSize={16}
              onPress={() => navigation.navigate("PaymentInformations")}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
});

export default DeliveryInformations;
