import styles from "./login-register.module.css";
import { useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { Button, Input, Text, Divider, useToast } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import appApi from "../../api/appApi";
import { AxiosResponse } from "axios";
import { iLogin } from "../../interfaces/iLogin";
import Spinner from "../../components/Spinner/Spinner";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>();
  const [senha, setSenha] = useState<string>("");
  const [resultado, setResultado] = useState<AxiosResponse<iLogin>>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const toast = useToast();

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const result: AxiosResponse<iLogin> = await appApi.post<iLogin>(
        "/login",
        { email, senha }
      );
      if (result) {
        setResultado(result);
        setIsLoading(false);
        localStorage.setItem("@token", JSON.stringify(result?.data.token));
        toast({
          description: result?.data.message.toString(),
          isClosable: true,
          status: "success",
          duration: 3000,
        });
        handleCancelar();
      }
      // eslint-disable-next-line
    } catch (error: any) {
      toast({
        description: error.response.data.message.toString(),
        isClosable: true,
        status: "error",
        duration: 3000,
      });
      console.log(error.response.data.message);
      setIsLoading(false);
      return error;
    }
  };

  const handleCancelar = () => {
    setEmail("");
    setSenha("");
    navigate("/");
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
                isDisabled={!email || !senha}
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
