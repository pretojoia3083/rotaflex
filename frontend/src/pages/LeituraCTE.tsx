import { useState } from 'react';
import { QrCode, Barcode, CheckCircle } from 'lucide-react';

export default function LeituraCTE() {
  const [lido, setLido] = useState(false);
  const [dados, setDados] = useState({
    cidade: 'Limeira/SP',
    valor: 'R$ 74,57',
    comissao: 'R$ 7,45',
    fonte: 'Gerar André'
  });

  const simularLeitura = () => {
    setLido(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-primary mb-6">📄 Leitura de CTE</h1>

        {!lido ? (
          <div className="space-y-4">
            <button onClick={simularLeitura} className="w-full bg-blue-600 text-white p-6 rounded-2xl text-center hover:bg-blue-700 transition">
              <QrCode className="mx-auto mb-2" size={40} />
              <span className="font-bold">Ler QR Code do CTE</span>
            </button>
            <button onClick={simularLeitura} className="w-full bg-purple-600 text-white p-6 rounded-2xl text-center hover:bg-purple-700 transition">
              <Barcode className="mx-auto mb-2" size={40} />
              <span className="font-bold">Ler Código de Barras</span>
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-xl">
              <CheckCircle /> Leitura realizada com sucesso!
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border">
              <p><span className="font-bold">Cidade:</span> {dados.cidade}</p>
              <p><span className="font-bold">Valor do Frete:</span> {dados.valor}</p>
              <p><span className="font-bold">Comissão:</span> {dados.comissao}</p>
              <p><span className="font-bold">Gerar André:</span> {dados.fonte}</p>
            </div>
            <button className="w-full bg-primary text-white p-3 rounded-xl font-bold">
              Adicionar à Rota
            </button>
          </div>
        )}
      </div>
    </div>
  );
}