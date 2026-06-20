export default function Financeiro() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">💰 Financeiro - Hoje</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-green-50 p-6 rounded-2xl text-center">
            <p className="text-sm text-gray-500">Faturamento</p>
            <p className="text-2xl font-bold text-green-600">R$ 1.250,75</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-2xl text-center">
            <p className="text-sm text-gray-500">Comissão</p>
            <p className="text-2xl font-bold text-blue-600">R$ 125,00</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-2xl text-center">
            <p className="text-sm text-gray-500">Entregas</p>
            <p className="text-2xl font-bold text-purple-600">42</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-2xl text-center">
            <p className="text-sm text-gray-500">Tempo Econômico</p>
            <p className="text-2xl font-bold text-orange-600">8h</p>
          </div>
        </div>

        <button className="mt-6 w-full bg-primary text-white p-4 rounded-xl font-bold">
          Ver detalhes completos
        </button>
      </div>
    </div>
  );
}