import { useNavigate } from "react-router-dom";
import { login } from "../../../utils/auth";

export function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/dashboard");
  };

  return (
    <div className="text-center mt-20">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Entrar
      </button>
    </div>
  );
}
