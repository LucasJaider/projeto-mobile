import{NativeStackScreenProps } from '@react-navigation/native-stack';



type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    Cadastro: undefined
    Detalhes: undefined;
    Nota: undefined;
    INota: undefined;
    CadCliente: undefined;
    HomeCliente: undefined;
    ListarCliente: undefined;
    AlterarCliente:{id: string};
    
  };
  
  type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

  type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

  type CadastroProps = NativeStackScreenProps<RootStackParamList, 'Cadastro'>;
  
  type NotaProps = NativeStackScreenProps<RootStackParamList, 'Nota'>;

  type ListarNotasProps = NativeStackScreenProps<RootStackParamList, 'INota'>;

  type ClienteProps = NativeStackScreenProps<RootStackParamList, 'CadCliente'>;

  type AlterarProps = NativeStackScreenProps<RootStackParamList, 'AlterarCliente'>;

  type HomeClienteProps = NativeStackScreenProps<RootStackParamList, 'HomeCliente'>;

  type ListarClienteProps = NativeStackScreenProps<RootStackParamList, 'ListarCliente'>;


  export type {HomeProps, RootStackParamList, LoginProps, CadastroProps, NotaProps,
     ListarNotasProps, ClienteProps, AlterarProps, HomeClienteProps, ListarClienteProps};