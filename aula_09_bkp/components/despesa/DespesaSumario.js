import {Text, View} from 'react-native';

function DespesaSumario({ despesas, periodo}){
    const somaDespesas = despesas.reduce((acc, despesa) => acc + despesa.valor, 0);

    return (
       <View>
        <Text>{periodo}</Text>
        <Text>R$ {somaDespesas.toFixed(2)}</Text>
        </View>
    )
}

export default DespesaSumario;

