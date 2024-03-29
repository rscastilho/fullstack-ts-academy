export interface iUser{
    id?: number;
    email?: string;
    nomeCompleto?: string;
    cpf?: string;
    dataNascimento?: string;
    telefone?: string;
    senha?: string;
    confirmarSenha?: string;
    cep?: string;
    endereco?: string;
    complemento?: string;
    bairro?: string;
    cidade?: string;
    uf?: string;
    dataInicio?: Date | undefined;
    planoId?: number | undefined;
    blocked?: boolean;
    deleted?:boolean

}