import { Text, StyleSheet, TextInput, View, Pressable, Image, Alert } from "react-native";


import auth from "@react-native-firebase/auth";
import { useState } from "react";
import { CadastroProps, LoginProps } from "../types";
import { NavigationContainer } from "@react-navigation/native";

export default ({navigation, route}: CadastroProps) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isLoading, setIsLoading] = useState(false);  

   function cadastrar() {
        setIsLoading(true);

        if (email && senha) {

        auth()
            .createUserWithEmailAndPassword(email, senha)
            .then(() => {
                Alert.alert("Conta",
                "Cadastrada com sucesso")
            navigation.navigate("Login");
        })
            .catch((error) => {
            console.log(error);
            Alert.alert("Erro",
            String(error))
            })
            .finally(() => setIsLoading(false))
        }else setIsLoading(false)
    }
    return (
        <View style={styles.container}>
            <View style={styles.center}>
                <Image style={styles.imagem}
                     source={require('../assets/potato_fries.jpg')} />
                <Text>Email</Text>
                <TextInput style={styles.box}
                    onChangeText={(text) => { setEmail(text) }} />
                <Text>Senha</Text>
               
                <TextInput style={styles.box}
                    onChangeText={(text) => { setSenha(text) }} />
                <Pressable style={styles.botao}
                    onPress={() => cadastrar()}
                     >

                    <Text style={{ fontSize: 20 }}>Cadastrar</Text>
                </Pressable>
                <Pressable style={styles.conta} onPress={() => navigation.navigate('Login')}>

                    <Text style={{ fontSize: 20 }}>Voltar</Text>
                </Pressable>
            </View>


            <Image style={styles.footer}
                     source={require('../assets/slider-preset1-02.png')} />
        </View>
    )

}


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            // justifyContent: 'center',
            // alignItems: 'center',
            backgroundColor: '#008080',
           
            
        },
        imagem:{
            width: 200,
            height:200,
            
    
        },
        footer:{
            width: 410,
            height:200,
            marginLeft: 3
        },
        box: {
            width: 300,
            height: 40,
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 5,
            paddingLeft: 10,
            backgroundColor: 'white',
            marginBottom: 20,
            color: "black",
            
        },
        botao: {
            width: 100,
            height: 45,
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 5,
            backgroundColor: '#d4d0cf',
            marginBottom: 20,
            alignItems: 'center',
    
        },
        esqueci: {
            width: 85,
            height: 45,
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 5,
            backgroundColor: '#d4d0cf',
            //marginBottom: 20,
            // alignSelf: 'baseline',
            alignItems: 'center',
        },
        conta: {
            width: 85,
            height: 45,
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 5,
            backgroundColor: '#d4d0cf',
            //marginBottom: 20,
            // alignSelf: 'flex-end',
            alignItems: 'center',
            
        },
        botoes: {
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-around',
            flex: 1
        },
        center: {
            justifyContent: 'center',
            alignItems: 'center',
            flex: 3
        },
    
    });
