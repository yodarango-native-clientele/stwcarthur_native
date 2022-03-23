import React from 'react';
import {View, Linking} from 'react-native';

//atoms
import StdParragrph from '../atoms/texts/Parragraph';
import StandardButton from '../atoms/buttons/StandardButton';

// molecules
import SingleEventIntro from '../molecules/layouts/SingleEventIntro';

//styles
import Styles from './SingleEvent.style';

const SingleEventWrapper = ({image, title, date, details, url}) => {
  return (
    <View style={Styles.wrapper}>
      <SingleEventIntro image={image} title={title} date={date} />
      <StdParragrph context={details} addStyles={Styles.parragraph} />
      {url && (
        <StandardButton
          title={'Pay For Event'}
          action={() => Linking.openURL(url)}
        />
      )}
    </View>
  );
};

export default SingleEventWrapper;
