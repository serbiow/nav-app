import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bem-vindo(a) à Tela Inicial!</Text>
            <Text style={styles.description}>
                Este é o ponto de partida do aplicativo. Explore as funcionalidades disponíveis.
            </Text>
            <Button
                title="Ir para Detalhes"
                onPress={() => navigation.navigate('Details')}
            />
            <Button
                title="Sobre o Desenvolvedor"
                onPress={() => navigation.navigate('About')}
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
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
});