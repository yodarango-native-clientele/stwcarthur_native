import React from 'react';
import {View} from 'react-native';

// molecules
import HomePageIntro from '../organisms/HomePageIntro';

//styles
import Styles from './HomeIntro.style';

const HomeIntro = () => {
  return (
    <View style={Styles.HomeIntro}>
      <HomePageIntro />
    </View>
  );
};

export default HomeIntro;
