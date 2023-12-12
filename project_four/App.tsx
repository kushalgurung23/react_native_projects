/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// Qsn4b%iJDgit 
import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {

  const [color, setColor] = useState('#ffffff');

  const generateColor = () => {
    const hexRange = "0123456789ABCDEF"
    let randomColor = '#'

    for(let i = 0 ; i < 6; i++) {
      randomColor += hexRange[Math.floor(Math.random() * 16)]
    }
    setColor(randomColor)
    console.log(randomColor);
    
  }

  return (
    <>
      <StatusBar backgroundColor={'white'} />
        <View style={[styles.container, {backgroundColor: color}]}>
          <TouchableOpacity
          onPress={() => generateColor()}>
            <View style={styles.actionBtn}>
              <Text style={styles.btnText}>Press me</Text>
            </View>
          </TouchableOpacity>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  },
  actionBtn: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'black'
  },

});

export default App;
