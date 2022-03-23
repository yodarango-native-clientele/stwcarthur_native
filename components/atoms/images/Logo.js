import React from 'react';
import {Image, View} from 'react-native';

import Styles from './Logo.style';

const Logo = ({imageSource, addStyles}) => {
  return (
    <View style={Styles.LogoWrapper}>
      <Image source={imageSource} style={[{...addStyles}, Styles.Logo]} />
    </View>
  );
};

export default Logo;
