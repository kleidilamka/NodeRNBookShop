import { StyleSheet, Dimensions } from "react-native";

var { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: height - 230,

    width: width - 50,
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
  image: {
    borderWidth: 2,
    borderColor: "#543534",
    borderRadius: 100,
    height: width / 3.5,
    width: width / 3.5,
    marginBottom: 25,
  },
  input: {
    height: 50,
    marginBottom: 20,
    width: width - 100,
    // backgroundColor: '#d9dae0',
    borderRadius: 7,
    paddingLeft: 10,
    shadowColor: "#3c3c3c",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  submitButton: {
    backgroundColor: "#3faa97",
    height: 60,
    width: width - 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
  },
});

export default styles;
