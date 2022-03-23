import React, {useState, useEffect} from 'react';
import {View, Linking} from 'react-native';

// molecules
import NotificationWrapper from '../molecules/cards/NotificationWrapper';
import ScheduleWrapper from '../molecules/cards/ScheduleWrapper';
import StandardButton from '../atoms/buttons/StandardButton';
import Logo from '../atoms/images/Logo';

//styles
import Styles from './HomePageIntro.style';
import COLORS from '../../assets/styles/colors';
import InformationalWrapper from '../molecules/cards/InformationalWrapper';

const HomePageIntro = () => {
  const [notification, setNotification] = useState();

  const getNotifications = async () => {
    try {
      const req = await fetch('https://www.stwcarthur.org/api/notifications');
      const res = await req.json();
      console.log(res);
      setNotification(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNotifications();
  }, []);

  return (
    <View style={Styles.HomePageIntro}>
      {notification && (
        <InformationalWrapper
          addStyles={{
            backgroundColor: '#ffc107',
            minHeight: 60,
            marginTop: 0,
            marginBottom: 20,
          }}
          title={notification.title}
          parragraph={notification.description}
          addStylesText={{color: COLORS.background}}
        />
      )}
      <Logo imageSource={require('../../assets/images/Logo_round.png')} />
      <NotificationWrapper />
      <ScheduleWrapper />
      <StandardButton
        action={() =>
          Linking.openURL(
            'https://www.givelify.com/donate/herbert-f-bertha-w-darling-trust-norwich-ny-2j7wy5MjE4NzM=/donation/amount',
          )
        }
        addButtonStyles={{backgroundColor: '#f2f2f2'}}
        addButtonTextStyles={{color: COLORS.background}}
        title={'Give'}
      />
    </View>
  );
};

export default HomePageIntro;
