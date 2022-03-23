import React from 'react';
import {View} from 'react-native';

// atoms
import IntroImage from '../../atoms/images/IntroImage';

// styles
import Styles from './EventsIntro.style';

const EventsIntro = () => {
  return (
    <View style={Styles.EventsIntroWrapper}>
      <IntroImage
        imageSource={require('../../../assets/images/events_intro.png')}
        addStyles={Styles.img}
      />
    </View>
  );
};

export default EventsIntro;
