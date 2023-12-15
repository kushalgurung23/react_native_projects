import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import { PRODUCTS_LIST } from '../data/constant';
import Separator from '../components/Separator';
import ProductItem from '../components/ProductItem';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <FlatList 
      data={PRODUCTS_LIST}
      keyExtractor={product => product.id}
      ItemSeparatorComponent={Separator}
      renderItem={({item}) => (
        <Pressable
        onPress={() => {
            navigation.navigate('Detail', {product: item})
        }}
        >
            <ProductItem product={item}></ProductItem>
        </Pressable>
      )}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
    
        padding: 12,
        backgroundColor: '#FFFFFF',
      },
})