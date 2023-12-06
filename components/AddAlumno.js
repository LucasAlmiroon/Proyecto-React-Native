import { View, TextInput, Button, StyleSheet } from "react-native"

const AddAlumno = ({ valueNombre, valueApellido, onChangeName, onChangeLastName, addAlumno }) => {

    return <View style={styles.inputContainer}>
        <TextInput
            style={styles.input}
            placeholder="Nombre"
            value={valueNombre}
            onChangeText={(t) => onChangeName(t)}
        />
        <TextInput
            style={styles.input}
            placeholder="Apellido"
            value={valueApellido}
            onChangeText={(t) => onChangeLastName(t)}
        />
        <TextInput
            style={styles.input}
            placeholder="Edad"
        />
        <Button width="auto" color="orange" title="Nuevo alumno" onPress={addAlumno} />
    </View>
}
const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",

    },
    input: {
        borderWidth: 4,
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: 200
    }
})

export default AddAlumno