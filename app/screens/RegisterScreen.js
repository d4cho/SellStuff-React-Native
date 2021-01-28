import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

import colors from '../config/colors';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const ref_input2 = useRef();
  const ref_input3 = useRef();

  const handleNameChange = (text) => {
    console.log(text);
    setName(text);
  };

  const handleEmailChange = (text) => {
    console.log(text);
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    console.log(text);
    setPassword(text);
  };

  const onSubmit = () => {
    console.log(name, email, password);
    setLoading(true);
    setTimeout(() => {
      navigation.navigate('Login');
    }, 4000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Name'
          returnKeyType='next'
          blurOnSubmit={false}
          onSubmitEditing={() => ref_input2.current.focus()}
          onChangeText={(text) => handleNameChange(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          ref={ref_input2}
          style={styles.input}
          placeholder='Email'
          returnKeyType='next'
          blurOnSubmit={false}
          onSubmitEditing={() => ref_input3.current.focus()}
          onChangeText={(text) => handleEmailChange(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          ref={ref_input3}
          style={styles.input}
          placeholder='Password'
          returnKeyType='done'
          secureTextEntry={true}
          onChangeText={(text) => handlePasswordChange(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.text}>REGISTER</Text>
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
  }
});

export default RegisterScreen;
