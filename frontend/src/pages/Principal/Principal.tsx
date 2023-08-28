import styles from './Principal.module.css';
import Carousel from './../../components/Carousel/Carousel';
import { Divider } from '@chakra-ui/react';

const Principal = () => {
  return (
    <div className={styles.principal}>
      <Divider marginBottom={5} />
      <div>
        <Carousel />
      </div>
      <Divider marginTop={5} />
    </div>
  );
};

export default Principal;
