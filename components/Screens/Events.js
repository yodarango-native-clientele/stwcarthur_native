import React, {useState, useEffect} from 'react';
import {View, SafeAreaView} from 'react-native';

// templates
import EventsWrapper from '../templates/EventsWrapper';

// styles
import Styles from '../../assets/styles/Globals.style';

const Events = ({route, navigation}) => {
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    const req = await fetch('https://www.stwcarthur.org/api/events');
    const res = await req.json();
    setEvents(res);
  };

  useEffect(() => {
    getEvents();
  }, []);

  const navigateToScreen = event => {
    navigation.navigate('Event', {
      title: event.title,
      details: event.details,
      img: event.thumbnailUrl,
      url: event.url,
      date: event.posted,
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={Styles.mainWrapper}>
        <EventsWrapper action={navigateToScreen} events={events} />
      </View>
    </SafeAreaView>
  );
};

export default Events;
