import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function DetailsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Tela de Detalhes</Text>
            <Text style={styles.description}>
                Este aplicativo foi criado para demonstrar a navegação entre telas no React Native.
            </Text>
            <Image
                source={require('../assets/bob.jpg')}
                style={{ width: 200, height: 250, marginBottom: 20 }}
            />
            <Button
                title="Voltar para Home"
                onPress={() => navigation.goBack()}
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