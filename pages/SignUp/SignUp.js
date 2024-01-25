import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import DateTimePicker from "@react-native-community/datetimepicker";
import RNPickerSelect from "react-native-picker-select";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

function SignUp() {
  const navigation = useNavigation();
  const [gender, setGender] = useState();
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
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
  const signUp = () => {
    if (
      !username ||
      !surname ||
      !phone ||
      !mail ||
      !gender ||
      !password ||
      rePassword
    ) {
      Alert.alert("Hata", "Lütfen Alanları Doldurunuz!", [
        { text: "Tamam", style: "cancel" },
      ]);
    }
  };
  return (
    <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: "#F0F8FF" }}>
      <View style={styles.signUpTitle}>
        <Text style={{ fontSize: 24, fontWeight: "700" }}>Kayıt Ol</Text>
        <Text style={{ marginTop: 10 }}>
          Kayıt için aşağıdaki bilgileri doldurunuz..
        </Text>
      </View>
      <View style={styles.inputsContainer}>
        <Input
          placeholder={"Kullanıcı Adı"}
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View style={styles.inputsContainer}>
        <Input placeholder={"Ad"} onChangeText={(text) => setName(text)} />
      </View>
      <View style={styles.inputsContainer}>
        <Input
          placeholder={"Soyad"}
          onChangeText={(text) => setSurname(text)}
        />
      </View>
      <View style={styles.inputsContainer}>
        <Input
          placeholder={"Cep Telefonu"}
          keyboardType={"numeric"}
          onChangeText={(text) => setPhone(text)}
        />
      </View>
      <View style={styles.inputsContainer}>
        <Input
          placeholder={"E-Mail Adresi"}
          onChangeText={(text) => setMail(text)}
        />
      </View>
      <View style={styles.inputsContainer}>
        <View style={{ flex: 1 }}>
          <Text style={styles.accountSettingText}>Doğum Tarihiniz</Text>
          <TouchableOpacity
            onPress={showDatepicker}
            style={{
              padding: 12,
              backgroundColor: "#FFF",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 12,
            }}
          >
            <Text>{date ? date.toLocaleDateString() : Seçiniz}</Text>
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
      </View>
      <View style={styles.inputsContainer}>
        <View style={{ flex: 1 }}>
          <Text style={styles.accountSettingText}>Cinsiyetiniz</Text>
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
      </View>
      <View style={styles.inputsContainer}>
        <Input
          placeholder={"Şifre"}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={styles.inputsContainer}>
        <Input
          placeholder={"Şifre Tekrarı"}
          secureTextEntry={true}
          onChangeText={(text) => setRePassword(text)}
        />
      </View>
      <View style={{ marginTop: 15, marginHorizontal: 15 }}>
        <Button
          text={"Kayıt Ol"}
          borderRadius={15}
          color={"#fff"}
          fontSize={18}
          backgroundColor={"#08e8de"}
          onPress={() => signUp()}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 25,
          marginBottom: 15,
        }}
      >
        <Text>Daha önce hesabınız var mı?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={{ color: "#f40000" }}> Giriş Yap</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
}

export default SignUp;
