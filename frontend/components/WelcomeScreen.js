import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* <Image
        source={require("../assets/NextNoteLogo.png")}
        style={{ borderRadius: 10, height: 50, width: 50, marginBottom: 20 }}
      /> */}
      <View
        style={{
          paddingVertical: 30,
          paddingHorizontal: 20,
          borderWidth: 2,
          borderRadius: 20,
          borderColor: "#D3D3D3",
        }}
      >
        <Text style={{ fontSize: 40 }}>N E X T</Text>
        <Text style={{ fontSize: 40 }}>N O T E</Text>
      </View>

      <Text style={{ marginBottom: 50, marginTop: 20, fontSize: 17 }}>
        Intelligent Note Taking
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login");
        }}
        style={{
          paddingHorizontal: 5,
          alignItems: "center",
          paddingVertical: 15,
          backgroundColor: "#DDDDDD",
          width: "80%",
          borderRadius: 10,
          marginVertical: 7,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

export default WelcomeScreen;
