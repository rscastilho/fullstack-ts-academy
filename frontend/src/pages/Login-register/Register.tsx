import styles from "./login-register.module.css";
import { FaRegUser } from "react-icons/fa";
import { Text, Button, Select, Grid, GridItem } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <FaRegUser size={"3em"} />
        <span className={styles.tituloLogin}>Registar novo usuário</span>

        <Grid templateColumns="repeat(2, 1fr)" gap={5}>
          <GridItem>
            <Text size={"sm"}> Nome Completo:</Text>
            <Input type="text" marginBottom={1} width={"300px"} />
          </GridItem>
          <GridItem>
            <Text size={"sm"}> Email:</Text>
            <Input type="email" marginBottom={1} width={"300px"} />
          </GridItem>

          <GridItem>
            <Text size={"sm"}> CPF:</Text>
            <Input type="text" marginBottom={1} width={"300px"} />
          </GridItem>
          <GridItem>
            <Text size={"sm"}> Data Nascimento:</Text>
            <Input type="date" marginBottom={1} width={"300px"} />
          </GridItem>
          <GridItem>
            <Text size={"sm"}> Telefone:</Text>
            <Input type="tel" marginBottom={1} width={"300px"} />
          </GridItem>

          <GridItem>
            <Text size={"sm"}> CEP:</Text>
            <Input type="text" marginBottom={1} width={"300px"} />
          </GridItem>
          <GridItem>
            <Text size={"sm"}> Endereço:</Text>
            <Input type="text" marginBottom={1} width={"300px"} />
          </GridItem>
          <GridItem>
            <Text size={"sm"}> Complemento:</Text>
            <Input type="text" marginBottom={1} width={"300px"} />
          </GridItem>
          <GridItem>
            <Text size={"sm"}> Bairro:</Text>
            <Input type="text" marginBottom={1} width={"300px"} />
          </GridItem>
          <GridItem>
            <Text size={"sm"}> Cidade:</Text>
            <Input type="text" marginBottom={1} width={"300px"} />
          </GridItem>
          <GridItem>
            <Text size={"sm"}> UF:</Text>
            <Input type="text" size={"md"} marginBottom={1} width={"300px"} />
          </GridItem>
          <GridItem>
            <Text size={"sm"}> Plano:</Text>
            <Select
              placeholder="Selecione o plano"
              width={"300px"}
              marginBottom={1}
            >
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
            <Text size={"sm"}> Senha:</Text>
            <Input type="password" marginBottom={5} width={"300px"} />
          </GridItem>
          <GridItem>
            <Text size={"sm"}> Confirmar Senha:</Text>
            <Input type="password" marginBottom={5} width={"300px"} />
          </GridItem>
        </Grid>
        <Divider marginBottom={"5"} />
        <div className={styles.action}>
          <Button
            colorScheme="telegram"
            size={"md"}
            marginEnd={3}
            onClick={() => navigate("/")}
          >
            Salvar
          </Button>
          <Button
            colorScheme="red"
            size={"md"}
            marginEnd={3}
            onClick={() => navigate("/")}
          >
            Cancelar
          </Button>
          <Button
            colorScheme="green"
            size={"md"}
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
