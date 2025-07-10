import { motion } from "framer-motion";
import { useAuthStore } from "../../../stores/authStore";
import { fadeSlideUp } from "../../../animations/motionVariants";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function Profile() {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `Profile - ${user?.name || "Usuário"}`;
  }, [user?.name]);

  return (
    <motion.section variants={fadeSlideUp} className="sm:container mx-auto sm:p-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 inline-block text-primary hover:underline"
      >
        &larr; Voltar
      </button>
      <h2 className="text-3xl font-semibold text-primary mb-6">Meu Perfil</h2>
      <div className="bg-white p-6 rounded-xl shadow max-w-md flex flex-col space-y-4">
        <div className="">
          <label className="block text-sm font-medium text-gray-700">
            Nome
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-primary focus:border-primary"
            defaultValue={user?.name || ""}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-primary focus:border-primary"
            defaultValue={user?.email || ""}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Groups
          </label>

          <select className="flex w-full mt-1 px-1.5 py-2 border rounded-lg shadow-sm focus:ring-primary focus:border-primary cursor-pointer">
            <option value={user?.group}>{user?.group}</option>
          </select>
        </div>
      </div>
    </motion.section>
  );
}
