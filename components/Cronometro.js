import { StyleSheet, Text, View, Button } from 'react-native'
import { useState } from 'react'

const Cronometro = ({ }) => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [customInterval, setCustomInterval] = useState(null);
    const [isPaused, setIsPaused] = useState(true);


    const startCronometro = () => {
        if (customInterval != null && !isPaused) {
            return
        };

        setCustomInterval(
            setInterval(() => {
                changeTime();
            }, 1000)
        );

        setIsPaused(false);
    }

    const stopCronometro = () => {
        if (customInterval) {
            setIsPaused(true);
            clearInterval(customInterval);
        }

    }

    const clearCronometro = () => {
        stopCronometro();
        setSeconds(0)
        setMinutes(0)
        setCustomInterval(null);
        setIsPaused(true);
    }

    const changeTime = () => {
        setSeconds((prevState) => {
            if (prevState + 1 === 60) {
                setMinutes(minutes + 1)
                return 0
            }
            return prevState + 1
        })
    }

    return (
        <View style={styles.container} >
            <Text style={styles.texto}> {minutes < 10 ? "0" + minutes : minutes}
                :{seconds < 10 ? "0" + seconds : seconds} </Text>
            <View style={styles.botones}>
                <Button title='Empezar' onPress={startCronometro} color="orange"></Button>
                <Button title='Frenar' onPress={stopCronometro} color="orange"></Button>
                <Button title='Reiniciar' onPress={clearCronometro} color="orange"></Button>
            </View>
        </View>
    )
}

export default Cronometro

const styles = StyleSheet.create({
    container: {
        marginTop: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botones: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20
    },
    texto: {
        fontSize: 80
    }
})