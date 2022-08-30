import React, { useState } from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Button from '../../../components/Button';
import CheckBox from '../../../components/checkbox';
import GoogleLogin from '../../../components/GoogleLogin';
import Input from '../../../components/input';
import Separator from '../../../components/separator';
import {styles} from './styles';
const SignUp = () => {
  const [checked,setChecked] = useState(false)
 const onSignIn = () => {
      console.log('GOT SIGNIN CLICKED')


 }


  return (
    <View style={styles.container}>
      <AuthHeader title='Sign Up' />
      <Input label='Name' placeholder='John Doe' />
      <Input label='Email' placeholder='example@example.com' />
      <Input isPassword isPasswordVisible label='Password' placeholder='********' />
      <View style={styles.agreeRow}>
        <CheckBox checked={checked} onCheck={setChecked} />
        <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms</Text> & <Text style={styles.agreeTextBold}>Privacy</Text></Text>
      </View>
      <Button  style={styles.button} title='Sign Up' />
      <Separator text='Or Sign Up with'/>
      <GoogleLogin />
      <Text style={styles.footerText}>
         Already have an account?
         <Text onPress={onSignIn} style={styles.footerLink}> Sign In</Text>
      </Text>

    </View>
  );
};

export default SignUp;
