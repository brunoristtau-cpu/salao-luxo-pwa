import React from 'react';

export default function SalaoApp() {
  return (
    <div className="min-h-screen bg-lux-black text-white p-6 font-sans">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-lux-gold italic">Salão Luxo</h1>
        <div className="w-10 h-10 rounded-full bg-lux-brown border border-lux-gold"></div>
      </header>

      <section className="mb-8">
        <h2 className="text-xl mb-4">Nossa Equipe</h2>
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {['Bruno', 'Ana Paula', 'Elisangela', 'Susiane', 'Julia'].map((name) => (
            <div key={name} className="flex-shrink-0 text-center">
              <div className="w-16 h-16 rounded-full bg-lux-brown border-2 border-lux-gold mb-2"></div>
              <p className="text-xs">{name}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 gap-4">
        <button className="bg-lux-gold text-black font-bold py-4 rounded-lg shadow-lg">
          AGENDAR AGORA
        </button>
        <button className="bg-lux-brown border border-lux-gold text-lux-gold py-4 rounded-lg">
          VER ESTOQUE 📷
        </button>
      </div>

      <footer className="fixed bottom-0 left-0 w-full bg-lux-brown p-4 flex justify-around border-t border-lux-gold">
        <span>🏠 Início</span>
        <span>📅 Agenda</span>
        <span>📊 Admin</span>
      </footer>
    </div>
  );
}
