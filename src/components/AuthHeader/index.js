import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './styles';

const AuthHeader = ({title, onBackPress}) => {
  return (
    <View style={styles.container}>
      <Pressable  hitSlop={20} onPress={onBackPress} style={styles.pressCont}>
        <Image style={styles.image} source={require('../../assets/arrow_back.png')} />
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default AuthHeader;
