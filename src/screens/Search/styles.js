import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    paddingBottom: 100,
    flex: 1,
  },
  input: {
    width: "88%",
  },
  title: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
  results: {
    alignItems: "center",
    marginTop: 10,
  },
  result: {
    marginHorizontal: 15,
    width: 155,
  },
});

export default styles;
