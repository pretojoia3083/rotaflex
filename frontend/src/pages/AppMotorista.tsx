import { useState } from 'react';
import { MapPin, Navigation, Car, Footprints, Zap, Map } from 'lucide-react';

export default function AppMotorista() {
  const [rotaIniciada, setRotaIniciada] = useState(false);
  const [entregaAtual] = useState({
    endereco: 'Rua das Orquídeas, 123',
    bairro: 'Jardim Nova Itália, Limeira/SP',
    distancia: '850 m',
    proximaDistancia: '85 metros'
  });

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden p-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-gray-500">Bom dia, Luis! ☀️</p>
            <p className="font-bold text-gray-700">Vamos fazer ótimas entregas hoje!</p>
          </div>
          <div className="bg-primary text-white p-2 rounded-xl text-xs font-bold">RF</div>
        </div>

        {/* Resumo Rápido */}
        <div className="bg-gray-50 p-4 rounded-2xl flex justify-between items-center mb-6">
          <div className="text-center">
            <p className="text-xs text-gray-500">Entregas</p>
            <p className="text-2xl font-bold text-primary">42</p>
          </div>
          <div className="text-center border-l-2 border-gray-200 pl-4">
            <p className="text-xs text-gray-500">KM da Rota</p>
            <p className="text-2xl font-bold text-primary">57 km</p>
          </div>
          <div className="text-center border-l-2 border-gray-200 pl-4">
            <p className="text-xs text-gray-500">Cidade</p>
            <p className="text-sm font-bold text-primary">Limeira/SP</p>
          </div>
        </div>

        {/* Botão Iniciar Rota */}
        {!rotaIniciada ? (
          <button onClick={() => setRotaIniciada(true)} className="w-full bg-green-600 text-white p-5 rounded-2xl font-bold text-xl shadow-lg flex items-center justify-center gap-2 hover:bg-green-700 transition transform hover:scale-105">
            <Navigation size={24} /> INICIAR ROTA
          </button>
        ) : (
          <>
            {/* Próxima Entrega */}
            <div className="mt-6 bg-blue-50 p-5 rounded-2xl border-l-4 border-blue-500">
              <p className="text-xs text-gray-500 flex items-center gap-1"><MapPin size={12} /> PRÓXIMA ENTREGA</p>
              <p className="font-bold text-gray-800 text-lg">{entregaAtual.endereco}</p>
              <p className="text-sm text-gray-600">{entregaAtual.bairro}</p>
              <div className="flex items-center gap-2 mt-2 text-blue-700">
                <Navigation size={16} />
                <span className="font-bold">{entregaAtual.distancia}</span>
              </div>
            </div>

            {/* Integração Google Maps e Waze (CORRIGIDO: sem o ícone Waze que não existe) */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <button className="bg-black text-white p-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800 transition">
                <Map size={18} /> Google Maps
              </button>
              <button className="bg-blue-600 text-white p-3 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition">
                <Navigation size={18} /> Waze
              </button>
            </div>

            {/* Sugestão Inteligente (Diferencial) */}
            <div className="mt-4 bg-purple-100 border-2 border-purple-400 p-4 rounded-2xl">
              <div className="flex items-start gap-3">
                <div className="bg-purple-600 p-2 rounded-full">
                  <Zap className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-bold text-purple-800">💡 Sugestão Inteligente</p>
                  <p className="text-sm text-purple-900">
                    Entregas próxima: <span className="font-bold">{entregaAtual.proximaDistancia}</span>
                  </p>
                  <div className="mt-2 bg-white/50 p-2 rounded-lg flex items-center gap-2 text-purple-700 font-bold">
                    <Footprints size={18} /> Sugestão: Realizar a pé
                  </div>
                  <p className="text-xs text-purple-600 mt-1">✅ Economiza combustível e evita falta de vaga!</p>
                </div>
              </div>
            </div>

            {/* Botão Concluir Entrega (simula avanço) */}
            <button onClick={() => alert('✅ Entrega concluída! Avançando para a próxima...')} className="w-full bg-primary text-white p-4 rounded-xl font-bold mt-4 hover:bg-blue-900 transition">
              Concluir Entrega
            </button>
          </>
        )}
      </div>
    </div>
  );
}