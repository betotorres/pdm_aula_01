import { FlatList} from 'react-native';
import DespesaItem from './DespesaItem';

function renderDespesaItem(itemData){
    return (
    <DespesaItem descricao = {itemData.item.descricao}
     data = {itemData.item.data}
     valor = {itemData.item.valor}/>
    )
}

function DespesaLista({despesas}){

    return (
        <FlatList data={despesas} 
        renderItem={renderDespesaItem} 
        keyExtractor={(item) => item.id} />
    )
}

export default DespesaLista;
