import React, {useState, useEffect} from 'react';
import {FlatList, View} from 'react-native';

// organisms
import YTVideoCard from '../organisms/YTVideoCard';

//spacers
import Spacer from '../atoms/spacers/Spacer';

// styles
import Styles from './YTVideoList.style';

const YTVideoList = () => {
  const [getVideos, setgetVideos] = useState([]);

  const YoutubeAPi = `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=UUbMTt_TH4RMe_p8FWFE_jBA&key=AIzaSyBoQ6N3fthUF2I6doUZUGPHkgInx_NYf-4&part=snippet&maxResults=10`;

  const getYTVideos = async () => {
    const request = await fetch(YoutubeAPi);
    const response = await request.json();

    setgetVideos(response.items);
  };

  useEffect(() => {
    getYTVideos();
  }, []);

  return (
    <View>
      <FlatList
        style={Styles.listWrapper}
        data={getVideos}
        renderItem={({item}) => <YTVideoCard video={item} />}
        numColumns={2}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<Spacer size={60} />}
      />
    </View>
  );
};
export default YTVideoList;
