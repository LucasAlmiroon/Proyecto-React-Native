import { StyleSheet, Text, View, Image } from 'react-native'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import SubmitButton from '../components/SubmitButton'
import * as ImagePicker from 'expo-image-picker';
import { reemplazarFoto } from '../features/profile/profileSlice'

const ImageSelector = ({ navigation }) => {

    const [image, setImage] = useState(null)
    const dispatch = useDispatch()

    const pickImage = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync()
        if (granted) {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                base64: true,
                quality: 0.2
            })
            if (!result.canceled) {
                setImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
            }
        } else {
            console.log('no permitido')
        }
    }
    const pickImageFromGalery = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync()
        if (granted) {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                base64: true,
                quality: 0.2
            })
            if (!result.canceled) {
                setImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
            }
        } else {
            console.log('no permitido')
        }
    }
    const confirmImage = () => {
        if (image != null) {
            dispatch(reemplazarFoto(image))
            navigation.navigate('Perfil')
        }
    }


    return (
        <View style={styles.container}>
            <Image
                style={
                    styles.img
                }
                source={
                    require('../assets/user-default.jpg')
                }
            />
            <SubmitButton
                onPress={() => pickImage()}
                texto="Tomar foto">
            </SubmitButton>
            <SubmitButton
                onPress={() => pickImageFromGalery()}
                texto="Elegir de galeria">
            </SubmitButton>
            <SubmitButton
                onPress={() => confirmImage()}
                texto="Confirmar">
            </SubmitButton>
        </View>
    )
}
export default ImageSelector

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 60
    },
    img: {
        width: 150,
        height: 150,
        borderRadius: 100,
        marginBottom: 10
    },
})