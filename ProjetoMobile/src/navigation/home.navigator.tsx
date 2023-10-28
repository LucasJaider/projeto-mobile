import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetalhesScreen from "../screens/DetalhesScreen";
import HomeScreen from "../screens/HomeScreen";
import { RootStackParamList } from "../types";
import LoginScreen from "../screens/LoginScreen";
import CadastroScreen from "../screens/CadastroScreen";
import NotaScreen from "../screens/notaScreen";
import CadClienteScreen from "../screens/CadClienteScreen";
import { StackActions } from "@react-navigation/native";
import AlterarScreen from "../screens/AlterarScreen";
import HomeClienteScreen from "../screens/HomeClienteScreen";
import ListarClienteScreen from "../screens/ListarScreen";




const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
    return (

        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Detalhes" component={DetalhesScreen} />
            <Stack.Screen name="Cadastro" component={CadastroScreen} />
            <Stack.Screen name="Nota" component={NotaScreen} />
            <Stack.Screen name="CadCliente" component={CadClienteScreen}/>
            <Stack.Screen name="AlterarCliente" component={AlterarScreen}/>
            <Stack.Screen name="HomeCliente" component={HomeClienteScreen}/>
            <Stack.Screen name="ListarCliente" component={ListarClienteScreen}/>

        </Stack.Navigator>

    )
}

export default HomeNavigator;