import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";


const styles = StyleSheet.create({
    headerContainer: {
      backgroundColor: COLORS.LIGHT_BLUE,
      height: '10%',
      width: '100%',
      flexDirection: 'row'
    },

    headerText: {
        flex: 1,
        fontSize: 20,
        color: COLORS.WHITE,
        lineHeight: 24,
        textAlign: 'center',
        paddingVertical: '10%',
    },

    headerButton: {
      width: '50%',
      height: '100%',
      backgroundColor: COLORS.LIGHT_BLUE,
    },

    headerLogo: {

    }

  
  });

  export default styles;