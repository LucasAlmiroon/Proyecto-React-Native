import { StyleSheet, FlatList, View } from 'react-native';
import CardAlumno from './CardAlumno';

const ListAlumnos = ({ alumnos, onModal }) => {
    return <View style={styles.listContainer}>
        <FlatList
            data={alumnos}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <CardAlumno item={item} onModal={onModal} />}
        />
    </View>
}
const styles = StyleSheet.create({
    listContainer: {

        width: "100%"
    }
})


export default ListAlumnos;