import React from 'react';
import {Text} from 'react-native';
import Styles from './Parragraph.style';

const StdParragrph = ({context, addStyles}) => {
  return <Text style={[Styles.StdParragrph, {...addStyles}]}>{context}</Text>;
};

export default StdParragrph;
