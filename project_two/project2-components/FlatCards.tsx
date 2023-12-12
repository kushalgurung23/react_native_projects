import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards(): JSX.Element {
  return (
    <View>
      <Text style = { styles.headingText }>FlatCards</Text>

      <View style = {styles.container}>

        <View style = {[styles.card, styles.cardOne]}>
            <Text style={styles.cardText}>BLUE</Text>
        </View>

        <View style = {[styles.card, styles.cardTwo]}>
            <Text style={styles.cardText}>Green</Text>
        </View>

        <View style = {[styles.card, styles.cardThree]}>
            <Text style={styles.cardText}>Red</Text>
        </View>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10
    },
    cardText: {
        fontSize: 14,
        color: 'white'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'transparent'
    },
    card: {
        flex: 1,
        height: 100,
        width: 100,
        borderRadius: 4,
        margin: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardOne: {
        backgroundColor: 'blue',
        flex: 3
    },
    cardTwo: {
        backgroundColor: 'green',
        flex: 2
    },
    cardThree: {
        backgroundColor: 'red',
        flex: 1
    },
})