import {StyleSheet} from 'react-native';

//styles
import COLORS from '../../../assets/styles/colors';
import {FONT_FAMILIES, FONT_SIZES} from '../../../assets/styles/fonts';

export default StyleSheet.create({
  StandardButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: COLORS.secondaryColor,
  },
  StandardButton_text: {
    height: '100%',
    textAlign: 'center',
    color: COLORS.fontColor,
    fontSize: FONT_SIZES.small,
    fontFamily: FONT_FAMILIES.secondary,
  },
});
