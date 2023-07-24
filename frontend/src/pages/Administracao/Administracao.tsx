import { Link } from 'react-router-dom';
import styles from './Administracao.module.css';

interface content {
  titulo: string;
  link: string;
  descricao: string;
}

const contentAdministration: content[] = [
  {
    titulo: 'Usuários',
    link: '/usuarios',
    descricao: 'Gestão de usuários',
  },
  {
    titulo: 'Planos',
    link: '/planos',
    descricao: 'Gestão de planos e valores',
  },
];

const Administracao = () => {
  return (
    <div className={styles.contentItens}>
      {contentAdministration.map((contents: content, i: number) => (
        <div key={i} className={styles.item}>
          <Link to={contents.link}>{contents.titulo}</Link>
          <p>{contents.descricao}</p>
        </div>
      ))}
    </div>
  );
};

export default Administracao;
