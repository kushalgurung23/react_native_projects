import { ActivityIndicator, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import {setupPlayer, addTrack} from '../musicPlayerService'
import MusicPlayer from './screens/MusicPlayer'

export default function App(): JSX.Element {
  const [isPlayerReady, setIsPlayerReady] = useState(false)

  async function setup() {
    let isSetUp = await setupPlayer()

    if(isSetUp) {
      await addTrack()
    }

    setIsPlayerReady(isSetUp)
  }

  useEffect(() => {
    // This function will be called after the component has rendered
    setup()
  }, 
  // Empty dependency array means the effect runs only once
  []);
  if(!isPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator/>
      </SafeAreaView>
    )
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <MusicPlayer/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})
