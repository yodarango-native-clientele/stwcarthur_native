import React from 'react';
import {Image} from 'react-native';

import Styles from './StandardIcon.style';

const StandardIcon = ({logoSource}) => {
  return <Image source={{uri: logoSource}} style={Styles.StandardLogo} />;
};

export default StandardIcon;
