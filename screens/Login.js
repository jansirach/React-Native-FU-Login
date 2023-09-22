import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import LoginForm from "../components/LoginForm";
import { FontFamily, Color } from "../GlobalStyles";

const Login = () => {
  return (
    <View style={[styles.login, styles.loginFlexBox]}>
      <LoginForm />
      <View style={[styles.frame, styles.loginFlexBox]}>
        <Text style={styles.copyright2023Container}>
          <Text style={styles.copyright2023}>{`Copyright © 2023 - 2024 `}</Text>
          <Text style={styles.foundationUniversity}>Foundation University</Text>
          <Text style={styles.copyright2023}> - CCS Department</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginFlexBox: {
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  copyright2023: {
    fontFamily: FontFamily.interRegular,
    color: Color.white,
  },
  foundationUniversity: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorBrown,
  },
  copyright2023Container: {
    fontSize: 12,
    textAlign: "center",
  },
  frame: {
    backgroundColor: "#343a40",
    width: 1366,
    height: 50,
    paddingHorizontal: 488,
    paddingVertical: 13,
    marginTop: 157,
  },
  login: {
    backgroundColor: "#fafafa",
    flex: 1,
    width: "100%",
    height: 1024,
    alignItems: "center",
  },
});

export default Login;
