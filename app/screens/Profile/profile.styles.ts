import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: COLORS.SMOOTH_GREY,
    width: '100%',
    alignItems: 'center',
  },
  profileImage: {
    borderRadius: 50,
    width: 100,
    height: 100,
  },
  profileItemContainer: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: COLORS.LIGHT_BLUE,
    borderRadius: 20,
    marginTop: 20,
    padding: 20,
    alignItems: 'center',
    overflow: 'hidden'
  },
  profileTextContainer: {
    padding: 10,
  },
  profileText: {
    fontSize: 20,
    color: COLORS.WHITE,
    lineHeight: 24,
    paddingVertical: 5,
    flex: 1,
    flexWrap: "wrap",
  },
  profileButton: {
    backgroundColor: COLORS.LIGHT_BLUE,
    borderRadius: 10,
    width: '90%',
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
  },
});

export default styles;
