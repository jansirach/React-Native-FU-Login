import React, { useState, useCallback } from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import { Image } from "expo-image";
import Login02 from "./Login02";
import { FontFamily, Padding, Color, Border, FontSize } from "../GlobalStyles";

const LoginForm = () => {
  const [loginbuttonVisible, setLoginbuttonVisible] = useState(false);

  const openLoginbutton = useCallback(() => {
    setLoginbuttonVisible(true);
  }, []);

  const closeLoginbutton = useCallback(() => {
    setLoginbuttonVisible(false);
  }, []);

  return (
    <>
      <View style={styles.loginResources}>
        <Text style={styles.fuCafeteriaPos}>FU Cafeteria POS</Text>
        <Image
          style={[styles.loginResourcesChild, styles.fuLogo1IconPosition]}
          contentFit="cover"
          source={require("../assets/line-3.png")}
        />
        <TextInput
          style={[styles.enteruserid, styles.enteruseridBorder]}
          placeholder="Enter user ID"
          keyboardType="default"
          multiline={false}
          placeholderTextColor="#8692a6"
        />
        <TextInput
          style={[styles.enterpassword, styles.enteruseridBorder]}
          placeholder="Enter password"
          autoCapitalize="sentences"
          multiline={false}
          secureTextEntry={true}
          placeholderTextColor="#8692a6"
        />
        <TouchableOpacity
          style={styles.loginbutton}
          activeOpacity={0.1}
          onPress={openLoginbutton}
        >
          <Text style={styles.login}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.forgotPassword}
          activeOpacity={0.1}
          onPress={() => {}}
        >
          <Text style={styles.forgotPassword1}>Forgot Password</Text>
        </TouchableOpacity>
        <Text style={[styles.userId, styles.userIdTypo]}>User ID:</Text>
        <Text style={[styles.password, styles.userIdTypo]}>Password:</Text>
        <Image
          style={[styles.fuLogo1Icon, styles.fuLogo1IconPosition]}
          contentFit="cover"
          source={require("../assets/fu-logo-1.png")}
        />
      </View>

      <Modal animationType="fade" transparent visible={loginbuttonVisible}>
        <View style={styles.loginbuttonOverlay}>
          <Pressable style={styles.loginbuttonBg} onPress={closeLoginbutton} />
          <Login02 onClose={closeLoginbutton} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  fuLogo1IconPosition: {
    left: "50%",
    position: "absolute",
  },
  enteruseridBorder: {
    fontSize: 17,
    fontFamily: FontFamily.interRegular,
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_mini,
    borderWidth: 1,
    borderColor: Color.colorDarkgray,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    width: 408,
  },
  userIdTypo: {
    height: 21,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    transform: [
      {
        rotate: "0.01deg",
      },
    ],
    left: 0,
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  fuCafeteriaPos: {
    marginLeft: -169,
    top: 93,
    fontSize: 37,
    fontFamily: FontFamily.interBold,
    color: Color.colorBrown,
    width: 339,
    height: 46,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  loginResourcesChild: {
    marginLeft: -179,
    top: 158,
    width: 359,
    height: 3,
  },
  enteruserid: {
    top: 258,
  },
  enterpassword: {
    top: 416,
  },
  loginbuttonOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  loginbuttonBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  login: {
    fontSize: 25,
    fontFamily: FontFamily.headerBold,
    color: Color.white,
    textAlign: "center",
    fontWeight: "700",
  },
  loginbutton: {
    marginTop: 257,
    marginLeft: -204,
    top: "50%",
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorBrown,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    paddingHorizontal: Padding.p_146xl,
    paddingVertical: Padding.p_mini,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    position: "absolute",
    width: 408,
  },
  forgotPassword1: {
    fontSize: 15,
    textDecoration: "underline",
    color: Color.colorDarkslateblue,
    textAlign: "right",
    width: 122,
    transform: [
      {
        rotate: "0.01deg",
      },
    ],
    fontFamily: FontFamily.interRegular,
    alignItems: "center",
    display: "flex",
  },
  forgotPassword: {
    left: 286,
    top: 488,
    position: "absolute",
  },
  userId: {
    top: 220,
    width: 113,
  },
  password: {
    top: 378,
    width: 120,
  },
  fuLogo1Icon: {
    marginLeft: -49,
    top: 0,
    width: 99,
    height: 85,
  },
  loginResources: {
    height: 632,
    width: 408,
  },
});

export default LoginForm;
