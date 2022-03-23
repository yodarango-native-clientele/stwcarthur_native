import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';

//atoms
import Spacer from '../atoms/spacers/Spacer';
import StandardVectorIcon from '../atoms/images/StandardVectorIcon';

// organisms
import SingleEvent from '../organisms/SingleEvent';

//styles
import Styles from './SingleEventWrapper.style';
import backIcon from '../../assets/images/icons/back.png';

const SingleEventWrapper = ({title, date, details, image, url, navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={Styles.Wrapper}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <StandardVectorIcon iconSource={backIcon} addStyles={Styles.iconTint} />
      </TouchableOpacity>
      <SingleEvent
        title={title}
        date={date}
        details={details}
        image={image}
        url={url}
      />
      <Spacer size={20} />
    </ScrollView>
  );
};

export default SingleEventWrapper;
