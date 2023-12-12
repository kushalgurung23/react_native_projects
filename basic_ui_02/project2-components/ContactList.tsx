import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: 'Kushal Gurung',
            status: 'I love football',
            imageUrl: 'https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg'
        },
        {
            uid: 2,
            name: 'Robbin Hood',
            status: 'I love forest',
            imageUrl: 'https://images.pexels.com/photos/15172949/pexels-photo-15172949/free-photo-of-mist-overt-rock-formation.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            uid: 3,
            name: 'Rita Ora',
            status: 'I love natureI love natureI love natureI love natureI love natureI love natureI love natureI love nature',
            imageUrl: 'https://images.pexels.com/photos/13476394/pexels-photo-13476394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
    ]
  return (
    <View>
      <Text style={styles.headingText}>Contacts</Text>
      <ScrollView style={styles.scrollContainer} scrollEnabled = {false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
            <View key = {uid} style = {styles.userCard}>
                <Image source = {{
                    uri: imageUrl
                }} 
                style = {styles.userImage} />
                <View style = {styles.userInfo}>
                    <Text style = {styles.userName}>{name}</Text>
                    <Text numberOfLines={1} style = {styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        margin: 10,
        fontWeight: 'bold',
        fontSize: 24
    },
    scrollContainer: {
        paddingHorizontal: 10
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: 'lightpink',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 6,
    },
    userInfo: {
        flex: 1
      },
    userImage: {
        height: 60,
        width: 60,
        borderRadius: 50,
        marginRight: 10,
    },
    userName: {
        fontSize: 18,
        fontWeight: '400'
    },
    userStatus: {
        marginTop: 4,
        fontSize: 15,
        fontWeight: '300',
        overflow: 'hidden'
    }
})