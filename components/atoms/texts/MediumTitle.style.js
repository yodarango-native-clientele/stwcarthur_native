import {StyleSheet} from 'react-native';

// styles
import { FONT_SIZES } from '../../../assets/styles/fonts';
import COLORS from  '../../../assets/styles/colors'

export default StyleSheet.create({
    MediumTitle:{
        fontSize: FONT_SIZES.medium,
        color: COLORS.fontColor,
        fontWeight: '800',
        textAlign: 'left',
        flex: 1,
    }
})