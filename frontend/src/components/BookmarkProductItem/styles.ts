import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "#fff",
    marginVertical: 10,
    paddingVertical: 20,

    marginHorizontal: 10,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  image: {
    height: 100,
    resizeMode: "contain",
    flex: 2,
  },
  middleContainer: {
    flex: 2,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: "normal",
    textDecorationLine: "line-through",
  },
  ratingsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  star: {
    margin: 2,
  },
  rightContainer: {
    marginRight: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteOneBtn: {
    position: "absolute",
    right: 0,
    bottom: 0,
    borderWidth: 1,
    borderTopStartRadius: 10,
    borderBottomEndRadius: 10,

    width: 50,
    alignItems: "center",
  },
});

export default styles;
