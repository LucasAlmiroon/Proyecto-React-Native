import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useGetExercisesQuery } from '../app/services/exercisesApi'

export const DropdownComponent = () => {
    const [value, setValue] = useState();
    const { data, isLoading, error } = useGetExercisesQuery()
    return (
        <>
            {isLoading ? <Text>Cargando...</Text> :

                <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={data}
                    search
                    maxHeight={300}
                    labelField="nombreEjercicio"
                    valueField="nombreEjercicio"
                    placeholder="Select item"
                    searchPlaceholder="Search..."
                    value={value}
                    onChange={item => {
                        setValue(item.nombreEjercicio)
                    }}
                    renderLeftIcon={() => (
                        <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                    )}
                />
            }
        </>
    );
};

const styles = StyleSheet.create({
    dropdown: {
        margin: 16,
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});
