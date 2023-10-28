
import {HomeClienteProps } from '../types';
import HomeCliente from './HomeCliente';



const HomeClienteScreen = ({ navigation, route }: HomeClienteProps) =>{
    return (
      
        <HomeCliente navigation={navigation} route={route} />
     
    );
  };

  export default HomeClienteScreen;