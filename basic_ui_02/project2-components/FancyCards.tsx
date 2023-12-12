import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style = {styles.headingText}>Trending places</Text>
      <View style = {[styles.card, styles.cardElevated]}>
        <Image 
            style = {styles.cardImage}
            source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj9At-FEy-b_bMEiCITCIdP60zsYQJMbCTZqguC9Dx91Uh00cRfEA1p3A6-Rs8dB0kR8I&usqp=CAU'
            }}
        />
        <View style = {styles.cardBody}>
            <Text style = {styles.cardTitle}>CHELSEA FC</Text>
            <Text style = {styles.cardLabel}>THE PRIDE OF LONDON</Text>
            <Text style = {styles.cardDescription}>Chelsea is the biggest club in London.</Text>
            <Text style = {styles.cardFooter}>Watch them play live at Stamford Bridge.</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
        marginHorizontal: 10
    },
    card: {
        height: 315,
        borderRadius: 6,
        marginVertical: 10,
        marginHorizontal: 10,
    },
    cardElevated: {
        backgroundColor: 'silver',
        elevation: 3,
        shadowOffset: {
            height: 1,
            width: 1
        }
    },
    cardImage: {
        height: 180,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    cardBody: {
       padding: 10,
       flex: 1
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    cardLabel: {
        fontSize: 16,
        fontWeight: '400',
        marginBottom: 10
    },
    cardDescription: {
        fontSize: 15,
        fontWeight: '300',
        flexShrink: 1,
        marginBottom: 10
    },
    cardFooter: {
        fontSize: 12,
        fontWeight: '300',
        marginBottom: 10
    }
})