import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
  },
  subTotalPrice: {
    marginLeft: 12,
    marginTop: 15,
    fontSize: 16,
    fontWeight: "600",
  },
  deleteBtn: {
    borderRadius: 10,
    backgroundColor: "#fff",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    shadowColor: "#3c3c3c",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  buyBtn: {
    borderRadius: 10,
    backgroundColor: "#3faa97",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    flex: 4,
  },
  btnText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "400",
  },
});

export default styles;
