/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useRef} from 'react';
import {
  Alert,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCamera} from '@fortawesome/free-solid-svg-icons';

import {Header} from './src/components/Header/Header';

declare const global: {HermesInternal: null | {}};

const App = () => {
  const cameraOpen = () => console.log('open the camera');
  return (
    <>
      <Header header="Gol Gol Plants" />
      <View>
        <TouchableOpacity style={styles.camContainer} onPress={cameraOpen}>
          <FontAwesomeIcon
            icon={faCamera}
            size={50}
            style={styles.cameraIcon}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  // new styles
  camContainer: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#1E5631', // green colour palette - https://www.schemecolor.com/shades-of-green.php
    width: 70,
    height: 70,
    alignSelf: 'center',
    backgroundColor: '#76BA1B',
  },
  cameraIcon: {
    alignSelf: 'center',
    margin: 5,
  },

  // original styles NOT USED ANYMORE
  engine: {
    position: 'absolute',
    right: 0,
  },

  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
