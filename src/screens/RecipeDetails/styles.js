import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  image: {
    width: "100%",
    height: 118,
    borderRadius: 10,
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(217,217,217,0.5)",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginVertical: 4,
  },
  title: {
    color: colors.black,
    fontSize: 18,
    fontWeight: "500",
  },
  key: {
    fontSize: 12,
    color: colors.black,
    textTransform: "capitalize",
  },
  value: {
    fontSize: 12,
    color: colors.lightGrey2,
  },
  instructionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
  },
  index: {
    fontSize: 20,
    color: colors.grey2,
    marginRight: 16,
  },
  instructionText: {
    fontSize: 14,
    color: colors.black,
    flex: 1,
  },
});

export default styles;
