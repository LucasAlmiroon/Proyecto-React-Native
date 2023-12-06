import { Button, StyleSheet, Text, View } from 'react-native';

const CardAlumno = ({ item, onModal }) => {
    return <View style={styles.cardAlumno}>
        <Text>{item.name}</Text>
        <Text>{item.lastName}</Text>
        <Button color="orange" title="Add Rutina" />
        <Button color="red" title="X" onPress={() => onModal(item)} />
    </View>
}

const styles = StyleSheet.create({
    cardAlumno: {

        flexDirection: "row",
        padding: 10,
        margin: 10,
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 4
    }
})


export default CardAlumno;