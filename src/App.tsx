import "./App.css";
import { useState } from "react";
import { Login } from "./styles";
import Botao from "./components/Botao";

// Tarefas:
// TODO: - O botão de login deve disparar a função login() e simular o login.
// TODO: - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
// TODO: - Desabilite o botão de Login equanto você está executando o login.

/* OPCIONAL */

// TODO: - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert)
// TODO: - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.

export default function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("Entrar");
  // const [variante, setVariante] = useState(Enable);

  // const toggleBotao = () => {
  //   setVariante(isEnable.variante === "Enable" ? Disable : Enable);
  // };

  function login() {
    setMensagem("Carregando");
    setTimeout(() => alert("Bem vindo ao site"), 3000);
  }

  function handleReset() {
    setTimeout(() => location.reload(), 3001);
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    handleReset();
  }

  return (
    <Login>
      <img src="public/exp.png" alt="" style={{ marginTop: "30px" }} />
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <h2>Bem vindo</h2>
            <p>Entre com suas credenciais embaixo</p>
          </div>
          <label htmlFor="email" className="Email">
            Login
          </label>

          <input
            className="Email"
            autoFocus
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="senha">Senha</label>

          <input
            className="Senha"
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          {/* {email.length > 0 && senha.length >= 6 ? (
            <Button
              onClick={login}
              type="submit"
              style={{ background: "#003c5e" }}>
              {mensagem}
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={true}
              style={{ background: "#d5d5d5d5" }}>
              Entrar
            </Button>
          )} */}

          {/* Codigo brabo do Bruno */}
          {/* <Button
            onClick={login}
            type="submit"
            style={{
              background:
                email.length > 0 && senha.length >= 6 ? "#003c5e" : "#d5d5d5d5",
            }}
            disabled={!(email.length > 0 && senha.length >= 6)}>
            {mensagem}
          </Button> */}
          <Botao
            onClick={login}
            // isEnable={true}
            disabled={!(email.length > 0 && senha.length >= 6)}
            mensagem=""
            type="submit"
            children={mensagem}
          />
        </div>
      </form>
      <footer>Versão 1.0</footer>
    </Login>
  );
}
