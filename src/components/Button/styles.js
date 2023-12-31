import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    alignSelf: "center",
    borderRadius: 10,
    padding: 15,
    marginTop: 670,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "500",
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 8,
    marginTop: 3,
  },
});

export default styles;
