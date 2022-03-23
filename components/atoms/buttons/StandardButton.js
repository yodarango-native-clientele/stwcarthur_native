import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

// styles
import Styles from './StandardButton.style';

const StandardButton = ({
  title,
  action,
  addButtonStyles,
  addButtonTextStyles,
}) => {
  return (
    <TouchableOpacity
      style={[Styles.StandardButton, {...addButtonStyles}]}
      activeOpacity={0.8}
      onPress={action}>
      <Text
        title={title}
        style={[Styles.StandardButton_text, {...addButtonTextStyles}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default StandardButton;
