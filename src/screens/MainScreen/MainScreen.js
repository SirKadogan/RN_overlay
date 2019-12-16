import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';

import CustomButton from '../../components/UI/Button/Button';
import Overlay from '../../components/Overlay/Overlay';

class MainScreen extends Component {
  state = {
    overlay: false,
  };

  toggleOverlay = () => {
    this.setState(prevState => {
      return {overlay: !prevState.overlay};
    });
  };

  render() {
    let overlay = null;

    if (this.state.overlay) {
      overlay = (
        <Overlay onPress={this.toggleOverlay}>
          <Text style={styles.title}>This overlay adapts to the content</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            luctus elit sed tellus maximus dictum. Duis pulvinar enim nec felis
            convallis, vel ornare turpis vestibulum. Pellentesque lectus eros,
            maximus id venenatis eu, placerat non urna. In egestas tortor a
            lectus mattis porta. Praesent vitae arcu at lectus rhoncus
            efficitur. Nullam et blandit quam. Integer finibus rhoncus massa,
            pharetra auctor leo scelerisque ut. Nullam pharetra feugiat ligula
            ut porttitor. Morbi placerat diam vitae porta dictum. In semper,
            nunc non cursus porta, felis dui laoreet nibh, a commodo justo massa
          </Text>

          <CustomButton
            onPress={this.toggleOverlay}
            title={'Close'}
            buttonStyle={{backgroundColor: '#d31'}}
          />
        </Overlay>
      );
    }
    return (
      <View style={styles.mainView}>
        <Text style={styles.appTitle}>Adaptive Overlay</Text>
        {overlay}
        <CustomButton onPress={this.toggleOverlay} title={'Press to toggle'} />
      </View>
    );
  }
}

export default MainScreen;
