import React, { useState, useTransition } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { About, Contact, Posts } from './components/TransitionComponents';
import TabButton from './components/TabButton';

type AvailableTabs = 'about' | 'posts' | 'contact';

const UseTransition = () => {
    const [isPending, startTransition] = useTransition()
    const [tab, setTab] = useState<AvailableTabs>('about')

    const selectTab = (tab: AvailableTabs)=> {
      startTransition(() => {
        setTab(tab);
      });
    }

  return (
    <SafeAreaView>
      <Text>UseTransition</Text>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
         
        }}>
        <TouchableOpacity
          style={{backgroundColor: 'black', marginBottom: 10}}
          onPress={() => selectTab('about')}>
          <Text style={{color: 'white'}}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{backgroundColor: 'black', marginBottom: 10}}
          onPress={() => selectTab('posts')}>
          <Text style={{color: 'white'}}>Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{backgroundColor: 'black', marginBottom: 10}}
          onPress={() => selectTab('contact')}>
          <Text style={{color: 'white'}}>Contact</Text>
        </TouchableOpacity>
        <TabButton 
        title='From Tab button'
        onPress={() => selectTab('posts')}
        />
        {tab === 'about' && <About />}
        {tab === 'posts' && <Posts />}
        {tab === 'contact' && <Contact />}
      </View>
    </SafeAreaView>
  );
}

export default UseTransition

const styles = StyleSheet.create({})