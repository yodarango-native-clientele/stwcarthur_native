import {StyleSheet} from 'react-native';

// styles
import {FONT_SIZES} from '../../../assets/styles/fonts';
import COLORS from '../../../assets/styles/colors';

export default StyleSheet.create({
  StdParragrph: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.fontColor,
    fontWeight: '400',
    textAlign: 'left',
    flex: 2,
    flexWrap: 'wrap',
  },
});
