import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";


const Prova2 = () => {
    

    function logar() {
       

    }
    return (

        <View style={styles.container}>
            <Text>Logar</Text>
            <Pressable style={styles.botao}
                // onPress={() => logar()}
                >

                <Text style={{ fontSize: 20 }}>Pressione aqui</Text>
            </Pressable>
        </View>
    )

}

export default Prova2;
const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },

    botao: {

        width: 180,
        height: 80,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        backgroundColor: '#d4d0cf',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center'

    }
});