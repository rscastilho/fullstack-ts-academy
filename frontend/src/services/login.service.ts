import { useToast } from '@chakra-ui/react';
import { PresencaApi } from '../api/PresencaApi';
import { iPresenca } from '../interfaces/iPresenca';
const toast = useToast();



class loginService {
    data: Date
    numeroMatricula: number
    modalidade: number

    constructor(data: Date, numeroMatricula: number, modalidade: number){
    this.data = data
    this.numeroMatricula= numeroMatricula
    this.modalidade = modalidade
    
}

  async Presenca(data: iPresenca) {
    const result = await PresencaApi(data);
    if (result.status === 200) {
      toast({
        description: result.data.message.toString(),
        isClosable: true,
        status: 'info',
        duration: 2000,
        position: 'bottom',
      });
      console.log(result);
    } else {
      toast({
        description: 'Usuario não cadastrado no sistema',
        isClosable: true,
        status: 'warning',
        duration: 2000,
        position: 'bottom',
      });
    }
    return result;
  }
  catch(error: any) {
    return error;
  }
}

export default loginService;
