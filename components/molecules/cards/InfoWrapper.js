import React from 'react';
import {View} from 'react-native';

// atoms
import StandardButton from '../../atoms/buttons/StandardButton';
import MediumTitle from '../../atoms/texts/MediumTitle';
import StdParragrph from '../../atoms/texts/Parragraph';

//styles
import Styles from './InfoWrapper.style';

const InfoWrapper = ({title, description, action}) => {
  return (
    <View style={Styles.infoWrapper}>
      <MediumTitle title={title} />
      <StdParragrph context={description} />
      <StandardButton
        title={'More info'}
        action={action}
        addButtonTextStyles={{height: 20}}
      />
    </View>
  );
};

export default InfoWrapper;
