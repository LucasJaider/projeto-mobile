import { Text, StyleSheet, TextInput, View, Pressable, Image, Alert, ScrollView } from "react-native";
import firestore from "@react-native-firebase/firestore"

import auth from "@react-native-firebase/auth";
import { useState } from "react";
import { AlterarProps} from "../types";



export default ({ navigation, route }: AlterarProps) => {

    const[id,] = useState(route.params.id);
    const [Nome, setNome] = useState('');
    const [Cpf, setCpf] = useState('');
    const [Rua, setRua] = useState('');
    const [Numero, setNumero] = useState('');
    const [Complemento, setComplemento] = useState('');
    const [Bairro, setBairro] = useState('');
    const [Cidade, setCidade] = useState('');
    const [Estado, setEstado] = useState('');
    const [DNasc, setDNasc] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    function AlterarCliente() {
        setIsLoading(true);



        firestore()
            .collection('Clientes')
            .doc(id)
            .update({
                Nome,
                Cpf,
                Rua,
                Numero,
                Complemento,
                Bairro,
                Cidade,
                Estado,
                DNasc,
                created_at: firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                Alert.alert("Cliente", "Alterado com sucesso")
                navigation.goBack();
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false))

    }
    async function carregar() {
        setIsLoading(true)
        
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.center}>
                    <Image style={styles.imagem}
                        source={require('../assets/potato_fries.jpg')} />
                    <Text>Nome</Text>
                    <TextInput style={styles.box}
                        onChangeText={(text) => { setNome(text) }} />
                    <Text>CPF</Text>

                    <TextInput style={styles.box}
                        onChangeText={(text) => { setCpf(text) }} />

                    <Text>Data de nascimento</Text>

                    <TextInput style={styles.box}
                        onChangeText={(text) => { setDNasc(text) }} />


                    <Text style={{ margin: 10, marginRight: 300, fontSize: 20 }}>
                        Endereço: </Text>

                    <Text>Rua</Text>
                    <TextInput style={styles.box}
                        onChangeText={(text) => { setRua(text) }} />

                    <Text>Numero</Text>
                    <TextInput style={styles.box}
                        onChangeText={(text) => { setNumero(text) }} />

                    <Text>Complemento</Text>
                    <TextInput style={styles.box}
                        onChangeText={(text) => { setComplemento(text) }} />

                    <Text>Bairro</Text>
                    <TextInput style={styles.box}
                        onChangeText={(text) => { setBairro(text) }} />

                    <Text>Cidade</Text>
                    <TextInput style={styles.box}
                        onChangeText={(text) => { setCidade(text) }} />

                    <Text>Estado</Text>
                    <TextInput style={styles.box}
                        onChangeText={(text) => { setEstado(text) }} />

                    <Pressable style={styles.botao}
                        onPress={() => AlterarCliente()}
                    >
                        <Text style={{ fontSize: 20 }}>Alterar cliente</Text>
                    </Pressable>




                    <Pressable style={styles.conta} 
                    onPress={() => navigation.navigate('HomeCliente')}>

                        <Text style={{ fontSize: 20 }}>Voltar</Text>
                    </Pressable>
                </View>


                <Image style={styles.footer}
                    source={require('../assets/slider-preset1-02.png')} />
            </ScrollView>
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



    imagem: {
        width: 200,
        height: 200,


    },
    footer: {
        width: 410,
        height: 200,
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
        height: 60,
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
