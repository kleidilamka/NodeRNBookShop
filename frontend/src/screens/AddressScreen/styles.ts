import { StyleSheet, Dimensions } from "react-native";

var { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  root: { alignItems: "center", flex: 1 },
  row: {
    marginVertical: 5,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderRadius: 10,
    padding: 20,
    width: width - 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    shadowColor: "#3c3c3c",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  checkoutButton: {
    borderRadius: 10,
    backgroundColor: "#3faa97",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    marginTop: 20,
  },
  errorLabel: {
    color: "red",
  },
});

export default styles;
