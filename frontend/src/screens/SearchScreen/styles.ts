import { StyleSheet, Dimensions } from "react-native";

var { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  textInput: {
    marginTop: 15,
    alignSelf: "center",
    height: 50,
    width: width - 20,
    borderRadius: 10,
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
});

export default styles;
