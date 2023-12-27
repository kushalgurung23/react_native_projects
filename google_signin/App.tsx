import auth from '@react-native-firebase/auth'
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin'
import React, { useEffect } from 'react'
import { Alert, SafeAreaView, StyleSheet, Text } from 'react-native'

const App = () => {

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '554127776289-l52vj16krjb1epl624vl5e1guumgl9nh.apps.googleusercontent.com',
    });
  }, [])

//  const _signIn = async () => {
//     try {
//       // CHECK IF DEVICE SUPPORTS GOOGLE PLAY
//       await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

//       // GET USER ID TOKEN
//       const {idToken} = await GoogleSignin.signIn();
//       console.log(idToken);
//       Alert.alert('Success login')
//       // CREATE A GOOGLE CREDENTIAL WITH THE TOKEN
//       const googleCredentials = auth.GoogleAuthProvider.credential(idToken);

//       // SIGN-IN THE USER WIgTH THE CREDENTIAL
//       return await auth().signInWithCredential(googleCredentials)
//     } catch (error) {
//       console.log(error);
//     }
//   };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>App</Text>
      
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  button: {
    marginTop: 20
  }
})

