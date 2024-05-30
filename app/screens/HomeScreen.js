import { View, Text, StyleSheet, Button } from 'react-native'

export const Home = ({ navigation }) => {
    return <View style={styles.container}>
        <Text>BIENVENIDO A MI PROGRAMA, SOY EL E2</Text>
        <Text>Espero te la pases bien</Text>
        <View style={styles.botones}>

            <View style={styles.boton1}>
                <Button
                    title='CONTACTS'
                    onPress={() => {
                        navigation.navigate('CallNumber');
                    }}
                />
            </View>



            <Button
                title='PRODUCTOS'
                onPress={() => {
                    navigation.navigate('ProductNavigation');
                }}
            />

        </View>

    </View>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botones: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,

    },
    boton1: {
        backgroundColor:'green',
        marginRight: 60,

    },
});
