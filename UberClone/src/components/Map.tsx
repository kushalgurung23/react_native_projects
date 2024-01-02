import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps/lib/MapView'
import { useSelector } from 'react-redux'
import { selectOrigin } from '../slices/navSlice'
import { Marker } from 'react-native-maps'

const Map = () => {
    const origin = useSelector(selectOrigin)
  return (
    <MapView
      style={{flex: 1}}
      mapType="mutedStandard"
      initialRegion={{
        // latitude: 37.78825,
        // longitude: -122.4324,
        latitude: origin.location.lat,
        longitude: origin.location.lon,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}>
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lon,
          }}
          title="Origin"
          description={origin?.description ? origin.description : ''}
          identifier="origin"
        />
      )}
    </MapView>
  );
}

export default Map

const styles = StyleSheet.create({});