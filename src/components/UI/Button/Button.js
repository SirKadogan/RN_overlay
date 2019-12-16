import React from 'react';
import {TouchableWithoutFeedback, View, Text} from 'react-native';
import styles from './styles';

const button = props => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={[{...props.buttonStyle}, styles.button]}>
        <Text style={[{...props.textStyle}, styles.text]}>{props.title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default button;
