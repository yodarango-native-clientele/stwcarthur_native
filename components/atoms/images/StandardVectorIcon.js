import React from 'react';
import {Image} from 'react-native';

import Styles from './StandardVerctorIcon.style';

const StandardVectorIcon = ({iconSource, addStyles}) => {
  return (
    <Image source={iconSource} style={[Styles.VectorIcon, {...addStyles}]} />
  );
};

export default StandardVectorIcon;
