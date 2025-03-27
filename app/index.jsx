import { View, Text, Button, StyleSheet } from "react-native";
import { Link, Stack, useNavigation } from 'expo-router';

export default function Home() {
    const navigation = useNavigation();

    const handHideHeader = () => {
        navigation.setOptions({ headerShown: false, });
    }
    const handOffHeader = () => {
        navigation.setOptions({ headerShown: true, });
    }
    return (

        <View style={styles.container}>
            <Stack.Screen options={{
                title: 'Senai',
                headerRight: () => (
                    <Button
                        onPress={() => alert('Olá, aula de mobile')}
                        title="Info"
                        color="#000"
                    />
                ),
                headerStyle: {
                    backgroundColor: '#FFD700',
                },
                headerTintColor: '#000',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 30,
                }
            }} />

            <Button title="Ocultar Header" onPress={handHideHeader} />
            <Button title="Ativar Header" onPress={handOffHeader} />

            <Text>Bem-vindo à tela inicial!</Text>
            <Link href="/sobre">Ir para Sobre</Link>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    }
});