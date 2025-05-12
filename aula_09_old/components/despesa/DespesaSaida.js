import { View, Text } from 'react-native';
import DespesaSumario from './DespesaSumario';
import DespesaLista from './DespesaLista';

function DespesaSaida(){
    return (
        <View>
           <DespesaSumario/>
           <DespesaLista/>
        </View>
    );
}

export default DespesaSaida;
