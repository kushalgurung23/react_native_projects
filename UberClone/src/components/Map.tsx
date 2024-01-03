import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import MapView from 'react-native-maps/lib/MapView'
import { useDispatch, useSelector } from 'react-redux'
import { selectDestination, selectOrigin, setTravelTimeInformation } from '../slices/navSlice'
import { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { AppDispatch } from '../state/store'

const Map = () => {
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const mapRef = useRef<MapView>(null)
    const dispatch : AppDispatch = useDispatch()
    useEffect(() => {
        if(!origin || !destination) return;
        // Zoom and fit to markers
        mapRef?.current?.fitToSuppliedMarkers(["origin", "destination"], {
            edgePadding: {top: 50, right: 50, bottom: 50, left: 50}
        })
    }, [origin, destination])

    useEffect(() => {
        if(!origin || !destination) return;
        const getTravelTime = async () => {
            const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?
            units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_APIKEY}
            `
            await fetch(URL).then((res) => res.json()).then(data => {
                dispatch(setTravelTimeInformation(data.rows[0].elements[0]))
            })
        }

        getTravelTime()
    }, [origin, destination, GOOGLE_MAPS_APIKEY])
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
      {/* MAP VIEW DIRECTION OF ORIGIN AND DESTINATION */}
      {origin && destination && (
        <MapViewDirections
          origin={origin.description!}
          destination={destination.description!}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="black"
        />
      )}
      {/* ORIGIN */}
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
      {/* DESTINATION */}
      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lon,
          }}
          title="Destination"
          description={destination?.description ? destination.description : ''}
          identifier="destination"
        />
      )}
    </MapView>
  );
}

export default Map

const styles = StyleSheet.create({});