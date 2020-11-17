import ImagePicker from 'react-native-image-picker';
import {faCameraRetro} from '@fortawesome/free-solid-svg-icons';
import React, {memo, useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const AddFamilyMember = (props) => {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState();
  const options = {
    title: 'Select Avatar',
    customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  let imageArea = () => {
    if (photo) {
      return <Image source={{uri: photo.uri}} style={styles.photo} />;
    } else {
      return <FontAwesomeIcon icon={faCameraRetro} size={60} />;
    }
  };

  let imagePick = () => {
    return ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('pick again');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
        setPhoto(source);
      }
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <Text>Add A Family Member</Text>
      <TouchableOpacity onPress={imagePick}>{imageArea()}</TouchableOpacity>
      <Text>Name</Text>
      <TextInput style={styles.textInput} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#8AA1B1',
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 10,
  },
  textInput: {
    backgroundColor: '#abbcc7',
    width: 150,
    height: 30,
    borderRadius: 15,
    padding: 8,
    textAlign: 'center',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
});

export default memo(AddFamilyMember);
