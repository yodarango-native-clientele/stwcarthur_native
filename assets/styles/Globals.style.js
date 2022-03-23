import {StyleSheet} from 'react-native';
import COLORS from '../../assets/styles/colors';

export default StyleSheet.create({
  tabBar: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLORS.contrastColor,
    position: 'absolute',
  },
  globalWrapper: {
    backgroundColor: COLORS.background,
  },
  mainWrapper: {
    backgroundColor: COLORS.background,
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
  },
});
