'use client'
import './page.css'
import { useEffect, useState } from "react";

export default function Questao2() {
  const [count, setCount] = useState(0);
  const decrementar = () => setCount((count) => count - 1);
  const incrementar = () => setCount((count) => count + 1);

  useEffect(() => {
    setCount(10);
  }, []);

  return (
    <>
      <h1>Questão 2</h1>
      <p>
        Crie um contador inicializado em 0. A tela deve exibir dois botões: um
        para incrementar o contador e outro para decrementar o contador. Ao
        carregar a tela, o contador deve ser atualizado para 10. Implemente a
        lógica para atualizar o contador quando a tela for carregada e a lógica
        para atualizar o contador quando os botões forem clicados.
      </p>
      <div className="card">
        <div>
          <button onClick={decrementar}>-1</button>
          <button onClick={incrementar}>+1</button>
        </div>
        <div className="contador">{count}</div>
      </div>
    </>
  );
}
