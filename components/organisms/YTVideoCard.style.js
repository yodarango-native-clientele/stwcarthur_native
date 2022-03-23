import {StyleSheet} from 'react-native';
import COLORS from '../../assets/styles/colors';

export default StyleSheet.create({
  videoWrapper: {
    height: 80,
    flex: 1,
    margin: 10,
    backgroundColor: COLORS.contrastColor,
  },
  imageBackground: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playIcon: {
    tintColor: COLORS.thirdColor,
    width: 35,
    height: 35,
  },
  videoTitle: {
    fontSize: 10,
    backgroundColor: COLORS.background,
    opacity: 0.5,
    flex: 1,
    padding: 5,
  },
});
