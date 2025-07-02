export function Dashboard() {
  return (
    <section className="container max-w-container mx-auto py-10">
      <h2 className="text-3xl font-semibold text-primary mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white shadow p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Progresso</h3>
          <p className="text-gray-600">Você completou 75% do curso.</p>
        </div>
        <div className="bg-white shadow p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Próximos passos</h3>
          <p className="text-gray-600">Estude o módulo sobre performance.</p>
        </div>
      </div>
    </section>
  );
}
