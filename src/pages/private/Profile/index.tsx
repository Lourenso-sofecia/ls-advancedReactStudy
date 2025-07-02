export function Profile() {
  return (
    <section className="container max-w-container mx-auto py-10">
      <h2 className="text-3xl font-semibold text-primary mb-6">Meu Perfil</h2>
      <div className="bg-white p-6 rounded-xl shadow max-w-md">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Nome</label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-primary focus:border-primary"
            defaultValue="Usuário Exemplo"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-primary focus:border-primary"
            defaultValue="exemplo@ls.com"
          />
        </div>
      </div>
    </section>
  );
}
