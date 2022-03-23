import React from 'react';
import {ImageBackground, View} from 'react-native';

// molecules
import InfoWrapper from '../molecules/cards/InfoWrapper';

//styles
import Styles from './EventCard.style';

const EventCard = ({event, action}) => {
  return (
    <View style={Styles.EventCard}>
      <ImageBackground
        source={{uri: event.thumbnailUrl}}
        style={Styles.backgroundImage}
        imageStyle={{borderRadius: 5}}>
        <InfoWrapper
          title={event.title}
          description={event.description}
          action={action}
        />
      </ImageBackground>
    </View>
  );
};

export default EventCard;
