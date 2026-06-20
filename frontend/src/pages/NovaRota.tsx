import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QrCode, Barcode, PenTool, Save, RefreshCw } from 'lucide-react';

export default function NovaRota() {
  const navigate = useNavigate();
  const [entregas, setEntregas] = useState<any[]>([]);

  const adicionarEntrega = (tipo: string) => {
    // Simula adição
    const nova = {
      id: Date.now(),
      cidade: 'Limeira/SP',
      valor: 74.57,
      endereco: 'Rua das Orquídeas, 123'
    };
    setEntregas([...entregas, nova]);
  };

  const salvarERecalcular = () => {
    alert('Rota salva e recalculada com sucesso! (Simulação)');
    navigate('/motorista');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">🚚 Nova Rota</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Coluna Esquerda: Adicionar Entregas */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="font-bold text-lg mb-4">Adicionar Entregas</h2>
            
            <div className="space-y-4">
              <button onClick={() => adicionarEntrega('qr')} className="w-full bg-blue-50 text-blue-700 p-4 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-100 border-2 border-dashed border-blue-300">
                <QrCode /> Ler CTE (QR Code)
              </button>
              <button onClick={() => adicionarEntrega('barras')} className="w-full bg-purple-50 text-purple-700 p-4 rounded-xl flex items-center justify-center gap-2 hover:bg-purple-100 border-2 border-dashed border-purple-300">
                <Barcode /> Código de Barras
              </button>
              <button onClick={() => adicionarEntrega('manual')} className="w-full bg-gray-50 text-gray-700 p-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 border-2 border-dashed border-gray-300">
                <PenTool /> Digitização Manual
              </button>
            </div>

            {/* Lista de entregas adicionadas */}
            {entregas.length > 0 && (
              <div className="mt-6 max-h-60 overflow-y-auto">
                <p className="font-semibold text-sm text-gray-500 mb-2">{entregas.length} entregas adicionadas</p>
                {entregas.map((e) => (
                  <div key={e.id} className="bg-gray-50 p-3 rounded-lg mb-2 flex justify-between">
                    <span>{e.cidade}</span>
                    <span className="text-green-600 font-bold">R$ {e.valor}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Coluna Direita: Configurações */}
          <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col justify-between">
            <div>
              <h2 className="font-bold text-lg mb-4">Configurações da Rota</h2>
              <div className="bg-blue-50 p-4 rounded-xl mb-4">
                <p className="text-sm text-gray-500">Tempo Econômico</p>
                <p className="text-2xl font-bold text-blue-700">8 <span className="text-sm font-normal">horas</span></p>
              </div>
              <div className="bg-purple-50 p-4 rounded-xl">
                <p className="text-sm text-gray-500">Entregas a Pé</p>
                <p className="text-2xl font-bold text-purple-700">19 <span className="text-sm font-normal">minutos estimados</span></p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <button onClick={salvarERecalcular} className="w-full bg-green-600 text-white p-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-700">
                <Save /> Salvar Rota
              </button>
              <button className="w-full bg-secondary text-white p-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-orange-600">
                <RefreshCw /> Recalcular Rota
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}