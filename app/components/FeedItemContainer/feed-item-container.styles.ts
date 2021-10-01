import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";

const styles = StyleSheet.create({
    immageContainer: {
      backgroundColor: COLORS.LIGHT_BLUE,
      height: '20%',
      width: '90%',
      borderRadius: 5
    },

    imageText: {
        fontSize: 20,
        color: COLORS.WHITE,
        lineHeight: 24,
        textAlign: 'center',
        paddingVertical: 7,
    },

    textBorder: {

    }
  });

  export default styles;