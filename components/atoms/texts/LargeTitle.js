import React from 'react';
import {Text} from 'react-native';

// styles
import Styles from './LargeTitle.style';

const LargeTitle = ({title, addStyles}) => {
  return <Text style={[Styles.LargeTitle, {...addStyles}]}>{title}</Text>;
};

export default LargeTitle;
