import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

const Imc = ({ }) => {
    const [imc, setImc] = useState();
    const [centimetros, setCentimetros] = useState();
    const [edad, setEdad] = useState();
    const [gramos, setGramos] = useState();

    const onHandlerChangeEdad = (text) => {
        setEdad(parseInt(text, 10));
    };
    const onHandlerChangeCm = (text) => {
        setCentimetros(parseInt(text, 10));
    };
    const onHandlerChangeGr = (text) => {
        setGramos(parseInt(text, 10));
    };
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Edad'
                keyboardType="numeric"
                onChangeText={onHandlerChangeEdad}
            ></TextInput>
            <TextInput
                style={styles.input}
                placeholder='Altura en cm'
                keyboardType="numeric"
                onChangeText={onHandlerChangeCm}
            ></TextInput>
            <TextInput
                style={styles.input}
                placeholder='Peso en kilos'
                keyboardType="numeric"
                onChangeText={onHandlerChangeGr}
            ></TextInput>
            <Button
                style={styles.button}
                title="Confirmar"
                onPress={() => setImc(gramos * 10000 / (centimetros * centimetros))}
            />
            <Text style={styles.texto}>
                Su indice de masa corporal es: {imc}</Text>
            {imc <= 18.5 ? <Text style={styles.texto}>Su peso esta por debajo de la media</Text> :
                imc > 18.5 && imc < 25 ? <Text style={styles.texto}>Su peso esta en la media</Text> :
                    imc >= 25 && imc < 30 ? <Text style={styles.texto}>Su peso esta sobre la media</Text> :
                        imc >= 30 ? <Text style={styles.texto}>Su peso esta en zona de obesidad</Text> : null}
            <Text>Tenga en cuenta que el IMC es relativo a su edad, sexo y nivel de grasa, para mas información visite a su medico/a de confianza</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button: {
        marginTop: 10,
    },
    texto: {
        fontFamily: 'Sriracha',
        marginTop: 20,
        fontSize: 20
    }
});

export default Imc;