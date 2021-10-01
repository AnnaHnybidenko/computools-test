import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";

const styles = StyleSheet.create({
    feedsContainer: {
      flex: 1,
    //   backgroundColor: '#000',
      height: '10%',
      width: '100%',
    },

    feedsText: {
        fontSize: 20,
        color: COLORS.WHITE,
        lineHeight: 24,
        textAlign: 'center',
        paddingVertical: '10%',
    }
    

  
  });

  export default styles;