import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }

  return (
    <View>
      <Text style = {styles.mainHeadingText}>Hyundai Tucson 2023</Text>
      <View style = {[styles.card, styles.elevatedCard]}>
        <View style = {styles.headingContainer}>
            <Text style = {styles.headingText}>One of the best budget SUVs in 2023.</Text>
        </View>
        <Image 
            source={{
                uri: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Tucson/10134/1694668706095/front-left-side-47.jpg?impolicy=resize&imwidth=220'
            }}
            style = {styles.cardImage}
        />
        <View
            style = {styles.bodyContainer}>
                <Text style={styles.bodyText} numberOfLines={3}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repudiandae, 
                    exercitationem, necessitatibus impedit nobis atque delectus est sint ad 
                    obcaecati iusto error officia quia voluptates veritatis tempore, et vitae. Eaque!
                </Text>
         </View>
         <View
            style = {styles.footerContainer}>
                <TouchableOpacity
                    onPress={
                        () => openWebsite('https://www.hyundai.com/hk/en')
                    }>
                    <Text style = {styles.footerText}>
                        Read More
                    </Text>
                </TouchableOpacity>
         </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainHeadingText : {
        fontSize: 24,
        marginHorizontal: 10,
        fontWeight: 'bold',
    },
    card: {
        flex: 1,
        margin: 10,
        borderRadius: 6,
        padding: 10
    },
    elevatedCard: {
        backgroundColor: 'silver',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: 'silver',
        shadowOpacity: .16
    },
    headingContainer: {
       
    },
    headingText: {
        fontSize: 16,
        textAlign: 'center'
    },
    cardImage: {
        marginVertical: 10,
        height: 180,
        objectFit: 'cover',
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    bodyContainer: {
        flex: 1
    },
    bodyText: {
        fontSize: 15,
        textAlign: 'justify',
        overflow: 'hidden'
    },
    footerContainer: {
        marginTop: 10
    },
    footerText: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 13,
        textDecorationLine: 'underline'
    }
})