import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";

const styles = StyleSheet.create({
    buttonContainer: {
      backgroundColor: COLORS.LIGHT_BLUE,
      height: 40,
      width: 330,
      borderRadius: 10
    },

    buttonText: {
        fontSize: 20,
        color: COLORS.WHITE,
        lineHeight: 24,
        textAlign: 'center',
        paddingVertical: 7,
    }
  });

  export default styles;