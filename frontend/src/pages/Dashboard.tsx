import { useNavigate } from 'react-router-dom';
import { Package, DollarSign, Footprints, BarChart3, Menu } from 'lucide-react';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Menu Lateral Simulado (Sempre visível no layout) */}
      <div className="fixed top-0 left-0 h-full w-20 bg-primary flex flex-col items-center py-6 shadow-lg z-50">
        <div className="text-white font-black text-xl mb-10">RF</div>
        <div className="text-white opacity-70 hover:opacity-100 cursor-pointer mb-6">
          <Package size={28} />
        </div>
        <div className="text-white opacity-50 hover:opacity-100 cursor-pointer mb-6">
          <BarChart3 size={28} />
        </div>
        <div className="mt-auto text-white opacity-50">⏻</div>
      </div>

      {/* Conteúdo */}
      <div className="ml-20 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Olá, Luis! 👋</h1>
          <button className="bg-secondary text-white px-6 py-2 rounded-xl font-bold shadow-lg hover:scale-105 transition" onClick={() => navigate('/nova-rota')}>
            + Nova Rota
          </button>
        </div>

        {/* Cards exatamente como no print */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md border-l-8 border-blue-500">
            <p className="text-gray-500 text-sm">Entregas do Dia</p>
            <p className="text-4xl font-extrabold text-gray-800">42</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border-l-8 border-green-500">
            <p className="text-gray-500 text-sm">Faturamento</p>
            <p className="text-4xl font-extrabold text-green-600">R$ 1.250,75</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border-l-8 border-purple-500">
            <p className="text-gray-500 text-sm">Entregas a Pé</p>
            <p className="text-4xl font-extrabold text-purple-600">8</p>
            <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">Sugestão</span>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border-l-8 border-orange-500 cursor-pointer hover:shadow-xl transition" onClick={() => navigate('/financeiro')}>
            <p className="text-gray-500 text-sm">Financeiro</p>
            <p className="text-4xl font-extrabold text-orange-600">R$ 320,00</p>
            <span className="text-xs text-orange-500 font-bold">Ver detalhes →</span>
          </div>
        </div>

        {/* Resumo do dia (extra) */}
        <div className="mt-8 bg-white p-6 rounded-2xl shadow-md">
          <h2 className="font-bold text-gray-700 mb-2">Resumo do Dia</h2>
          <p className="text-gray-500">Tempo econômico: <span className="font-bold text-primary">8h</span> | KM economizados: <span className="font-bold text-primary">15km</span></p>
        </div>
      </div>
    </div>
  );
}