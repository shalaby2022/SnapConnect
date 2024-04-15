import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  Linking,
} from 'react-native';
import {styles} from './WhatsApp.styles';
import {isValidEgyptianPhoneNumber} from '../../utils/EgyptianNumbers';

const WhatsApp = () => {
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

  return (
    <View style={styles.container}>
      <Text style={styles.inputLabel}>Enter The Number</Text>
      <TextInput
        placeholder="xxxx-xxx-xxx"
        onChangeText={text => setNumber(text)}
        value={number}
        keyboardType="phone-pad"
        maxLength={10}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleSendMessage}>
        <Text style={styles.buttonText}>Send Message</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WhatsApp;
