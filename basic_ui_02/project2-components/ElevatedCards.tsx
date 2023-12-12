import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style = {styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal = {true} style = {styles.container}>
        <View style={[styles.card, styles.elevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
            <Text>Here</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
            <Text>And</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
            <Text>Nothing</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
            <Text>Will</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
            <Text>Happen</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10
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
    elevated: {
        backgroundColor: 'yellow'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
    },
})