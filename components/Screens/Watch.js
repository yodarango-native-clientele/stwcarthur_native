import React from 'react';
import {View} from 'react-native';

// templates
import YTVideoList from '../templates/YTVideoList';

// styles
import Styles from '../../assets/styles/Globals.style';

const Watch = () => {
  return (
    <View style={Styles.mainWrapper}>
      <YTVideoList />
    </View>
  );
};

export default Watch;
