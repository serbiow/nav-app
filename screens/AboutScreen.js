import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function AboutScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sobre o(a) Desenvolvedor(a)</Text>
            <Text style={styles.text}>
                Este aplicativo foi desenvolvido por mim como parte de um projeto para aprendizado de React Native e navegação.
            </Text>
            <Text style={styles.text}>
                Contato: sergiohenriqueqqq@gmail.com
            </Text>
            <Button
                title="Voltar para Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
});