import React from 'react';
import {View} from 'react-native';

// atoms
import IntroImage from '../../atoms/images/IntroImage';
import SmallTitle from '../../atoms/texts/SmallTitle';
import LargeTitle from '../../atoms/texts/LargeTitle';

// styles
import Styles from './SingleEventIntro.style';

const SingleEventWrapper = ({title, image, date}) => {
  return (
    <View style={Styles.wrapper}>
      <LargeTitle title={title} addStyles={Styles.largeTitle} />
      <IntroImage imageSource={image} addStyles={Styles.image} />
      <SmallTitle title={date} addStyles={Styles.color} />
    </View>
  );
};

export default SingleEventWrapper;
