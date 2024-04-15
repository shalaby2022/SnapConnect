/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  Linking,
  ImageBackground,
} from 'react-native';
import {styles} from './WhatsApp.styles';
import {isValidEgyptianPhoneNumber} from '../../utils/EgyptianNumbers';
import {IMAGES} from '../../assets';
import {useFocusEffect} from '@react-navigation/native';

const WhatsApp = ({navigation}) => {
  const [number, setNumber] = useState('');
  let phoneWithCountryCode = '+20';

  const handleSendMessage = async () => {
    if (number) {
      let mobile = `${phoneWithCountryCode}${number}`;
      const whatsappUrl = `whatsapp://send?phone=${mobile}`;
      if (isValidEgyptianPhoneNumber(mobile)) {
        try {
          await Linking.openURL(whatsappUrl);
        } catch (err) {
          console.log(err.message);
          Alert.alert('Error', 'Whatsapp Not Installed');
        }
      } else {
        Alert.alert('Error', 'Please enter a valid phone number.');
      }
    } else {
      Alert.alert('Error', 'Please Enter a phone number.');
    }
  };

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        // Prevent navigation back to splash screen
        return true; // Return true to prevent default behavior (i.e., navigating back)
      };

      // Add event listener for back button press
      const backHandler = navigation.addListener('beforeRemove', onBackPress);

      // Clean up the event listener on component unmount
      return () => backHandler.remove();
    }, []),
  );

  return (
    <ImageBackground
      source={IMAGES.home}
      style={styles.container}
      resizeMode="contain">
      <Text style={styles.inputLabel}>Enter The Number</Text>
      <TextInput
        placeholder="xxxx-xxx-xxx"
        placeholderTextColor={'#999'}
        onChangeText={text => setNumber(text)}
        value={number}
        keyboardType="phone-pad"
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleSendMessage}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default WhatsApp;
