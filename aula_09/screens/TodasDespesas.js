import {Text} from 'react-native'
import DespesaSaida from '../components/despesa/DespesaSaida'

function TodasDespesas(){

    const DUMMY_DESPESAS = [
        {
            id: '1',
            descricao: 'Conta de luz',
            valor: 100.99,
            data: new Date('2025-03-11')
        },
        {
            id: '2',
            descricao: 'Conta de Agua',
            valor: 40.99,
            data: new Date('2025-03-21')
        }
        
        ]

    return (
        <DespesaSaida despesas={DUMMY_DESPESAS} periodo={'Total'}/>
    )

}

export default TodasDespesas