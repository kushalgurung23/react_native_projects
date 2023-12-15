import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

// NAVIGATION
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import { useNavigation } from '@react-navigation/native'

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Detail'>

const Detail = ({route}: DetailsProps) => {
    const {productId} = route.params
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    return (
        <View style={styles.container}>
            <Text>Detail: {productId}</Text>
            <Button
            title='Go back one screen'
            // onPress={() => navigation.navigate('Home')}
            onPress={() => navigation.pop()}
            />
             <Button
            title='Go to home'
            // onPress={() => navigation.pop(2)}
            onPress={() => navigation.popToTop()}
            />
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    smallText: {
        color: 'black'
    }
})