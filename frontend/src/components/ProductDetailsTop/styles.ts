import { StyleSheet, Dimensions } from "react-native";

var { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: "#fff",
    width: width - 30,
    height: width / 2,
    marginTop: 20,
    borderRadius: 10,
    shadowColor: "#3c3c3c",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
    flexDirection: "row",
  },
  rightContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: width / 2 - 15,
  },
  rating: {
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    height: width / 2.3,
    width: width / 3,
    borderRadius: 4,
  },
  leftContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    width: width / 2 - 15,
    padding: 30,
  },
  title: {
    fontSize: 20,
  },
});

export default styles;
