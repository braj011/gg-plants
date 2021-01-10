import React, {useRef} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

export interface Props {
  header: string;
}

export const Header: React.FC<Props> = props => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/img/green_leaf_background.jpg')}
        style={styles.imageBackground}
      />
      <Text style={styles.text}>{props.header}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: 'red',
    // borderWidth: 2,
  },
  imageBackground: {width: '100%', height: '100%'},
  text: {
    position: 'absolute',
    right: 20,
    color: 'green',
    fontSize: 24,
  },
});
