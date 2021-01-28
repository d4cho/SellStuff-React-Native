import React from 'react';
import { SafeAreaView, Image, View, StyleSheet } from 'react-native';

import chairImg from '../assets/chair.jpg';
import colors from '../config/colors';

const ViewImageScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.closeIcon} />
      <View style={styles.deleteIcon} />
      <Image
        resizeMode='contain'
        style={styles.image}
        source={chairImg}
        style={styles.image}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    justifyContent: 'center'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  closeIcon: {
    backgroundColor: colors.primary,
    width: 50,
    height: 50,
    position: 'absolute',
    top: 20,
    left: 20
  },
  deleteIcon: {
    backgroundColor: colors.secondary,
    width: 50,
    height: 50,
    position: 'absolute',
    top: 20,
    right: 20
  }
});

export default ViewImageScreen;
