import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';

// organisms
import EventCard from '../organisms/EventCard';

// molecules
import EventsIntro from '../molecules/layouts/EventsIntro';

//styles
import Styles from './EventsWrapper.style';

const EventsWrapper = ({events, action}) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={Styles.EventsWrapper}>
      <EventsIntro />
      {events.map(event => {
        return (
          <EventCard
            action={() => action(event)}
            event={event}
            key={event._id}
          />
        );
      })}
    </ScrollView>
  );
};

export default EventsWrapper;
