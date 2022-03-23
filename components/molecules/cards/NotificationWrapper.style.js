import {StyleSheet} from 'react-native';
import COLORS from '../../../assets/styles/colors';

export default EventCard = StyleSheet.create({
  NotificationWrapper: {
    minHeight: 120,
    marginTop: 20,
    backgroundColor: COLORS.primaryColorContrast,
    padding: 10,
    borderRadius: 10,
    shadowColor: COLORS.contrastColor,
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },
});
