import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { User } from '../UseContext'
import { Profile, Sidebar } from './SidebarProfile'

const Dashboard = () => {
  return (
    <View>
      <Sidebar />
      <Profile />
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({})