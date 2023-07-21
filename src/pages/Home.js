import { Timestamp } from "firebase/firestore";

import { useState } from "react";

import styles from "./Home.module.css";
import { useInsertDocument } from "../hooks/useInsertDocument";
import { useSearchDocument } from "../hooks/useSearchDocument";
import { useDeleteDocument } from "../hooks/useDeleteDocument";
import { Link } from "react-router-dom";

const Home = () => {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");

  const { insertDocument } = useInsertDocument("biblioteca");
  const { document } = useSearchDocument("biblioteca");
  const { deleteDocument } = useDeleteDocument("biblioteca");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!titulo || !autor) {
      return;
    }

    const info = {
      titulo,
      autor,
      horasCriacao: Timestamp.now(),
      horasAtualizacao: Timestamp.now(),
    };

    await insertDocument(info);

    setAutor("");
    setTitulo("");
  };

  return (
    <div className={styles.container}>
      <h1>Lista De Livros</h1>
      <div>
        <form onSubmit={handleSubmit} className={styles.container_form}>
          <label>
            <span>Título</span>
            <input
              type="text"
              name=""
              id=""
              onChange={(e) => setTitulo(e.target.value)}
              value={titulo}
            />
          </label>
          <label>
            <span>Autor</span>
            <input
              type="text"
              name=""
              id=""
              onChange={(e) => setAutor(e.target.value)}
              value={autor}
            />
          </label>
          <button className={styles.btnEnviar}>Enviar</button>
        </form>
      </div>
      <div>
        {document &&
          document.map((doc) => (
            <div key={doc.id} className={styles.lista}>
              <p>ID: {doc.id}</p>
              <p>Título: {doc.titulo}</p>
              <p>Autor: {doc.autor}</p>
              <p>
                Data de criação: {doc.horasCriacao.toDate().toLocaleString()}
              </p>
              {doc.horasCriacao.toDate().toLocaleString() !==
              doc.horasAtualizacao.toDate().toLocaleString() ? (
                <p>Data de atualização: {doc.horasAtualizacao.toDate().toLocaleString()}</p>
              ) : (
                <p></p>
              )}
              <div className={styles.btnContainer}>
                <button
                  onClick={() => deleteDocument(doc.id)}
                  className={styles.btnDeletar}
                >
                  Deletar
                </button>
                <Link to={`/edit/${doc.id}`}>Editar</Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
