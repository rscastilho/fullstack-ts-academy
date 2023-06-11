import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";

interface ToastProps {
  title: string;
  description?: string;
  status: "info" | "success" | "warning" | "error";
}

const Toast: React.FC<ToastProps> = ({ title, description, status }) => {
  const toast = useToast();

  useEffect(() => {
    toast({
      title,
      description,
      status,
      duration: 3000, // Duração em milissegundos
      isClosable: true,
    });
  }, [title, description, status, toast]);

  return null;
};

export default Toast;
