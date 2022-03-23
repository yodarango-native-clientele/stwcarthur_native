import React from 'react';
import {View} from 'react-native';
import COLORS from '../../../assets/styles/colors';

//atoms
import StdParragrph from '../../atoms/texts/Parragraph';

// styles
import Styles from './ScheduleWrapper.style';

const ScheduleWrapper = () => {
  return (
    <View style={Styles.wrapper} showsVerticalScrollIndicator={false}>
      <StdParragrph
        context={'Sunday 10am & 6pm'}
        addStyles={{
          fontSize: 10,
          color: COLORS.secondaryColor,
          textAlign: 'center',
        }}
      />
      <StdParragrph
        context={'Wednesday: 7:30pm'}
        addStyles={{
          fontSize: 10,
          color: COLORS.secondaryColor,
          textAlign: 'center',
        }}
      />
    </View>
  );
};

export default ScheduleWrapper;
