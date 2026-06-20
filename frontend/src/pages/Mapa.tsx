import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { QrCode } from 'lucide-react';

export default function Mapa() {
  const position: [number, number] = [-22.5645, -47.4000]; // Limeira

  return (
    <div className="min-h-screen bg-gray-100 p-4 relative">
      <h1 className="text-2xl font-bold text-primary mb-4">🗺️ Rota em andamento</h1>
      
      <div className="rounded-2xl overflow-hidden shadow-xl h-[70vh] relative">
        <MapContainer center={position} zoom={14} style={{ height: '100%', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position}>
            <Popup>Entrega atual</Popup>
          </Marker>
          <Polyline positions={[[-22.5645, -47.4000], [-22.5700, -47.4100]]} color="blue" />
        </MapContainer>

        {/* Sobreposição do leitor de QR Code (exatamente como no print) */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-2xl border-2 border-dashed border-secondary flex items-center gap-3">
          <QrCode className="text-secondary" size={28} />
          <p className="font-bold text-gray-700">Posicione o QR Code do CTE dentro do quadro</p>
        </div>
      </div>
    </div>
  );
}