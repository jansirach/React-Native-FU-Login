import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Login02 = ({ onClose }) => {
  return (
    <View style={[styles.login02, styles.login02Layout]}>
      <Text style={styles.loginSuccessful}>Login Successful</Text>
      <Image
        style={[styles.groupIcon, styles.login02Layout]}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  login02Layout: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  loginSuccessful: {
    marginLeft: -86,
    top: 246,
    left: "50%",
    fontSize: FontSize.headerBold_size,
    fontWeight: "700",
    fontFamily: FontFamily.headerBold,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  groupIcon: {
    height: "33.33%",
    width: "33.33%",
    top: "25.67%",
    right: "32%",
    bottom: "41%",
    left: "34.67%",
    overflow: "hidden",
    position: "absolute",
  },
  login02: {
    backgroundColor: Color.white,
    width: 300,
    height: 300,
  },
});

export default Login02;
