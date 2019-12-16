import React from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';
const blur = props => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.blur}></View>
    </TouchableWithoutFeedback>
  );
};

export default blur;
