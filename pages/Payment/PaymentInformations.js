import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";

function PaymentInformations() {
  const [selectedPayment, setSelectedPayment] = useState("");
  const [selectedBank, setSelectedBank] = useState("");
  const [cardNumber, setCardNumber] = useState();
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#F0F8FF" }}>
      <View style={{ padding: 15, backgroundColor: "#FFF" }}>
        <View>
          <Text style={{ fontSize: 20, fontWeight: "500", color: "#ee3a1f" }}>
            Ödeme Bilgileri
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={[
              styles.optionsPayment,
              selectedPayment === "eft"
                ? { borderColor: "#000" }
                : { borderColor: "#D3D3D3", color: "#000" },
            ]}
            onPress={() => setSelectedPayment("eft")}
          >
            <Image
              source={{
                uri: "https://www.trfabrika.com/images/Grafik/havale-eft.png",
              }}
              width={50}
              height={50}
            />
            <Text
              style={{
                marginLeft: 25,
                fontSize: 16,
                color: selectedPayment === "eft" ? "#ee3a1f" : "#000",
              }}
            >
              EFT / Havale ile Ödeme
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.optionsPayment,
              selectedPayment === "credit"
                ? { borderColor: "#000" }
                : { borderColor: "#D3D3D3", color: "#000" },
            ]}
            onPress={() => setSelectedPayment("credit")}
          >
            <Image
              source={{
                uri: "https://w7.pngwing.com/pngs/1014/507/png-transparent-computer-icons-credit-card-smart-card-icon-credit-card-angle-text-service.png",
              }}
              width={50}
              height={50}
            />
            <Text
              style={{
                marginLeft: 25,
                fontSize: 16,
                color: selectedPayment === "credit" ? "#ee3a1f" : "#000",
              }}
            >
              Kredi Kart ile Ödeme
            </Text>
          </TouchableOpacity>
        </View>
        {selectedPayment === "eft" ? (
          <View>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#D3D3D3",
                marginTop: 10,
                padding: 5,
              }}
            >
              <TouchableOpacity
                style={[
                  styles.bankInformations,
                  selectedBank === "akbank"
                    ? { backgroundColor: "#6eaa5e" }
                    : { backgroundColor: "white" },
                ]}
                onPress={() => setSelectedBank("akbank")}
              >
                <Image
                  source={{
                    uri: "https://voltmotor.com.tr/wp-content/uploads/2021/06/akbank-logo.jpg",
                  }}
                  width={80}
                  height={80}
                  resizeMode="contain"
                />
                <View style={{ flexDirection: "column", gap: 5 }}>
                  <View style={styles.accountInformation}>
                    <Text>Hesap Sahibi:</Text>
                    <Text style={styles.accountInformationText}>
                      {" "}
                      Mehmet Rıdvan Gül
                    </Text>
                  </View>
                  <View style={styles.accountInformation}>
                    <Text>Hesap Numarası:</Text>
                    <Text style={styles.accountInformationText}> 111111</Text>
                  </View>
                  <View style={styles.accountInformation}>
                    <Text>Şube Kodu:</Text>
                    <Text style={styles.accountInformationText}> 111</Text>
                  </View>
                  <View style={styles.accountInformation}>
                    <Text>IBAN:</Text>
                    <Text style={styles.accountInformationText}>
                      {" "}
                      TR1111111111111111
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.bankInformations,
                  selectedBank === "ing"
                    ? { backgroundColor: "#6eaa5e" }
                    : { backgroundColor: "white" },
                ]}
                onPress={() => setSelectedBank("ing")}
              >
                <Image
                  source={{
                    uri: "https://www.ing.com.tr/F/Documents/Images/kurumsal_logo_genel_mudurluk/ING_Logo_TuruncuBG_Big.png",
                  }}
                  width={80}
                  height={80}
                  resizeMode="contain"
                />
                <View style={{ flexDirection: "column", gap: 5 }}>
                  <View style={styles.accountInformation}>
                    <Text>Hesap Sahibi:</Text>
                    <Text style={styles.accountInformationText}>
                      {" "}
                      Mehmet Rıdvan Gül
                    </Text>
                  </View>
                  <View style={styles.accountInformation}>
                    <Text>Hesap Numarası:</Text>
                    <Text style={styles.accountInformationText}> 111111</Text>
                  </View>
                  <View style={styles.accountInformation}>
                    <Text>Şube Kodu:</Text>
                    <Text style={styles.accountInformationText}> 111</Text>
                  </View>
                  <View style={styles.accountInformation}>
                    <Text>IBAN:</Text>
                    <Text style={styles.accountInformationText}>
                      {" "}
                      TR1111111111111111
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.bankInformations,
                  selectedBank === "isbank"
                    ? { backgroundColor: "#6eaa5e" }
                    : { backgroundColor: "white" },
                ]}
                onPress={() => setSelectedBank("isbank")}
              >
                <Image
                  source={{
                    uri: "https://geoim.bloomberght.com/2019/11/06/ver1573060975/2237390_620x349.jpg",
                  }}
                  width={80}
                  height={80}
                  resizeMode="contain"
                />
                <View style={{ flexDirection: "column", gap: 5 }}>
                  <View style={styles.accountInformation}>
                    <Text>Hesap Sahibi:</Text>
                    <Text style={styles.accountInformationText}>
                      {" "}
                      Mehmet Rıdvan Gül
                    </Text>
                  </View>
                  <View style={styles.accountInformation}>
                    <Text>Hesap Numarası:</Text>
                    <Text style={styles.accountInformationText}> 111111</Text>
                  </View>
                  <View style={styles.accountInformation}>
                    <Text>Şube Kodu:</Text>
                    <Text style={styles.accountInformationText}> 111</Text>
                  </View>
                  <View style={styles.accountInformation}>
                    <Text>IBAN:</Text>
                    <Text style={styles.accountInformationText}>
                      {" "}
                      TR1111111111111111
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.bankInformations,
                  selectedBank === "garanti"
                    ? { backgroundColor: "#6eaa5e" }
                    : { backgroundColor: "white" },
                ]}
                onPress={() => setSelectedBank("garanti")}
              >
                <Image
                  source={{
                    uri: "https://cdnuploads.aa.com.tr/uploads/sirkethaberleri/Contents/2018/11/30/thumbs_b_c_eee85060d5e32db6d1bb1e2da1ca285e.jpg",
                  }}
                  width={80}
                  height={80}
                  resizeMode="contain"
                />
                <View style={{ flexDirection: "column", gap: 5 }}>
                  <View style={styles.accountInformation}>
                    <Text>Hesap Sahibi:</Text>
                    <Text style={styles.accountInformationText}>
                      {" "}
                      Mehmet Rıdvan Gül
                    </Text>
                  </View>
                  <View style={styles.accountInformation}>
                    <Text>Hesap Numarası:</Text>
                    <Text style={styles.accountInformationText}> 111111</Text>
                  </View>
                  <View style={styles.accountInformation}>
                    <Text>Şube Kodu:</Text>
                    <Text style={styles.accountInformationText}> 111</Text>
                  </View>
                  <View style={styles.accountInformation}>
                    <Text>IBAN:</Text>
                    <Text style={styles.accountInformationText}>
                      {" "}
                      TR1111111111111111
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.bankInformations,
                  selectedBank === "yapikredi"
                    ? { backgroundColor: "#6eaa5e" }
                    : { backgroundColor: "white" },
                ]}
                onPress={() => setSelectedBank("yapikredi")}
              >
                <Image
                  source={{
                    uri: "https://logowik.com/content/uploads/images/719_yapikredibankasi.jpg",
                  }}
                  width={80}
                  height={80}
                  resizeMode="contain"
                />
                <View style={{ flexDirection: "column", gap: 5 }}>
                  <View style={styles.accountInformation}>
                    <Text>Hesap Sahibi:</Text>
                    <Text style={styles.accountInformationText}>
                      {" "}
                      Mehmet Rıdvan Gül
                    </Text>
                  </View>
                  <View style={styles.accountInformation}>
                    <Text>Hesap Numarası:</Text>
                    <Text style={styles.accountInformationText}> 111111</Text>
                  </View>
                  <View style={styles.accountInformation}>
                    <Text>Şube Kodu:</Text>
                    <Text style={styles.accountInformationText}> 111</Text>
                  </View>
                  <View style={styles.accountInformation}>
                    <Text>IBAN:</Text>
                    <Text style={styles.accountInformationText}>
                      {" "}
                      TR1111111111111111
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.bankInformations,
                  selectedBank === "teb"
                    ? { backgroundColor: "#6eaa5e" }
                    : { backgroundColor: "white" },
                ]}
                onPress={() => setSelectedBank("teb")}
              >
                <Image
                  source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/9/95/TEB_LOGO.png",
                  }}
                  width={80}
                  height={80}
                  resizeMode="contain"
                />
                <View style={{ flexDirection: "column", gap: 5 }}>
                  <View style={styles.accountInformation}>
                    <Text>Hesap Sahibi:</Text>
                    <Text style={styles.accountInformationText}>
                      {" "}
                      Mehmet Rıdvan Gül
                    </Text>
                  </View>
                  <View style={styles.accountInformation}>
                    <Text>Hesap Numarası:</Text>
                    <Text style={styles.accountInformationText}> 111111</Text>
                  </View>
                  <View style={styles.accountInformation}>
                    <Text>Şube Kodu:</Text>
                    <Text style={styles.accountInformationText}> 111</Text>
                  </View>
                  <View style={styles.accountInformation}>
                    <Text>IBAN:</Text>
                    <Text style={styles.accountInformationText}>
                      {" "}
                      TR1111111111111111
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.bankInformations,
                  selectedBank === "ziraat"
                    ? { backgroundColor: "#6eaa5e" }
                    : { backgroundColor: "white" },
                ]}
                onPress={() => setSelectedBank("ziraat")}
              >
                <Image
                  source={{
                    uri: "https://www.ziraatbank.com.tr/PublishingImages/Subpage/bankamiz/BankamizGorselleri/zb_logo.jpg",
                  }}
                  width={80}
                  height={80}
                  resizeMode="contain"
                />
                <View style={{ flexDirection: "column", gap: 5 }}>
                  <View style={styles.accountInformation}>
                    <Text>Hesap Sahibi:</Text>
                    <Text style={styles.accountInformationText}>
                      {" "}
                      Mehmet Rıdvan Gül
                    </Text>
                  </View>
                  <View style={styles.accountInformation}>
                    <Text>Hesap Numarası:</Text>
                    <Text style={styles.accountInformationText}> 111111</Text>
                  </View>
                  <View style={styles.accountInformation}>
                    <Text>Şube Kodu:</Text>
                    <Text style={styles.accountInformationText}> 111</Text>
                  </View>
                  <View style={styles.accountInformation}>
                    <Text>IBAN:</Text>
                    <Text style={styles.accountInformationText}>
                      {" "}
                      TR1111111111111111
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.bankInformations,
                  selectedBank === "halkbank"
                    ? { backgroundColor: "#6eaa5e" }
                    : { backgroundColor: "white" },
                ]}
                onPress={() => setSelectedBank("halkbank")}
              >
                <Image
                  source={{
                    uri: "https://www.halkbank.com.tr/content/dam/halkbank/tr/gorseller/bankam%C4%B1z/logolarimiz/hblogoerkek.jpg",
                  }}
                  width={80}
                  height={80}
                  resizeMode="contain"
                />
                <View style={{ flexDirection: "column", gap: 5 }}>
                  <View style={styles.accountInformation}>
                    <Text>Hesap Sahibi:</Text>
                    <Text style={styles.accountInformationText}>
                      {" "}
                      Mehmet Rıdvan Gül
                    </Text>
                  </View>
                  <View style={styles.accountInformation}>
                    <Text>Hesap Numarası:</Text>
                    <Text style={styles.accountInformationText}> 111111</Text>
                  </View>
                  <View style={styles.accountInformation}>
                    <Text>Şube Kodu:</Text>
                    <Text style={styles.accountInformationText}> 111</Text>
                  </View>
                  <View style={styles.accountInformation}>
                    <Text>IBAN:</Text>
                    <Text style={styles.accountInformationText}>
                      {" "}
                      TR1111111111111111
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.bankInformations,
                  selectedBank === "finansbank"
                    ? { backgroundColor: "#6eaa5e" }
                    : { backgroundColor: "white" },
                ]}
                onPress={() => setSelectedBank("finansbank")}
              >
                <Image
                  source={{
                    uri: "https://www.logovector.org/wp-content/uploads/logos/png/f/finansbank_logo.png",
                  }}
                  width={80}
                  height={80}
                  resizeMode="contain"
                />
                <View style={{ flexDirection: "column", gap: 5 }}>
                  <View style={styles.accountInformation}>
                    <Text>Hesap Sahibi:</Text>
                    <Text style={styles.accountInformationText}>
                      {" "}
                      Mehmet Rıdvan Gül
                    </Text>
                  </View>
                  <View style={styles.accountInformation}>
                    <Text>Hesap Numarası:</Text>
                    <Text style={styles.accountInformationText}> 111111</Text>
                  </View>
                  <View style={styles.accountInformation}>
                    <Text>Şube Kodu:</Text>
                    <Text style={styles.accountInformationText}> 111</Text>
                  </View>
                  <View style={styles.accountInformation}>
                    <Text>IBAN:</Text>
                    <Text style={styles.accountInformationText}>
                      {" "}
                      TR1111111111111111
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.bankInformations,
                  selectedBank === "denizbank"
                    ? { backgroundColor: "#6eaa5e" }
                    : { backgroundColor: "white" },
                ]}
                onPress={() => setSelectedBank("denizbank")}
              >
                <Image
                  source={{
                    uri: "https://www.liblogo.com/img-logo/de3592fe4f-denizbank-logo-file-denizbank-logo-svg-wikimedia-commons.png",
                  }}
                  width={80}
                  height={80}
                  resizeMode="contain"
                />
                <View style={{ flexDirection: "column", gap: 5 }}>
                  <View style={styles.accountInformation}>
                    <Text>Hesap Sahibi:</Text>
                    <Text style={styles.accountInformationText}>
                      {" "}
                      Mehmet Rıdvan Gül
                    </Text>
                  </View>
                  <View style={styles.accountInformation}>
                    <Text>Hesap Numarası:</Text>
                    <Text style={styles.accountInformationText}> 111111</Text>
                  </View>
                  <View style={styles.accountInformation}>
                    <Text>Şube Kodu:</Text>
                    <Text style={styles.accountInformationText}> 111</Text>
                  </View>
                  <View style={styles.accountInformation}>
                    <Text>IBAN:</Text>
                    <Text style={styles.accountInformationText}>
                      {" "}
                      TR1111111111111111
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.bankInformations,
                  selectedBank === "turkiyefinans"
                    ? { backgroundColor: "#6eaa5e" }
                    : { backgroundColor: "white" },
                ]}
                onPress={() => setSelectedBank("turkiyefinans")}
              >
                <Image
                  source={{
                    uri: "https://www.turkiyefinans.com.tr/SiteAssets/img//tf_logo_guide_02.jpg",
                  }}
                  width={80}
                  height={80}
                  resizeMode="contain"
                />
                <View style={{ flexDirection: "column", gap: 5 }}>
                  <View style={styles.accountInformation}>
                    <Text>Hesap Sahibi:</Text>
                    <Text style={styles.accountInformationText}>
                      {" "}
                      Mehmet Rıdvan Gül
                    </Text>
                  </View>
                  <View style={styles.accountInformation}>
                    <Text>Hesap Numarası:</Text>
                    <Text style={styles.accountInformationText}> 111111</Text>
                  </View>
                  <View style={styles.accountInformation}>
                    <Text>Şube Kodu:</Text>
                    <Text style={styles.accountInformationText}> 111</Text>
                  </View>
                  <View style={styles.accountInformation}>
                    <Text>IBAN:</Text>
                    <Text style={styles.accountInformationText}>
                      {" "}
                      TR1111111111111111
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.bankInformations,
                  selectedBank === "sekerbank"
                    ? { backgroundColor: "#6eaa5e" }
                    : { backgroundColor: "white" },
                ]}
                onPress={() => setSelectedBank("sekerbank")}
              >
                <Image
                  source={{
                    uri: "https://cdnuploads.aa.com.tr/uploads/sirkethaberleri/Contents/2022/05/06/thumbs_b_c_32f839edf4120abff70a43e895a2e0ad.jpg",
                  }}
                  width={80}
                  height={80}
                  resizeMode="contain"
                />
                <View style={{ flexDirection: "column", gap: 5 }}>
                  <View style={styles.accountInformation}>
                    <Text>Hesap Sahibi:</Text>
                    <Text style={styles.accountInformationText}>
                      {" "}
                      Mehmet Rıdvan Gül
                    </Text>
                  </View>
                  <View style={styles.accountInformation}>
                    <Text>Hesap Numarası:</Text>
                    <Text style={styles.accountInformationText}> 111111</Text>
                  </View>
                  <View style={styles.accountInformation}>
                    <Text>Şube Kodu:</Text>
                    <Text style={styles.accountInformationText}> 111</Text>
                  </View>
                  <View style={styles.accountInformation}>
                    <Text>IBAN:</Text>
                    <Text style={styles.accountInformationText}>
                      {" "}
                      TR1111111111111111
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ marginBottom: 50, marginTop: 15 }}>
              <Button
                text={"Ödeme Yap"}
                backgroundColor={"#ee3a1f"}
                color={"#FFF"}
                borderRadius={12}
              />
            </View>
          </View>
        ) : (
          <View style={{ marginBottom: 50 }}>
            <View style={styles.cardContainer}>
              <Image
                source={{
                  uri: "https://images.rawpixel.com/image_social_landscape/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA3L2pvYjEwNjgtZWxlbWVudC1jaGlwLTAyLWw1dDJxc243LmpwZw.jpg",
                }}
                width={50}
                height={50}
                style={{ marginTop: 40 }}
              />
              <Text style={styles.cardNumber}>
                {cardNumber ? cardNumber.replace(/(\d{4})/g, "$1 ").trim() : ""}
              </Text>
            </View>
            <View>
              <Text>Kart Üzerindeki İsim</Text>
              <Input placeholder={""} borderWidth={1} />
            </View>
            <View>
              <Text>Kart Numarası</Text>
              <Input
                placeholder={""}
                borderWidth={1}
                keyboardType={"numeric"}
                onChangeText={(text) => setCardNumber(text)}
                maxLength={16}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 5,
              }}
            >
              <View style={{ flex: 1 }}>
                <Text>Ay</Text>
                <Input
                  placeholder={""}
                  keyboardType={"numeric"}
                  borderWidth={1}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text>Yıl</Text>
                <Input
                  placeholder={""}
                  keyboardType={"numeric"}
                  borderWidth={1}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text>CVV</Text>
                <Input
                  placeholder={""}
                  keyboardType={"numeric"}
                  borderWidth={1}
                />
              </View>
            </View>
            <View style={{ marginTop: 10 }}>
              <Button
                text={"Siparişi Tamamla"}
                backgroundColor={"#167"}
                borderRadius={5}
                color={"#FFF"}
                fontSize={16}
              />
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

export default PaymentInformations;
