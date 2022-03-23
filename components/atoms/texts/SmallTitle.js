import React from 'react';
import {Text} from 'react-native';

// styles
import Styles from './SmallTitle.style';

const SmallTitle = ({title, addStyles}) => {
  return <Text style={[Styles.SmallTitle, {...addStyles}]}>{title}</Text>;
};

export default SmallTitle;
