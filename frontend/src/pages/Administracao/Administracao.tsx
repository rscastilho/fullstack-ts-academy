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
        <>
          <Link to={contents.link}>{contents.titulo}</Link>
          <p key={i}>{contents.descricao}</p>
        </>
      ))}
    </div>
  );
};

export default Administracao;
