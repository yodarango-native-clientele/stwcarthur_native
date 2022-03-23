import React from 'react';
import {Image} from 'react-native';

import Styles from './IntroImage.syle';

const StandardIcon = ({imageSource, addStyles}) => {
  return (
    <Image source={imageSource} style={[Styles.IntroImage, {...addStyles}]} />
  );
};

export default StandardIcon;
