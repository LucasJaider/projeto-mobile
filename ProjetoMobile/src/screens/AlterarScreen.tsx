
import { AlterarProps } from '../types';
import AlterarCliente from './AlterarCliente';
;


const AlterarScreen = ({ navigation, route }: AlterarProps) =>{
    return (
      
        <AlterarCliente navigation={navigation} route={route} />
     
    );
  };

  export default AlterarScreen;