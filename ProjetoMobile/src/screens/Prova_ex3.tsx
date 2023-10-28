import { Text, StyleSheet, TextInput, View, Pressable, Image, Alert } from "react-native";

import firestore from "@react-native-firebase/firestore"
import auth from "@react-native-firebase/auth";
import { useState } from "react";


const Prova3 = () => {
    const [Codigo, setCodigo] = useState('');
    const [Nome, setNome] = useState('');
    const [Preco, setPreco] = useState('');
    const [isLoading, setIsLoading] = useState(false);  

    function cadastrar() {
        setIsLoading(true);

        firestore()
            .collection('notas')
            .add({
                Codigo,
                Nome,
                Preco,
                created_at: firestore.FieldValue.serverTimestamp()
            })
            
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false))
    }

    return (
        <View style={styles.container}>
            <View style={styles.center}>
                <Image style={styles.imagem}
                     source={require('../assets/potato_fries.jpg')} />
                <Text>Codigo de Barras</Text>
                <TextInput style={styles.box}
                    onChangeText={(text) => { setCodigo(text) }} />
                <Text>Nome</Text>
                <TextInput style={styles.box}
                    onChangeText={(text) => { setNome(text) }} />
                <Text>Preço</Text>
                <TextInput style={styles.box}
                    onChangeText={(text) => { setPreco(text) }} />
                <Pressable style={styles.botao} onPress={() => cadastrar()}>

                    <Text style={{ fontSize: 20 }}>Cadastrar</Text>
               

                
                </Pressable>
            </View>

        </View>
    )

}
export default Prova3;


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            // justifyContent: 'center',
            // alignItems: 'center',
            backgroundColor: '#008080',
           
            
        },
        imagem:{
            width:400,
            height:400,
            
    
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
