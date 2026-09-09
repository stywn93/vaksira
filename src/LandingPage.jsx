import { Link } from 'react-router-dom';
import vaccinationImg from './images/vaccination.png';
import logoUrl from '../public/favicon.svg';
import bgImg from './assets/bg.jpg';

const LandingPage = () => {
  return (
    <div className="min-h-screen relative p-4 md:p-8 lg:p-12 font-sans text-indigo-950 flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"></div>

      {/* Main Browser-like Container */}
      <div className="relative z-10 w-full max-w-7xl h-full min-h-[85vh] bg-white/95 backdrop-blur-md rounded-[40px] shadow-2xl overflow-hidden flex flex-col">
        
        {/* Decorative Leaf (CSS Blur) */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute top-10 left-10 opacity-20 pointer-events-none select-none">
             <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 100C40 100 60 40 100 40C140 40 160 100 160 100" stroke="#166534" strokeWidth="2" strokeLinecap="round"/>
                <path d="M100 40V160" stroke="#166534" strokeWidth="2" strokeLinecap="round"/>
                <path d="M100 80C100 80 130 70 150 90" stroke="#166534" strokeWidth="2" strokeLinecap="round"/>
                <path d="M100 110C100 110 70 100 50 120" stroke="#166534" strokeWidth="2" strokeLinecap="round"/>
             </svg>
        </div>

        {/* Header/Navbar */}
        <header className="relative z-10 flex items-center justify-between px-8 py-6 md:px-12">
          <div className="flex items-center gap-2">
            <div className="bg-[#0bb6c2] p-1.5 rounded-lg">
                <img src={logoUrl} alt="Vaksira Logo" className="w-6 h-6 invert brightness-0" />
            </div>
            <span className="text-xl font-bold tracking-tight text-[#1e3a8a]">Vaksira</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-indigo-950 transition-colors">Beranda</a>
            <a href="#" className="hover:text-indigo-950 transition-colors">Cara Kerja</a>
            <a href="#" className="hover:text-indigo-950 transition-colors">Jadwal</a>
            <a href="#" className="hover:text-indigo-950 transition-colors">FAQ</a>
            <a href="#" className="hover:text-indigo-950 transition-colors">Support</a>
          </nav>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-2 text-sm font-semibold">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              <span>(081) 123-4567</span>
            </div>
            <Link to="/generate-reminder" className="bg-[#0bb6c2] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#099da8] transition-all shadow-lg shadow-teal-100">
              Mulai Sekarang
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex-1 flex flex-col md:flex-row items-center justify-center px-8 py-12 md:px-20 relative z-10 overflow-hidden">
          
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left space-y-8 max-w-2xl">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Vaksin Tepat,<br />
                <span className="text-[#1e3a8a]">Bayi Sehat</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 font-medium max-w-md leading-relaxed">
                Asisten pengingat jadwal imunisasi cerdas untuk memastikan tumbuh kembang buah hati Anda selalu terlindungi tepat waktu.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link to="/generate-reminder" className="w-full sm:w-auto bg-[#0bb6c2] text-white px-8 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-transform shadow-xl shadow-teal-100 text-center">
                Buat Jadwal Imunisasi
              </Link>
              <button className="w-full sm:w-auto px-8 py-4 text-slate-600 font-bold hover:text-indigo-950 transition-colors">
                Pelajari Lebih Lanjut
              </button>
            </div>

            <div className="pt-8 border-t border-slate-100 grid grid-cols-2 gap-8 max-w-sm">
                <div>
                    <div className="text-2xl font-bold text-[#1e3a8a]">100%</div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Aman & Privat</div>
                </div>
                <div>
                    <div className="text-2xl font-bold text-[#1e3a8a]">IDAI</div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Standar Nasional</div>
                </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="flex-1 mt-12 md:mt-0 relative flex justify-center items-center">
             {/* Realistic Marble Base Effect */}
             <div className="absolute bottom-[-10%] w-[120%] h-32 bg-gradient-to-t from-slate-100 to-transparent blur-2xl rounded-full opacity-60"></div>
             
             {/* Product Showcase Visual */}
             <div className="relative group">
                <div className="absolute inset-0 bg-[#0bb6c2] rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <img 
                    src={vaccinationImg} 
                    alt="Vaksira Visual" 
                    className="relative w-full max-w-lg drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)] hover:-translate-y-4 transition-transform duration-500 ease-out" 
                />
             </div>
          </div>

        </main>

        {/* Footer Subtle */}
        <footer className="px-8 py-6 md:px-12 text-center md:text-left border-t border-slate-50 flex flex-col md:flex-row justify-between items-center text-xs font-bold text-slate-300 uppercase tracking-widest">
            <div>© 2026 VAKSIRA — VAKSIN REMINDER ASSISTANT</div>
            <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-slate-500 transition-colors">Kebijakan Privasi</a>
                <a href="#" className="hover:text-slate-500 transition-colors">Ketentuan Layanan</a>
            </div>
        </footer>

      </div>
    </div>
  );
};

export default LandingPage;
