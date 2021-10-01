import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';

const styles = StyleSheet.create({
  inputContainer: {
    width: '80%',
  },
  loginTextInputText: {
    fontSize: 20,
    color: COLORS.WHITE,
    lineHeight: 24,
    paddingVertical: 7,
  },
  loginErrorText: {
    fontSize: 20,
    color: COLORS.RED,
    lineHeight: 24,
    paddingVertical: 7,
  }
});

export default styles;
