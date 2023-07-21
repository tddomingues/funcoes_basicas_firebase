import { useEffect, useState } from "react";

import styles from "./Edit.module.css";

import { Link, useParams, useNavigate } from "react-router-dom";

import { useGetDocument } from "../hooks/useGetDocument";
import { useUpdateDocument } from "../hooks/useUpdateDocument";
import { Timestamp } from "firebase/firestore";

const Edit = () => {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const { id } = useParams();

  const navigate = useNavigate();

  const { updateDocument } = useUpdateDocument("biblioteca", id);
  const {document} = useGetDocument("biblioteca", id)

  useEffect(() => {
    if(document) {
        setAutor(document.autor)
        setTitulo(document.titulo)
    }
  },[document])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!titulo || !autor) {
      return;
    }

    const info = {
      titulo,
      autor,
      horasAtualizacao: Timestamp.now()
    };

    await updateDocument(info);

    navigate("/");
  };
  return (
    <div className={styles.container}>
      <h1>Edição</h1>
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
          <div className={styles.btnContainer}>
            <button className={styles.btnEnviar}>Editar</button>
            <Link to="/">Voltar</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
