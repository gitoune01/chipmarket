import React, {useState} from 'react';
import {Image, Pressable, Text, TextInput, View} from 'react-native';
import {styles} from './styles';

const Input = ({label, placeholder, isPassword}) => {
  const [isPasswordVisible, setIspasswordVisible] = useState(false);

  const onEyePress = () => {
    setIspasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          secureTextEntry={isPassword && !isPasswordVisible}
          placeholder={placeholder}
          style={styles.input}
        />

        {isPassword ? (
          <Pressable style={styles.eye} onPress={onEyePress}>
            <Image style={styles.eyeIcon}source={isPasswordVisible ? require('../../assets/eye_closed.png') :require('../../assets/eye.png')} />
          </Pressable>
        ) : (
          null
        )}
      </View>
    </View>
  );
};

export default Input;
