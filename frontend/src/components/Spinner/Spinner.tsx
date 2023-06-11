import { Spinner as Spinners } from "@chakra-ui/react";
const Spinner = () => {
  return (
    <div>
      <Spinners
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </div>
  );
};

export default Spinner;
