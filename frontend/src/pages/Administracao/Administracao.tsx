import { Link } from "react-router-dom";

interface content {
  titulo: string;
  link: string;
  descricao: string;
}

const contentAdministration: content[] = [
  {
    titulo: "Usuários",
    link: "/usuarios",
    descricao: "Gestão de usuários",
  },
];

const Administracao = () => {
  return (
    <div>
      {contentAdministration.map((contents: content, i: number) => (
        <div key={i}>
          <Link to={contents.link}>{contents.titulo}</Link>
          <p>{contents.descricao}</p>
        </div>
      ))}
    </div>
  );
};

export default Administracao;
