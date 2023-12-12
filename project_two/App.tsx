import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import FlatCards from './project2-components/FlatCards';
import ElevatedCards from './project2-components/ElevatedCards';
import FancyCards from './project2-components/FancyCards';
import ActionCard from './project2-components/ActionCard';
import ContactList from './project2-components/ContactList';

function App() {
  return (
    <SafeAreaView>
      <ScrollView> 
        <FlatCards />
        <ElevatedCards />
        <FancyCards />
        <ActionCard />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
