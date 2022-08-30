import React, { useState } from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Button from '../../../components/Button';
import GoogleLogin from '../../../components/GoogleLogin';
import Input from '../../../components/input';
import Separator from '../../../components/separator';
import {styles} from './styles';
const SignIn = () => {
  const [checked,setChecked] = useState(false)
 const onSignUp = () => {
      console.log('GOT SIGNIN CLICKED')


 }


  return (
    <View style={styles.container}>
      <AuthHeader title='Sign In' />
       <Input label='Email' placeholder='example@example.com' />
      <Input isPassword isPasswordVisible label='Password' placeholder='********' />
      <Button  style={styles.button} title='Sign In' />
      <Separator text='Or Sign Up with'/>
      <GoogleLogin />
      <Text style={styles.footerText}>
         Don't have an account?
         <Text onPress={onSignUp} style={styles.footerLink}> Sign Up</Text>
      </Text>

    </View>
  );
};

export default SignIn;
