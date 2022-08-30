import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React, {useEffect, useState} from 'react';
import SignUp from './src/screens/auth/Signup';
import Splash from './src/screens/auth/Splash';
import Config from "react-native-config";
import SignIn from './src/screens/auth/Signin';
// const WEB_CLIENT_ID =
//   '12442042143-j0vetug62o2lvsmfpotus8j16rghsln3.apps.googleusercontent.com';
// const ANDROID_CLIENT_ID =
// '12442042143-hdrk8crgvlq2iar3bd7i6k6qjrg747is.apps.googleusercontent.com';

const App = () => {
  
  
  Config.GOOGLE_WEB_CLIENT_ID;
  Config.ANDROID_CLIENT_ID; 




  // useEffect(() => {
  //   GoogleSignin.configure({
  //     scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
  //     webClientId: WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
  
  //     forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
   
  //   });
  // }, []);

  return (
    <>
      {/* <Splash  /> */}
      <SignIn />
    </>
  );
};

export default App;
