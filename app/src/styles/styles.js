import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  button: {
    fontSize: 40,
    height: Dimensions.get("window").width / 4,
    width: Dimensions.get("window").width / 4,
    padding: 20,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#333",
    backgroundColor: "#f4f4f4",
    elevation: 1,
    color: "#333"
  },
  display: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
    alignItems: "flex-end"
  },
  displayValue: {
    fontSize: 60,
    color: "white"
  },
  operationButton: {
    color: "#fff",
    backgroundColor: "#fa8231"
  },
  buttonDouble: {
    width: (Dimensions.get("window").width / 4) * 2
  },
  buttonTriple: {
    width: (Dimensions.get("window").width / 4) * 3
  }
});

export default styles;
