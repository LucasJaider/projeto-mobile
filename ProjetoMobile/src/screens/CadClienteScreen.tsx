
import { ClienteProps } from '../types';
import CadCliente from './CadCliente';



const CadClienteScreen = ({ navigation, route }: ClienteProps) =>{
    return (
      
        <CadCliente navigation={navigation} route={route} />
     
    );
  };

  export default CadClienteScreen;