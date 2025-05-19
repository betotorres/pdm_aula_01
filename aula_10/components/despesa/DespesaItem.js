import { View, Text, Pressable, StyleSheet } from 'react-native';
import {useNavigation} from '@react-navigation/native';

function getDataFormatada(data){
    return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
}

function DespesaItem({item}){
    const navigation = useNavigation();

    function despesaPressHandler(){
        navigation.navigate('GerenciarDespesa', {
            despesaId: item.id
        });
    }
    
    return (
        <Pressable onPress={despesaPressHandler}>
            <View style={styles.itemContainer}>
                <View style={styles.itemText}>
                    <Text>{getDataFormatada(item.data)}</Text>
                </View>
                <View style={styles.itemText}>
                    <Text>{item.descricao}</Text>
                </View>
                <View style={styles.itemText}>
                    <Text>R$ {item.valor}</Text>
                </View>
                    
            </View>
        </Pressable>
    );
}

export default DespesaItem;

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        padding: 5,
        marginVertical: 5,
        marginHorizontal: 5,
        backgroundColor: 'lightgray',
        flexDirection: 'row',
    },
    itemText: {
        flex: 1,
        padding: 2,
        marginVertical: 2,
        marginHorizontal: 2,
        alignContent: 'left',
    },

})