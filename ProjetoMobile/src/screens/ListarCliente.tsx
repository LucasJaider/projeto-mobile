import { useEffect, useState } from "react"

import { Alert, Pressable, View, Text, FlatList, StyleSheet, Image } from "react-native"

import firestore from "@react-native-firebase/firestore"
import { ListarClienteProps } from "../types"
import { ICliente } from "../models/ICliente"

export default ({ navigation, route }: ListarClienteProps) => {
    const [cliente, setCliente] = useState([] as ICliente[]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const subscribe = firestore()
            .collection('Clientes')
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => {

                    return {
                        id: doc.id,
                        ...doc.data()
                    }

                }) as ICliente[];

                setCliente(data);
                setIsLoading(false);
            });

        return () => subscribe();
    }, []);

    function deletarCliente(id: string) {
        setIsLoading(true);

        firestore()
            .collection('Clientes')
            .doc(id)
            .delete()
            .then(() => {
                Alert.alert("Cliente", "Removido com Sucesso")
                navigation.navigate("HomeCliente")
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false))

    }
    function AlterarCliente(id: string) {
        navigation.navigate("AlterarCliente", { id: id })
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30 }}>Listagem de Clientes</Text>
            <FlatList
                data={cliente}
                renderItem={(info) => {
                    return (
                        <View style={styles.card}>
                            <View style={styles.dados_card}>
                                <Text>{info.index}</Text>
                                <Text style={{ fontSize: 35 }}>{info.item.Nome}</Text>
                                <Text>{info.item.Cpf}</Text>
                                <Text>{info.item.Rua}</Text>
                                <Text>{info.item.Complemento}</Text>
                                <Text>{info.item.Bairro}</Text>
                                <Text>{info.item.Cidade}</Text>
                                <Text>{info.item.Estado}</Text>
                                <Text>{info.item.DNasc}</Text>

                            </View>
                            <View style={styles.botao_deletar}>
                                <Pressable
                                    onPress={() => deletarCliente(info.item.id)}>
                                    <Text style={{ fontWeight: "bold", fontSize: 50 , backgroundColor: "red", margin: 3}}>
                                        X
                                    </Text>
                                </Pressable>
                                <Pressable
                                    onPress={() => AlterarCliente(info.item.id)}>
                                    <Text style={{ fontWeight: "bold", fontSize: 50, backgroundColor: "green", margin: 3 }}>
                                        A
                                    </Text>
                                </Pressable>
                            </View>
                        </View>
                    );
                }} />
            <Image style={styles.footer}
                source={require('../assets/slider-preset1-02.png')} />

        </View>
    );

}

const styles = StyleSheet.create({
    card: {
        borderWidth: 2,
        borderColor: 'yellow',
        margin: 5,
        borderRadius: 10,
        padding: 3,
        flexDirection: 'row',
        width: 380,
        right: 1,
    },
    dados_card: {
        flex: 1
    },
    botao_deletar: {
        backgroundColor: 'black',
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'

    },
    footer: {
        width: 410,
        height: 200,
        marginLeft: 3
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#008080',


    },
});