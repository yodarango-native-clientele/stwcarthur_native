import {StyleSheet} from 'react-native';
import COLORS from '../../../assets/styles/colors';

export default EventCard = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    minHeight: 50,
    marginTop: 20,
    borderColor: COLORS.secondaryColor,
    borderWidth: 2,
    padding: 10,
    borderRadius: 15,
    shadowColor: COLORS.contrastColor,
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },
});
