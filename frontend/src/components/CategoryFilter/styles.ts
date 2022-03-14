import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 9,
    fontSize: 25,
  },
  active: {
    color: "#000",
  },
  inactive: {
    color: "#67707D",
    fontSize: 20,
    marginTop: 5,
  },
  inactiveDark: {
    color: "lightgrey",
    fontSize: 20,
    marginTop: 5,
  },
  pointer: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#000",
    height: 9,
    width: 9,
    alignSelf: "center",
  },
});

export default styles;
