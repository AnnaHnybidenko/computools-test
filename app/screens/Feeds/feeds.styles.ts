import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';

const styles = StyleSheet.create({
  feedsContainer: {
    flex: 1,
    backgroundColor: COLORS.SMOOTH_GREY,
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },

  feedContainer: {
    flex: 1,
    height: 250,
    width: 350,
    margin: 4,
  },

  feedTextContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#000',
    opacity: 0.6,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },

  feedText: {
    width: 350,
    fontSize: 20,
    color: COLORS.WHITE,
    lineHeight: 24,
    paddingVertical: '2%',
    textAlign: 'center',
  },

  feedImage: {
    flex: 1,
    borderRadius: 10,
    width: '100%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
