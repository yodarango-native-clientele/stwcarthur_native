import React from 'react';
import {View} from 'react-native';

//atoms
import SmallTitle from '../../atoms/texts/SmallTitle';
import StdParragrph from '../../atoms/texts/Parragraph';

// styles
import Styles from './NotificationWrapper.style';

const InformationalWrapper = ({
  title,
  parragraph,
  addStyles,
  addStylesText,
}) => {
  return (
    <View
      style={[Styles.NotificationWrapper, {...addStyles}]}
      showsVerticalScrollIndicator={false}>
      <SmallTitle title={title} addStyles={addStylesText} />
      <StdParragrph context={parragraph} addStyles={addStylesText} />
    </View>
  );
};

export default InformationalWrapper;
