import { Text, View} from 'react-native';
import Principal from '../layouts/Principal';
import { useState } from 'react';
import { CadastroProps, LoginProps } from '../types';
import Tela_cadastro from './Tela_cadastro';


const CadastroScreen = ({ navigation, route }: CadastroProps) =>{
    return (
      
        <Tela_cadastro navigation={navigation} route={route} />
     
    );
  };

  export default CadastroScreen;