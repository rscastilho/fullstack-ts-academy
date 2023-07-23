import { useContext } from "react";
import { Authcontext } from "../../Context/Context";
import styles from "./login-register.module.css";
import { useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { Button, Input, Text, Divider, useToast } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { AxiosResponse } from "axios";
import { iLogar, iLogin } from "../../interfaces/iLogin";
import Spinner from "../../components/Spinner/Spinner";
import LoginApi from "../../api/LoginApi";
// import appApi from "../../api/appApi";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [, setResultado] = useState<AxiosResponse<iLogin>[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const toast = useToast();

  const { state, setState } = useContext(Authcontext);

  const data: iLogar = {
    email,
    senha,
  };

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await LoginApi(data);

      if (result.message[0].includes("formato válido")) {
        toast({
          description: result.message.toString(),
          isClosable: true,
          status: "info",
          duration: 2000,
          position: "top-right",
        });
        return;
      }

      if (result.status === 400) {
        toast({
          description: result.message.toString(),
          isClosable: true,
          status: "warning",
          duration: 2000,
          position: "top-right",
        });
        return;
      } else if (result.message.includes("Bem vindo")) {
        setResultado(result);
        localStorage.setItem("@token", result.token);
        setState({ logado: true });
        // console.log(localStorage.getItem("@token"));
        //  appApi.defaults.headers.authorization = `bearer ${result.token}`;
        toast({
          description: result.message.toString(),
          isClosable: true,
          status: "success",
          duration: 2000,
        });
        navigate("/administracao");
        console.log("loginRealizado", localStorage);
      } else {
        toast({
          description: result.message.toString(),
          isClosable: true,
          status: "warning",
          duration: 2000,
        });
        return
      }
      // eslint-disable-next-line
    } catch (error: any) {
      setState({ logado: false });
      toast({
        description: error.toString(),
        isClosable: true,
        status: "error",
        duration: 3000,
      });
      console.log(error);
      return error;
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelar = () => {
    setEmail("");
    setSenha("");
    navigate("/");
    setState({ logado: false });
  };

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <FaRegUser size={"3em"} />
        <span className={styles.tituloLogin}>Logar no sistema</span>
        {isLoading ? (
          <Spinner />
        ) : (
          <form onSubmit={handleLogin}>
            <div>
              <Text fontSize={"sm"}> Email:</Text>
              <Input
                type="email"
                width={"300px"}
                size={"sm"}
                borderRadius={"md"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                ref={emailRef}
                required
                placeholder="seuemail@email.com"
              />
            </div>
            <div>
              <Text fontSize={"sm"}> Senha:</Text>
              <Input
                type="password"
                marginBottom={5}
                width={"300px"}
                size={"sm"}
                borderRadius={"md"}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
                placeholder="**********"
              />
            </div>
            <Divider marginBottom={"5"} />
            <div className={styles.action}>
              <Button
                type="submit"
                colorScheme="facebook"
                size={"sm"}
                marginEnd={3}
                isDisabled={!email || !senha}
              >
                Logar
              </Button>
              <Button
                colorScheme="red"
                size={"sm"}
                marginEnd={3}
                onClick={handleCancelar}
                // isDisabled={!email || !senha}
              >
                Cancelar
              </Button>
              <Button
                colorScheme="yellow"
                size={"sm"}
                marginEnd={3}
                onClick={() => navigate("/register")}
              >
                Não tenho cadastro
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
