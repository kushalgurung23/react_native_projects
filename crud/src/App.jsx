import React from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './services/state/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddUserScreen from './screens/AddUserScreen';
import ReadUserScreen from './screens/ReadUserScreen';
import UpdateUserScreen from './screens/UpdateUserScreen';

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}>
            <Stack.Navigator initialRouteName="UserScreen">
              <Stack.Screen
                name="UserScreen"
                component={AddUserScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="ReadUserScreen"
                component={ReadUserScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="UpdateUserScreen"
                component={UpdateUserScreen}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App

const styles = StyleSheet.create({})