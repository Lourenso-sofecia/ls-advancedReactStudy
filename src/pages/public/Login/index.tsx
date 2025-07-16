
import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../stores/authStore";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, loading, user, token } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Essa rota que tentou acessar antes do login (se tiver)
  const from = (location.state as any)?.from?.pathname || "/dashboard";

  useEffect(() => {
    document.title = "Login - LS Advanced Study";
  }, []);
  
  // Se estiver logado, já renderiza o redirect (navegação síncrona)
  if (token) {
    return <Navigate to={from} replace />;
  }
  
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const success = await login(email, password);
    if (!success) return;
    // Se o login for bem-sucedido, redireciona para o dashboard
    navigate("/dashboard");
  }

  

  return (
    <div className="max-w-sm mx-auto mt-20 sm:p-4 sm:border sm:rounded sm:shadow ">
      <h1 className="text-xl font-bold mb-4 dark:text-primary">Login</h1>
      <form onSubmit={handleSubmit} className="sm:space-y-3 space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          required
          className="w-full p-2 border rounded"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}
