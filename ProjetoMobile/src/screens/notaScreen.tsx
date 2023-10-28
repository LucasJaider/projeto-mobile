import { Text, View} from 'react-native';
import Principal from '../layouts/Principal';
import { useState } from 'react';
import { NotaProps } from '../types';
import Tela_Nota from './Tela_Nota';



const NotaScreen = ({ navigation, route }: NotaProps) =>{
    return (
      
        <Tela_Nota navigation={navigation} route={route} />
     
    );
  };

  export default NotaScreen;