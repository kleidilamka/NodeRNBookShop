import { StyleSheet, Dimensions } from "react-native";

var { width, height } = Dimensions.get("window");

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#fff",
    height: 400,
    width: width / 1.3,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#3c3c3c",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.39,
    shadowRadius: 6.3,
    elevation: 13,
  },
  title: {
    position: "absolute",
    left: 15,
    top: 15,
    fontSize: 25,
    fontWeight: "800",
  },
  input: {
    borderWidth: 1,
    borderColor: "#d9dae0",
    height: 50,
    marginBottom: 20,
    width: "80%",
    // backgroundColor: '#d9dae0',
    borderRadius: 7,
    paddingLeft: 10,
  },
  forgotPasswordBtn: {
    marginBottom: 40,
    alignSelf: "flex-end",
    marginRight: 25,
  },
  signInBtn: {
    backgroundColor: "#3faa97",
    height: 60,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  notRegistered: {
    flexDirection: "row",
    marginVertical: 18,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 25,
  },
});

export default styles;
