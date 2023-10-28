import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Ex1 from './Ex1';
import Ex2 from './Ex2';
import Ex3 from './Ex3';
import ListaFlat from './ListaFlat';
import ListaSection from './ListaSection';
import { HomeProps } from '../types';
import ExemploStylesText from './ExemploStylesText';
import ExemploStylesView from './ExemploStyleView';
import Tela from '../screens/Tela_login';




const lista = [
  { key: 1, descricao: 'teste' },
  { key: 2, descricao: 'teste2' },
  { key: 3, descricao: 'teste3' },
  { key: 4, descricao: 'teste4' },
  { key: 4, descricao: 'abobrinha' }
];

const listaSection = [
  { title: 'A', data: [{ key: 1, descricao: 'Ana' }, { key: 2, descricao: 'Zidane' }] },
  { title: 'B', data: [{ key: 2, descricao: 'Bruno' }] },
  { title: 'C', data: [{ key: 3, descricao: 'Carlos' }] },
  { title: 'D', data: [{ key: 4, descricao: 'Douglas' }] },
  { title: 'E', data: [{ key: 5, descricao: 'Elio' }] },
  { title: 'F', data: [{ key: 6, descricao: 'Fábio' }] },
];

const Principal = ({ navigation, route }: HomeProps) => {
  return (
    <>
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detalhes')} />
      <Ex1 titulo="Teste" />
      <Ex2 />
      <Ex3 />
      <ListaFlat array={lista} />
      // <ListaSection array={listaSection} /> */}

     <ExemploStylesText/> 
      <ExemploStylesView/>

       


    </>
  );
}

export default Principal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
});
