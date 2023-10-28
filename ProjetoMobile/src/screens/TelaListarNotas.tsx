import { useEffect, useState } from "react"
import { INota } from "../models/INota"
import { Alert, Pressable, View, Text, FlatList, StyleSheet } from "react-native"

import firestore from "@react-native-firebase/firestore"
import { ListarNotasProps } from "../types"

export default ({ navigation, route }: ListarNotasProps) => {
    const [notas, setNotas] = useState([] as INota[]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const subscribe = firestore()
            .collection('notas')
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => {

                    return {
                        id: doc.id,
                        ...doc.data()
                    }

                }) as INota[];

                setNotas(data);
                setIsLoading(false);
            });

        return () => subscribe();
    }, []);

    function deletarNota(id: string) {
        setIsLoading(true);

        firestore()
            .collection('notas')
            .doc(id)
            .delete()
            .then(() => {
                Alert.alert("Nota", "Removido com Sucesso")
                navigation.navigate("Home")
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false))

    }

    return (
        <View>
            <Text style={{ fontSize: 30 }}>Listagem de notas</Text>
            <FlatList
                data={notas}
                renderItem={(info) => {
                    return (
                        <View style={styles.card}>
                            <View style={styles.dados_card}>
                                <Text>{info.index}</Text>
                                <Text style={{fontSize: 35}}>{info.item.titulo}</Text>
                                <Text>{info.item.descricao}</Text>
                            </View>
                            <View style={styles.botao_deletar}>
                                <Pressable
                                onPress={() => deletarNota(info.item.id)}>
                                    <Text style={{fontWeight:"bold", fontSize: 50}}>
                                        X
                                    </Text>
                                </Pressable>
                            </View>
                        </View>
                    );
                }}/>

            
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
        flexDirection: 'row'
    },
    dados_card:{
      flex: 1
    },
    botao_deletar: {
        backgroundColor: 'red',
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
        
    }
});