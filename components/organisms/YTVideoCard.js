import React from 'react';
import {Linking} from 'react-native';

import {
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import SmallTitle from '../atoms/texts/SmallTitle';

// molecules

//styles
import Styles from './YTVideoCard.style';

const YTVideoCard = ({video}) => {
  return (
    <View style={Styles.videoWrapper}>
      <ImageBackground
        style={Styles.imageBackground}
        source={{uri: video.snippet.thumbnails.high.url}}
        resizeMode={'cover'}>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              `https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`,
            )
          }>
          <Image
            source={require('../../assets/images/icons/play.png')}
            style={Styles.playIcon}
          />
        </TouchableOpacity>
      </ImageBackground>
      <SmallTitle
        title={video.snippet.title /*.split('|')[0]*/}
        addStyles={Styles.videoTitle}
      />
    </View>
  );
};

export default YTVideoCard;
