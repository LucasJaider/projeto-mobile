import { useState } from "react";

import firestore from "@react-native-firebase/firestore"
import { NotaProps } from "../types";


import { Text, StyleSheet, TextInput, View, Pressable, Image, Alert } from "react-native";


export default ({ navigation, route }: NotaProps) => {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function cadastrar() {
        setIsLoading(true);

        firestore()
            .collection('notas')
            .add({
                titulo,
                descricao,
                created_at: firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                Alert.alert("Nota", "Cadastrada com sucesso")
                navigation.navigate('Home')
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false))
    }
    return (
        <View style={styles.container}>
            <View style={styles.center}>
                <Image style={styles.imagem}
                     source={require('../assets/potato_fries.jpg')} />
                <Text>Nota</Text>
                
                <Pressable style={styles.botao}
                    onPress={() => cadastrar()}
                    disabled={isLoading} >

                    <Text style={{ fontSize: 20 }}>Salvar</Text>
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
