import styles from "./login-register.module.css";
import { useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { Button, Input, Text, Divider } from "@chakra-ui/react";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <FaRegUser size={"3em"} />
        <span className={styles.tituloLogin}>Logar no sistema</span>
        <div>
          <Text size={"sm"}> Email:</Text>
          <Input type="text" marginBottom={15} width={"md"} />
        </div>
        <div>
          <Text size={"sm"}> Senha:</Text>
          <Input type="password" size={"md"} marginBottom={25} width={"md"} />
        </div>
        <Divider marginBottom={"5"} />
        <div className={styles.action}>
          <Button
            colorScheme="telegram"
            size={"md"}
            marginEnd={3}
            onClick={() => navigate("/")}
          >
            Logar
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
            onClick={() => navigate("/register")}
          >
            Não tenho cadastro
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
