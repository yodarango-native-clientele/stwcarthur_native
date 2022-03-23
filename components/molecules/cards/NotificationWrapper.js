import React from 'react';
import {View} from 'react-native';
import StdParragrph from '../../atoms/texts/Parragraph';

//atoms
import SmallTitle from '../../atoms/texts/SmallTitle';

// styles
import Styles from './NotificationWrapper.style';

const NotificationWrapper = () => {
  return (
    <View
      style={Styles.NotificationWrapper}
      showsVerticalScrollIndicator={false}>
      <StdParragrph
        context={
          'Welcome to Spirit and Truth Worship Center, the apostolics in the Gap...'
        }
      />
      <SmallTitle title={'Ezekiel 22:30'} />
    </View>
  );
};

export default NotificationWrapper;
