// pages
import React from 'react';
import {ScrollView, Text, Linking} from 'react-native';

// styles
import Styles from '../../../assets/styles/Globals.style';
import SingleEventWrapper from '../../templates/SingleEventWrapper';

const Event = ({route, navigation}) => {
  const {title, details, img, date, url} = route.params;

  return (
    <ScrollView style={Styles.mainWrapper}>
      <SingleEventWrapper
        title={title}
        details={details}
        date={date}
        image={{uri: img}}
        url={url}
        navigation={navigation}
      />
    </ScrollView>
  );
};

export default Event;
