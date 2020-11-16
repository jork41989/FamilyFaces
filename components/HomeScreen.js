import { faMale, faPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, {memo, useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
} from 'react-native';

const HomeScreen = (props) => {

  let addButton = (e) => {
    console.log('hi')
  }
  
  return (
    <View style={styles.mainView}>
      <Text>Welcome To Family Faces!</Text>
      <View style={styles.familyView}>
        <Text>Family goes Here</Text>
        <View style={styles.addButton}>
          <TouchableOpacity onPress={addButton}>
            <FontAwesomeIcon icon={faUsers} size={30} color="#4A5043" />
            <FontAwesomeIcon icon={faPlus} size={30} color="#4A5043" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 20,
  },
  familyView: {
    paddingTop: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  addButton: {
    width: 100,
    height: 100,
    backgroundColor: '#B9D8C2',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
});

export default memo(HomeScreen);
