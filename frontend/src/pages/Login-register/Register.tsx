import styles from "./login-register.module.css";
import { FaRegUser } from "react-icons/fa";
import { Text, Button, Select, Grid, GridItem } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useMemo, useRef, useState } from "react";
import { useEffect } from "react";
import { iRegister } from "../../interfaces/iRegister";
import PlanoApi from "../../api/PlanoApi";
import { iPlano } from "../../interfaces/iPlano";

const Register = () => {
  const navigate = useNavigate();
  const nomeCompletoRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState<string>();
  const [nomeCompleto, setNomeCompleto] = useState<string>();
  const [cpf, setCpf] = useState<string>();
  const [dataNascimento, setDataNascimento] = useState<string>();
  const [telefone, setTelefone] = useState<string>();
  const [senha, setSenha] = useState<string>();
  const [confirmarSenha, setConfirmarSenha] = useState<string>();
  const [cep, setCep] = useState<string>();
  const [endereco, setEndereco] = useState<string>();
  const [complemento, setComplemento] = useState<string>();
  const [bairro, setBairro] = useState<string>();
  const [cidade, setCidade] = useState<string>();
  const [uf, setUf] = useState<string>();
  const [dataInicio, setDataInicio] = useState<Date>();
  const [planoId, setPlanoId] = useState<number>();
  const [listaPlanos, setListaPlanos] = useState<string[]>();

  const data: iRegister = {
    email,
    nomeCompleto,
    cpf,
    dataNascimento,
    telefone,
    senha,
    confirmarSenha,
    cep,
    endereco,
    complemento,
    bairro,
    cidade,
    uf,
    dataInicio,
    planoId,
  };

  const carregarPlanos = async () => {
    try {
      const result = await PlanoApi();
      setListaPlanos(result.data);
      return;
    } catch (error) {
      console.log(error);
    }
  };

  useMemo(() => {
    carregarPlanos();
  }, []);

  useEffect(() => {
    nomeCompletoRef.current?.focus();
  });

  return (
    <div className={styles.containers}>
      <div className={styles.form}>
        <FaRegUser size={"3em"} />
        <span className={styles.tituloLogin}>Registar novo usuário</span>
        <form>
          <Grid templateColumns="repeat(2, 1fr)" gap={0.5}>
            <GridItem>
              <Text fontSize={"sm"}> Nome Completo:</Text>
              <Input
                type="text"
                width={"300px"}
                size={"sm"}
                borderRadius={"md"}
                ref={nomeCompletoRef}
                value={nomeCompleto}
                isRequired
              />
            </GridItem>
            <GridItem>
              <Text fontSize={"sm"}> Email:</Text>
              <Input
                type="email"
                width={"300px"}
                size={"sm"}
                borderRadius={"md"}
                value={email}
                isRequired
                readOnly
              />
            </GridItem>

            <GridItem>
              <Text fontSize={"sm"}> CPF:</Text>
              <Input
                type="text"
                width={"300px"}
                size={"sm"}
                borderRadius={"md"}
                value={cep}
                isRequired
              />
            </GridItem>
            <GridItem>
              <Text fontSize={"sm"}> Data Nascimento:</Text>
              <Input
                type="date"
                width={"300px"}
                size={"sm"}
                borderRadius={"md"}
                value={dataNascimento}
                isRequired
              />
            </GridItem>
            <GridItem>
              <Text fontSize={"sm"}> Telefone:</Text>
              <Input
                type="tel"
                width={"300px"}
                size={"sm"}
                borderRadius={"md"}
                value={telefone}
              />
            </GridItem>

            <GridItem>
              <Text fontSize={"sm"}> CEP:</Text>
              <Input
                type="text"
                width={"300px"}
                size={"sm"}
                borderRadius={"md"}
                value={cep}
                isRequired
              />
            </GridItem>
            <GridItem>
              <Text fontSize={"sm"}> Endereço:</Text>
              <Input
                type="text"
                width={"300px"}
                size={"sm"}
                borderRadius={"md"}
                value={endereco}
                isRequired
              />
            </GridItem>
            <GridItem>
              <Text fontSize={"sm"}> Complemento:</Text>
              <Input
                type="text"
                width={"300px"}
                size={"sm"}
                borderRadius={"md"}
                value={complemento}
                isRequired
              />
            </GridItem>
            <GridItem>
              <Text fontSize={"sm"}> Bairro:</Text>
              <Input
                type="text"
                width={"300px"}
                size={"sm"}
                borderRadius={"md"}
                value={bairro}
                isRequired
              />
            </GridItem>
            <GridItem>
              <Text fontSize={"sm"}> Cidade:</Text>
              <Input
                type="text"
                width={"300px"}
                size={"sm"}
                borderRadius={"md"}
                value={cidade}
                isRequired
              />
            </GridItem>
            <GridItem>
              <Text fontSize={"sm"}> UF:</Text>
              <Input type="text" size={"sm"} width={"300px"} value={uf} />
            </GridItem>
            <GridItem>
              <Text fontSize={"sm"}> Plano:</Text>

              <div>
                <Select
                  placeholder="Selecione o plano"
                  width={"300px"}
                  size={"sm"}
                  onChange={(e) => setPlanoId(+e.target.value)}
                  defaultValue={""}
                >
                  <option defaultValue={"Selecione o plano"} value={0}></option>
                  {listaPlanos &&
                    listaPlanos?.map((plano: any, i) => (
                      <option key={i} value={+plano.id}>
                        {plano.descricao}
                      </option>
                    ))}
                </Select>
              </div>
              {/* <Input
              type="date"
              size={"md"}
              marginBottom={0}
              width={"300px"}
              visibility={"hidden"}
            /> */}
            </GridItem>
            <GridItem>
              <Text fontSize={"sm"}> Senha:</Text>
              <Input
                type="password"
                marginBottom={5}
                width={"300px"}
                size={"sm"}
                borderRadius={"md"}
                value={senha}
                isRequired
              />
            </GridItem>
            <GridItem>
              <Text fontSize={"sm"}> Confirmar Senha:</Text>
              <Input
                type="password"
                marginBottom={5}
                width={"300px"}
                size={"sm"}
                borderRadius={"md"}
                value={confirmarSenha}
                isRequired
              />
            </GridItem>
          </Grid>
          <Divider marginBottom={"3"} />
          <div className={styles.action}>
            <Button
              colorScheme="whatsapp"
              size={"sm"}
              marginEnd={3}
              onClick={() => navigate("/")}
            >
              Salvar
            </Button>
            <Button
              colorScheme="red"
              size={"sm"}
              marginEnd={3}
              onClick={() => navigate("/")}
            >
              Cancelar
            </Button>
            <Button
              colorScheme="yellow"
              size={"sm"}
              marginEnd={3}
              onClick={() => navigate("/login")}
            >
              Voltar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
