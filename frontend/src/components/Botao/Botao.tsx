import { Button} from '@chakra-ui/react'
import { iBotao } from '../../interfaces/iBotao'



const Botao = ({color, size, textoBotao,funcao, alinhamento}: iBotao) => {
  return (
    <div style={{display:'flex', justifyContent:alinhamento, margin:'10px'}}>
    <Button colorScheme={color} size={size} onClick={funcao}>
        {textoBotao}
    </Button>
    </div>
  )
}

export default Botao