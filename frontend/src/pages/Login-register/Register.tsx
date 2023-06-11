import styles from "./login-register.module.css";
import { FaRegUser } from "react-icons/fa";
import { Text, Button, Select, Grid, GridItem } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";

const Register = () => {
  const navigate = useNavigate();
  const nomeCompletoRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nomeCompletoRef.current?.focus();
  });

  return (
    <div className={styles.containers}>
      <div className={styles.form}>
        <FaRegUser size={"3em"} />
        <span className={styles.tituloLogin}>Registar novo usuário</span>

        <Grid templateColumns="repeat(2, 1fr)" gap={0.5}>
          <GridItem>
            <Text fontSize={"sm"}> Nome Completo:</Text>
            <Input
              type="text"
              width={"300px"}
              size={"sm"}
              borderRadius={"md"}
              ref={nomeCompletoRef}
            />
          </GridItem>
          <GridItem>
            <Text fontSize={"sm"}> Email:</Text>
            <Input
              type="email"
              width={"300px"}
              size={"sm"}
              borderRadius={"md"}
            />
          </GridItem>

          <GridItem>
            <Text fontSize={"sm"}> CPF:</Text>
            <Input
              type="text"
              width={"300px"}
              size={"sm"}
              borderRadius={"md"}
            />
          </GridItem>
          <GridItem>
            <Text fontSize={"sm"}> Data Nascimento:</Text>
            <Input
              type="date"
              width={"300px"}
              size={"sm"}
              borderRadius={"md"}
            />
          </GridItem>
          <GridItem>
            <Text fontSize={"sm"}> Telefone:</Text>
            <Input type="tel" width={"300px"} size={"sm"} borderRadius={"md"} />
          </GridItem>

          <GridItem>
            <Text fontSize={"sm"}> CEP:</Text>
            <Input
              type="text"
              width={"300px"}
              size={"sm"}
              borderRadius={"md"}
            />
          </GridItem>
          <GridItem>
            <Text fontSize={"sm"}> Endereço:</Text>
            <Input
              type="text"
              width={"300px"}
              size={"sm"}
              borderRadius={"md"}
            />
          </GridItem>
          <GridItem>
            <Text fontSize={"sm"}> Complemento:</Text>
            <Input
              type="text"
              width={"300px"}
              size={"sm"}
              borderRadius={"md"}
            />
          </GridItem>
          <GridItem>
            <Text fontSize={"sm"}> Bairro:</Text>
            <Input
              type="text"
              width={"300px"}
              size={"sm"}
              borderRadius={"md"}
            />
          </GridItem>
          <GridItem>
            <Text fontSize={"sm"}> Cidade:</Text>
            <Input
              type="text"
              width={"300px"}
              size={"sm"}
              borderRadius={"md"}
            />
          </GridItem>
          <GridItem>
            <Text fontSize={"sm"}> UF:</Text>
            <Input type="text" size={"sm"} width={"300px"} />
          </GridItem>
          <GridItem>
            <Text fontSize={"sm"}> Plano:</Text>
            <Select placeholder="Selecione o plano" width={"300px"} size={"sm"}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
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
      </div>
    </div>
  );
};

export default Register;
