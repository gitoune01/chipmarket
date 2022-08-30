import React, { memo } from 'react';
import {Pressable, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const Button = ({title, onPress, style}) => {
 
  console.log('Button reloading');

  return (  
    <TouchableOpacity activeOpacity={0.85} onPress={onPress}  style={[styles.container,style]}>
      <Text style={styles.title} >{title}</Text>
    </TouchableOpacity>
  );
};

export default memo(Button);
