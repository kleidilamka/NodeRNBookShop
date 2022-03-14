import { StyleSheet, Dimensions } from "react-native";

var { width } = Dimensions.get("window");

// Later on in your styles..
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
    marginBottom: 10,
    width: width / 1.5,
    // backgroundColor: '#d9dae0',
    borderRadius: 7,
    paddingLeft: 10,
  },
  email: {
    height: 50,
    marginBottom: 10,
    width: width / 1.5,
    borderColor: "#d9dae0",
    borderWidth: 1,
    borderRadius: 7,
    paddingLeft: 10,
  },
  signInBtn: {
    backgroundColor: "#3faa97",
    marginTop: 10,
    height: 60,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#3faa97",
    height: 60,
    width: width / 1.5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default styles;
