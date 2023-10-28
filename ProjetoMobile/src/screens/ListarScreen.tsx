import { ListarClienteProps } from "../types";
import ListarCliente from "./ListarCliente";

const ListarClienteScreen = ({ navigation, route }: ListarClienteProps) =>{
    return (
      
        <ListarCliente navigation={navigation} route={route} />
     
    );
  };

  export default ListarClienteScreen;