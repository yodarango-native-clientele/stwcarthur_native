import React from 'react';
import {ScrollView, SafeAreaView} from 'react-native';

// templates

// styles
import Styles from '../../assets/styles/Globals.style';
import Spacer from '../atoms/spacers/Spacer';
import HomeIntro from '../templates/HomeIntro';

const Home = ({route, navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={Styles.mainWrapper}>
        <HomeIntro />
        <Spacer size={40} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
