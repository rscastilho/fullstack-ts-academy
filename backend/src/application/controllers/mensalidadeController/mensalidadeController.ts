import express from 'express'
import mensalidadeService from '../../../services/mensalidadeService/mensalidadeService'

class mensalidadeController{
    router = express.Router()

    constructor(){
        this.mensalidade()
    }

    private mensalidade(){
        this.router.post('/', mensalidadeService.registrarMensaliade)
    }

}

export default new mensalidadeController().router