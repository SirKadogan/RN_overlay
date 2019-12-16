import React, {Component} from 'react';
import styles from './styles';
import {View, ScrollView, Dimensions} from 'react-native';
import Blur from '../UI/Blur/Blur';

class Overlay extends Component {
  state = {
    shouldShowScrollView: false,
  };

  checkShowScrollView = layout => {
    const height = Dimensions.get('window').height;
    if (height < layout.height) {
      this.setState({shouldShowScrollView: true});
    }
  };

  render() {
    return (
      <React.Fragment>
        <Blur onPress={this.props.onPress} />
        <View
          style={
            this.state.shouldShowScrollView
              ? {height: '75%', ...styles.overlayContainer}
              : styles.overlayContainer
          }
          onLayout={event =>
            this.checkShowScrollView(event.nativeEvent.layout)
          }>
          <ScrollView contentContainerStyle={{alignItems: 'center'}}>
            {this.props.children}
          </ScrollView>
        </View>
      </React.Fragment>
    );
  }
}

export default Overlay;
