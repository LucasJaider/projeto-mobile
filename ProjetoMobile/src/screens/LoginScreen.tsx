import { Text, View} from 'react-native';
import Principal from '../layouts/Principal';
import { useState } from 'react';
import { LoginProps } from '../types';
import Tela_login from './Tela_login';


const LoginScreen = ({ navigation, route }: LoginProps) =>{
    return (
      
        <Tela_login navigation={navigation} route={route} />
     
    );
  };

  export default LoginScreen;