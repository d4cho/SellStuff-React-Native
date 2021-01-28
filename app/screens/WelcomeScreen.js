import React from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  Text,
  ImageBackground,
  StyleSheet
} from 'react-native';

import background from '../assets/background.jpg';
import logo from '../assets/logo-red.png';
import colors from '../config/colors';

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={2}
      source={background}
      style={styles.background}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.textLogo}>Sell What You Don't Need</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.loginButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.textButton}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.registerButton}
        onPress={() => navigation.navigate('Register')}>
        <Text style={styles.textButton}>REGISTER</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  logoContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: 70
  },
  logo: {
    width: 100,
    height: 100
  },
  loginButton: {
    width: '90%',
    height: 60,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    position: 'absolute',
    bottom: 130
  },
  registerButton: {
    width: '90%',
    height: 60,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    position: 'absolute',
    bottom: 50
  },
  textLogo: {
    fontSize: 26,
    paddingTop: 26
  },
  textButton: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
