import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: COLORS.LIGHT_BLUE,
    height: '7%',
    width: '100%',
    flexDirection: 'row',
  },

  headerText: {
    flex: 1,
    fontSize: 20,
    color: COLORS.WHITE,
    lineHeight: 24,
    textAlign: 'center',
    paddingVertical: '7%',
  },

  headerButton: {
    width: '50%',
    height: '100%',
    backgroundColor: COLORS.LIGHT_BLUE,
  },

  headerButtonActive: {
    width: '50%',
    height: '100%',
    backgroundColor: COLORS.LIGHT_BLUE,
    borderBottomWidth: 4,
    borderColor: COLORS.SMOOTH_BLUE,
  },
});

export default styles;
