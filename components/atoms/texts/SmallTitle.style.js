import {StyleSheet} from 'react-native';

// styles
import {FONT_SIZES} from '../../../assets/styles/fonts';
import COLORS from '../../../assets/styles/colors';

export default StyleSheet.create({
  SmallTitle: {
    fontSize: FONT_SIZES.small,
    color: COLORS.fontColor,
    fontWeight: '800',
    textAlign: 'left',
    flex: 1,
  },
});
