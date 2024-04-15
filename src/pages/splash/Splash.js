/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import {stackNames} from '../../navigation/stackNames';
import {styles} from './Splash.styles';
import {IMAGES} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate(stackNames.home);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={IMAGES.splash} resizeMode="cover" />
    </View>
  );
};

export default Splash;
