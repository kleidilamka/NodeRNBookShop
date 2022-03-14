import { StyleSheet, Dimensions } from "react-native";
var { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 20,
    padding: 10,
    borderRadius: 10,
    marginTop: 8,
    marginBottom: 20,
    marginLeft: 15,
    alignItems: "center",
    backgroundColor: "#fcfcfc",
    alignSelf: "center",
  },
  image: {
    maxWidth: width / 2.3,
    maxHeight: width / 2.3,
    width: width / 2.3,
    height: width / 2.3,

    backgroundColor: "transparent",
    marginBottom: 6,
    borderRadius: 4,
  },
  title: {
    alignSelf: "center",
  },
});
export default styles;
