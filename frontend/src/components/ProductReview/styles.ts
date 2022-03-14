import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  reviewsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    borderRadius: 10,
    padding: 10,
    // borderTopWidth: 1,
    borderBottomWidth: 1,

    borderColor: "lightgrey",
  },
  image: {
    alignSelf: "flex-start",
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 3,
    borderColor: "#3faa97",
  },
  comment: {
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 10,
    flexDirection: "column",
    alignItems: "flex-start",
    flex: 1,
    justifyContent: "center",
    padding: 10,
    marginBottom: 5,

    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  // deleteBtn: {
  //   borderWidth: 1,
  //   padding: 10,

  // },
});

export default styles;
