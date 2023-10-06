import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    alignSelf: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    padding: 10,
  },
  input: {
    color: colors.black,
    fontSize: 15,
    flex: 1,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
});

export default styles;
