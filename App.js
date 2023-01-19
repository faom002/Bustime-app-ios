import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Dropdownlist from './components/DropDownList'

export default function App() {
const [time, setTime] = useState(new Date().toLocaleTimeString());
const [busTimestamp, setBusTimestamp] = useState(new Date().setHours(new Date().getHours() + 1, 41, 0, 0));
const [busTimestamp2, setBusTimestamp2] = useState(new Date().setHours(new Date().getHours() + 1, 11, 0, 0));
const [showTimestamps, setShowTimestamps] = useState(true);

useEffect(() => {
const interval = setInterval(() => {
setTime(new Date().toLocaleTimeString());

const currentHour = new Date().getHours();
const currentMinute = new Date().getMinutes();

if (currentHour >= 21 && currentMinute >= 11) {
  setShowTimestamps(false);
}
else if (currentHour >= 6 && currentMinute >= 11) {
    setShowTimestamps(true);
    }
    }, 1000);
    return () => clearInterval(interval);
    }, [time]);
    
    return (
    <View style={styles.container}>
    <Dropdownlist/>
    <View style={styles.square}>
    <Text>Tid nu: {time}</Text>
    {showTimestamps ? (
    <>
    <Text>Holmlia 80E ekspress: {new Date(busTimestamp2).toLocaleTimeString()}</Text>
    <Text>Holmlia 80E ekspress: {new Date(busTimestamp).toLocaleTimeString()}</Text>
    </>
    ) : (
    <Text>No more buses for today</Text>
    )}
    </View>
    <StatusBar style="auto" />
    </View>
    );
    }
    
    const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#1c2331',
    alignItems: 'center',
    justifyContent: 'center',
    },
    square: {
    width: 300,
    height: 300,
    borderRadius: 10,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
    },
    });
