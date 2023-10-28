import { Text, StyleSheet, TextInput, View, Pressable, Image, Alert } from "react-native";


import auth from "@react-native-firebase/auth";
import { useState } from "react";
import { LoginProps } from "../types";



const Tela = ({ navigation, route }: LoginProps) => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function logar() {
        setIsLoading(true);

        auth()
            .signInWithEmailAndPassword(email, senha)
            .then(() => { navigation.navigate('HomeCliente') })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false))
    }

    function refefinirSenha() {
        auth()
            .sendPasswordResetEmail(email)
            .then(() => Alert.alert("Redefinir senha", "Enviamos um email para você"))
            .catch((error) => console.log(error))
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
                    onPress={() => logar()}
                    disabled={isLoading} >

                    <Text style={{ fontSize: 20 }}>Login</Text>
                </Pressable>
            </View>

            <View style={styles.botoes}>
                <Pressable style={styles.esqueci}>

                    <Text style={{ fontSize: 15 }}> Esqueci a senha</Text>
                </Pressable>
                <Pressable style={styles.conta} onPress={() => navigation.navigate('Cadastro')}>

                    <Text style={{ fontSize: 15 }}>Cadastrar</Text>
                </Pressable>
                
            </View>
            <Image style={styles.footer}
                     source={require('../assets/slider-preset1-02.png')} />
        </View>
    )
}

export default Tela;

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
        marginLeft: 3,
    
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
        width: 80,
        height: 40,
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