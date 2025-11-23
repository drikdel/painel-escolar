import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [matricula, setMatricula] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Credenciais de teste (visíveis na UI)
  const TEST_USER = "aluno";
  const TEST_PASS = "123";

  function handleLogin(e) {
    e.preventDefault();
    setError("");
    console.log("Tentando logar:", { matricula, senha });

    if (!matricula || !senha) {
      setError("Preencha todos os campos.");
      console.warn("Campos vazios");
      return;
    }

    setLoading(true);

    // Simula delay (como se fosse consulta ao servidor)
    setTimeout(() => {
      if (matricula === TEST_USER && senha === TEST_PASS) {
        const alunoObj = { nome: "Aluno Teste", matricula };
        localStorage.setItem("aluno", JSON.stringify(alunoObj));
        console.log("Login bem-sucedido:", alunoObj);
        // redireciona para painel
        navigate("/painel");
      } else {
        setError("Matrícula ou senha incorretas.");
        console.warn("Credenciais incorretas");
      }
      setLoading(false);
    }, 400);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-sm bg-white shadow-xl rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-center mb-3">Login</h1>

        <p className="text-sm text-gray-500 text-center mb-4">
          Use <span className="font-mono">aluno</span> / <span className="font-mono">123</span> para testar
        </p>

        <form onSubmit={handleLogin} className="space-y-4" autoComplete="off">
          <div>
            <label className="block text-sm mb-1">Matrícula</label>
            <input
              name="matricula"
              value={matricula}
              onChange={(e) => setMatricula(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg outline-none focus:border-blue-600"
              placeholder="Digite sua matrícula"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Senha</label>
            <input
              name="senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg outline-none focus:border-blue-600"
              placeholder="Digite sua senha"
            />
          </div>

          {error && (
            <div className="text-red-600 font-medium text-sm text-center">{error}</div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full ${loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"} text-white py-2 font-semibold rounded-lg transition`}
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
}
