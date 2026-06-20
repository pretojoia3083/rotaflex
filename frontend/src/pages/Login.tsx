import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Fingerprint, Phone } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');

  const handleLogin = () => {
    // Simula login
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary">ROTAFLEX</h1>
          <p className="text-gray-500 text-sm">Sua rota. Seu jeito.</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Número de celular
            </label>
            <div className="flex items-center border border-gray-300 rounded-xl p-3 focus-within:ring-2 focus-within:ring-primary">
              <Phone className="text-gray-400 mr-2" size={20} />
              <input
                type="tel"
                placeholder="(11) 99999-9999"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1 outline-none bg-transparent"
              />
            </div>
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-secondary text-white font-bold py-3 rounded-xl hover:bg-orange-600 transition flex items-center justify-center gap-2"
          >
            Entrar com Biometria <Fingerprint size={20} />
          </button>

          <p className="text-xs text-center text-gray-400 mt-4">
            Ao entrar, você confirma que leu nossos termos.
          </p>
        </div>
      </div>
    </div>
  );
}