import {View, Text} from 'react-native';
import {Pressable} from 'react-native';

function getDataFormatada (data)  {
    return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
}

function DespesaItem({descricao, data, valor}){

    return (
         <Pressable>
            <View>
                <View>
                    <Text>{descricao}</Text>
                    <Text>{getDataFormatada(data)}</Text>
                </View>
                <View>
                    <Text>{valor}</Text>
                </View>
            </View>
         </Pressable>
    )
}

export default DespesaItem;


