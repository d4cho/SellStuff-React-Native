import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image
} from 'react-native';

import colors from '../config/colors';
import logo from '../assets/logo-red.png';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const ref_input2 = useRef();

  const handleEmailChange = (text) => {
    console.log(text);
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    console.log(text);
    setPassword(text);
  };

  const onSubmit = () => {
    console.log(email, password);
    setLoading(true);
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Email'
          returnKeyType='next'
          blurOnSubmit={false}
          onSubmitEditing={() => ref_input2.current.focus()}
          onChangeText={(text) => handleEmailChange(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          ref={ref_input2}
          style={styles.input}
          placeholder='Password'
          returnKeyType='done'
          secureTextEntry={true}
          onChangeText={(text) => handlePasswordChange(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.text}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      {loading && (
        <ActivityIndicator
          size={100}
          color={colors.secondary}
          style={{ paddingTop: 30 }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  inputContainer: {
    width: '100%',
    paddingTop: 30,
    alignItems: 'center'
  },
  input: {
    height: 60,
    width: '90%',
    backgroundColor: 'lightgrey',
    borderRadius: 50,
    fontSize: 20,
    paddingLeft: 30
  },
  button: {
    height: 60,
    width: '90%',
    backgroundColor: colors.primary,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold'
  },
  logo: {
    width: 75,
    height: 75,
    marginTop: 75
  }
});

export default LoginScreen;
