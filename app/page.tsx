"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  // Estado para controlar se o menu mobile está aberto ou fechado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para fechar o menu ao clicar em um link no celular
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-slate-50 text-slate-800 font-sans scroll-smooth relative">
      
      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
          
          {/* Logo e Nome no Navbar */}
          <a href="#inicio" className="flex items-center gap-3 group" onClick={handleLinkClick}>
            <div className="w-10 h-10 relative rounded-full overflow-hidden border-2 border-slate-800 bg-white transition-transform group-hover:scale-105">
              <Image 
                src="/logo-da-igreja.jpg" 
                alt="Logo Palavra de Vida" 
                fill
                className="object-contain p-0.5"
              />
            </div>
            <span className="font-bold text-slate-800 text-xl tracking-tight">Palavra de Vida</span>
          </a>
          
          {/* Menu Desktop */}
          <div className="hidden md:flex gap-6 font-semibold text-sm text-slate-600">
            <a href="#inicio" className="hover:text-amber-700 transition-colors">Início</a>
            <a href="#sobre" className="hover:text-amber-700 transition-colors">Quem Somos</a>
            <a href="#devocional" className="hover:text-amber-700 transition-colors">Devocional</a>
            <a href="#programacao" className="hover:text-amber-700 transition-colors">Programação</a>
            <a href="#doacoes" className="hover:text-amber-700 transition-colors">Doações</a>
            <a href="#biblias" className="hover:text-amber-700 transition-colors">Bíblias</a>
          </div>
          
          {/* Botão Hambúrguer (Mobile) */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-slate-800 focus:outline-none p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  // Ícone de "X" quando o menu está aberto
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  // Ícone de "Hambúrguer" quando o menu está fechado
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Dropdown Mobile */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl flex flex-col py-2">
            <a href="#inicio" onClick={handleLinkClick} className="px-6 py-4 text-slate-700 font-semibold border-b border-slate-50 hover:bg-slate-50">Início</a>
            <a href="#sobre" onClick={handleLinkClick} className="px-6 py-4 text-slate-700 font-semibold border-b border-slate-50 hover:bg-slate-50">Quem Somos</a>
            <a href="#devocional" onClick={handleLinkClick} className="px-6 py-4 text-slate-700 font-semibold border-b border-slate-50 hover:bg-slate-50">Devocional</a>
            <a href="#programacao" onClick={handleLinkClick} className="px-6 py-4 text-slate-700 font-semibold border-b border-slate-50 hover:bg-slate-50">Programação</a>
            <a href="#doacoes" onClick={handleLinkClick} className="px-6 py-4 text-slate-700 font-semibold border-b border-slate-50 hover:bg-slate-50">Doações</a>
            <a href="#biblias" onClick={handleLinkClick} className="px-6 py-4 text-slate-700 font-semibold hover:bg-slate-50">Bíblias</a>
          </div>
        )}
      </nav>

      {/* ================= HERO SECTION ================= */}
      <main id="inicio" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-sky-200 to-white text-center px-6 pt-16">
        <div className="mb-10 w-48 h-48 sm:w-56 sm:h-56 relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-slate-800 bg-white">
          <Image 
            src="/logo-da-igreja.jpg" 
            alt="Logo da Comunidade Cristã Apostólica Palavra de Vida" 
            fill
            className="object-contain p-2"
            priority
          />
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-800 mb-6 tracking-tight max-w-4xl">
          Palavra de Vida
        </h1>

        <p className="text-xl sm:text-3xl md:text-4xl text-amber-800 italic max-w-3xl font-serif leading-relaxed">
          "Eu sei em quem tenho crido."
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <a href="#programacao" className="bg-slate-800 hover:bg-slate-700 text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 shadow-lg text-center">
            Nossa Programação
          </a>
          <a href="#doacoes" className="bg-white border-2 border-slate-800 hover:bg-slate-100 text-slate-800 font-semibold py-4 px-10 rounded-full transition-all duration-300 shadow-lg text-center">
            Doações e Dízimos
          </a>
        </div>
      </main>

      {/* ================= SOBRE NÓS ================= */}
      <section id="sobre" className="py-24 px-6 max-w-4xl mx-auto text-center scroll-mt-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-800">Quem Somos</h2>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
          A Comunidade Cristã Apostólica Palavra de Vida é um lugar de fé, acolhimento e transformação. 
          Nossa missão é espalhar a palavra e o amor de Cristo, servindo à nossa comunidade no Rio Grande do Norte e fortalecendo as famílias através do evangelho.
        </p>
      </section>

      {/* ================= VÍDEO DEVOCIONAL ================= */}
      <section id="devocional" className="py-20 px-6 bg-slate-800 text-white scroll-mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Devocional da Semana</h2>
          <p className="text-sky-200 mb-10 text-lg">Tire alguns minutos para refletir na palavra de Deus.</p>
          
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-700 bg-slate-900">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=abcdefgh" 
              title="Devocional da Semana" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </section>

      {/* ================= PROGRAMAÇÃO ================= */}
      <section id="programacao" className="py-24 px-6 bg-slate-100 scroll-mt-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-800">Nossa Programação</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-2xl text-sky-700 mb-2">Culto de Celebração</h3>
              <p className="text-slate-600 mb-4">Um tempo especial de adoração e palavra para toda a família.</p>
              <p className="font-semibold text-amber-800 flex items-center gap-2">
                <span className="text-xl">📅</span> Domingos, às 18h30
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-2xl text-sky-700 mb-2">Círculo de Oração</h3>
              <p className="text-slate-600 mb-4">Encontro focado em intercessão, renovação espiritual e comunhão.</p>
              <p className="font-semibold text-amber-800 flex items-center gap-2">
                <span className="text-xl">📅</span> Quartas-feiras, às 19h30
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DOAÇÕES E DÍZIMOS ================= */}
      <section id="doacoes" className="py-24 px-6 bg-white scroll-mt-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Doações e Dízimos</h2>
          <p className="text-lg text-slate-600 mb-10 italic">
            "Cada um contribua segundo propôs no seu coração; não com tristeza, ou por necessidade; porque Deus ama ao que dá com alegria." - 2 Coríntios 9:7
          </p>
          
          <div className="bg-slate-50 p-10 rounded-3xl border-2 border-dashed border-slate-300">
            <div className="w-16 h-16 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Em Breve</h3>
            <p className="text-slate-600">
              Estamos finalizando a configuração de nossas contas institucionais. Logo disponibilizaremos aqui nossa chave PIX e dados bancários para que você possa semear em nosso ministério de forma segura.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FORMULÁRIO DE BÍBLIAS ================= */}
      <section id="biblias" className="py-24 px-6 bg-slate-100 scroll-mt-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Precisa de uma Bíblia?</h2>
            <p className="text-lg text-slate-600">
              Acreditamos que a Palavra de Deus deve ser acessível a todos. Preencha o formulário abaixo e nossa equipe entrará em contato para enviar um exemplar gratuito para você.
            </p>
          </div>

          <form className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
            <div className="mb-6">
              <label htmlFor="nome" className="block text-slate-700 font-semibold mb-2">Nome Completo</label>
              <input type="text" id="nome" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Digite seu nome" required />
            </div>

            <div className="mb-6">
              <label htmlFor="telefone" className="block text-slate-700 font-semibold mb-2">WhatsApp / Telefone</label>
              <input type="tel" id="telefone" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="(84) 90000-0000" required />
            </div>

            <div className="mb-8">
              <label htmlFor="mensagem" className="block text-slate-700 font-semibold mb-2">Mensagem (Opcional)</label>
              <textarea id="mensagem" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Gostaria de compartilhar algo conosco?"></textarea>
            </div>

            <button type="submit" className="w-full bg-amber-700 hover:bg-amber-800 text-white font-bold py-4 px-8 rounded-xl transition-colors text-lg shadow-md">
              Solicitar Minha Bíblia
            </button>
          </form>
        </div>
      </section>

      {/* ================= RODAPÉ ================= */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center px-6">
        <p>© 2026 Comunidade Cristã Apostólica Palavra de Vida.</p>
        <p className="mt-2 text-sm">"Eu sei em quem tenho crido."</p>
      </footer>

    </div>
  );
}