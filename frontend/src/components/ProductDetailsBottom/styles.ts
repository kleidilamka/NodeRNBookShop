import { StyleSheet, Dimensions } from "react-native";

var { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width - 20,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: "#3c3c3c",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 5,
    marginTop: 4,
  },
  underline: {
    height: 2,
    width: "100%",
    backgroundColor: "gold",
  },
  descriptionContainer: {
    marginTop: 10,
    marginHorizontal: 10,
    alignItems: "center",
    flex: 1,
  },
  reviewsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
    marginTop: 10,
    marginHorizontal: 10,
    alignItems: "center",
  },
  buyBtn: {
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "#3faa97",
    bottom: 13,
    width: width - 40,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
  },
  input: {
    borderRadius: 10,
    paddingHorizontal: 20,
    width: width - 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#fff",
    shadowColor: "#3c3c3c",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  btnText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "400",
  },
  active: {
    color: "#000",
    fontSize: 20,
    marginTop: 5,
  },
  activeDark: {
    color: "lightgrey",
    fontSize: 20,
    marginTop: 5,
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
});

export default styles;
