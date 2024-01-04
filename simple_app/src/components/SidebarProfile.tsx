import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { DashboardContext, useUserContext } from '../context/dashboardContext'

export const Sidebar = () => {
    const user = useUserContext()
  return (
    <View>
      <Text>
        {'Sidebar: ' + user.name}
        {user.isSubscribed ? ' has subscribed' : ' has not subscribed'}
      </Text>
    </View>
  );
}

export const Profile = () => {
    const user = useUserContext()
    return (
      <View>
        <Text>{'Profile: '+user.name}</Text>
      </View>
    )
  }

const styles = StyleSheet.create({})