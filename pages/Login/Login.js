import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Input from "../../components/Input";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/Button";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: "#F0F8FF" }}>
      <View style={styles.loginTitle}>
        <Text style={{ fontSize: 24, fontWeight: "700" }}>Hoşgeldin</Text>
        <Text style={{ marginTop: 10 }}>Giriş yaparak devam ediniz..</Text>
      </View>
      <View style={styles.inputsContainer}>
        <Input
          placeholder="Kullanıcı Adı"
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View style={styles.inputsContainer}>
        <Input
          placeholder="Şifreniz"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={{ alignItems: "flex-end", marginTop: 25 }}>
        <Text style={{ marginRight: 15 }}>Şifremi Unuttum</Text>
      </View>
      <View style={{ marginHorizontal: 15, marginTop: 25 }}>
        <Button
          text={"Giriş Yap"}
          color={"white"}
          fontSize={18}
          borderRadius={15}
          onPress={() => navigation.navigate("Home")}
          backgroundColor={"#08e8de"}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 25,
        }}
      >
        <Text>Hesabınız yok mu?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={{ color: "#f40000" }}> Şimdi oluşturun</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;
