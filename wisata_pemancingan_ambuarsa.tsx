import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  MapPin, 
  MessageCircle, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ArrowDown, 
  Facebook,
  Share,
  Copy,
  Check,
  Twitter,
  Clock,
  Star,
  Quote,
  Fish,
  Info,
  History,
  BookOpen,
  Tag,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Map,
  Users
} from 'lucide-react';

const pageData = {
  name: "AmbuArsa",
  phone: "6289529605601",
  address: "Jl. Pemancingan Alam No. 12, Area Rekreasi.",
  title: "Sensasi Tarikan Maksimal di Alam Asri",
  description: "AmbuArsa adalah destinasi wisata pemancingan keluarga dan galatama terbaik. Nikmati suasana alam yang sejuk, fasilitas lengkap, dan kolam yang penuh dengan ikan-ikan pilihan.",
  profileImg: "./images/logo-ambuarsa.png", 
  heroImg: "./images/hero-ambuarsa.jpg",
  links: {
    instagram: "https://www.instagram.com/solusilokal.id",
    maps: "https://www.google.com/maps/place/Palangka+Raya", 
    facebook: "https://facebook.com/", 
    tiktok: "https://www.tiktok.com/@solusilokal.id" 
  },
  about: "Berlokasi di pinggiran kota yang tenang, AmbuArsa tidak hanya menawarkan pengalaman memancing, tetapi juga tempat pelarian dari penatnya hiruk-pikuk kota. Kami memiliki area luas yang cocok untuk rekreasi keluarga, kumpul komunitas, hingga turnamen memancing tingkat daerah.",
  history: "Didirikan pada tahun 2018 berawal dari hobi sang pendiri, AmbuArsa bermula dari satu kolam pemancingan kecil. Berkat dukungan komunitas angler lokal, kami terus berkembang hingga kini memiliki 3 tipe kolam utama dan berbagai fasilitas pendukung seperti restoran lesehan dan taman bermain.",
  highlights: [
    { text: "Buka Setiap Hari", icon: "Clock" },
    { text: "Parkir Luas", icon: "Map" },
    { text: "Ramah Keluarga", icon: "Users" }
  ],
  katalog: [
    { name: "Kolam Galatama", desc: "Sensasi tarikan ikan monster (Bawal & Lele) untuk para profesional.", image: "./images/katalog-galatama.webp" },
    { name: "Kolam Kiloan", desc: "Cocok untuk keluarga. Pancing, timbang, dan bawa pulang Ikan Nila & Mas segar.", image: "./images/katalog-kiloan.webp" },
    { name: "Sewa Peralatan", desc: "Tersedia joran, reel, dan umpan racikan rahasia AmbuArsa.", image: "./images/katalog-peralatan.webp" }
  ],
  pricing: [
    { item: "Tiket Galatama", price: "Rp 150.000", unit: "/ Sesi" },
    { item: "Kolam Kiloan – Ikan Nila", price: "Rp 35.000", unit: "/ Kg" },
    { item: "Kolam Kiloan – Ikan Mas", price: "Rp 45.000", unit: "/ Kg" },
    { item: "Sewa Joran Set", price: "Rp 30.000", unit: "/ Hari" },
    { item: "Umpan Racikan Khusus", price: "Rp 15.000", unit: "/ Bks" },
    { item: "Sewa Saung VIP (10 Org)", price: "Rp 100.000", unit: "/ 4 Jam" }
  ],
  faq: [
    { q: "Apakah alat pancing harus bawa sendiri?", a: "Anda bisa membawa alat sendiri, namun kami juga menyediakan penyewaan alat pancing lengkap dengan harga terjangkau." },
    { q: "Apakah ikan hasil tangkapan boleh dibakar di tempat?", a: "Tentu! Kami memiliki fasilitas dapur dan restoran. Anda bisa meminta staf kami untuk memasak hasil tangkapan Anda (dikenakan biaya jasa masak)." },
    { q: "Bagaimana jadwal operasional kolam Galatama?", a: "Kolam Galatama buka setiap hari mulai pukul 15.00 - 23.00 WIB, dibagi menjadi beberapa sesi. Jadwal lengkap bisa ditanyakan via admin." },
    { q: "Apakah ada area bermain untuk anak-anak?", a: "Ya, kami menyediakan mini playground dan area hijau yang aman untuk anak-anak bermain sementara keluarga memancing." }
  ],
  testimonials: [
    { name: "Agus Pemancing", rating: 5, text: "Tarikan ikan bawalnya mantap luar biasa! Kolamnya terawat dan airnya bersih. Cocok buat buang stres akhir pekan." },
    { name: "Keluarga Bapak Budi", rating: 5, text: "Tempatnya nyaman banget buat bawa anak istri. Saungnya bersih, pelayanannya ramah, masakannya juga enak." },
    { name: "Rendra Angler", rating: 4, text: "Spot galatama langganan. Umpan racikan di sini lumayan jitu. Cuma kalau weekend harus booking dulu biar kebagian lapak." }
  ],
  galleryPhotos: [
    "./images/gallery-1.webp",
    "./images/gallery-2.webp",
    "./images/gallery-3.webp",
    "./images/gallery-4.webp",
  ]
};

export default function App() {
  const [lightbox, setLightbox] = useState({ isOpen: false, images: [], currentIndex: 0 });
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openLightbox = (images, index) => {
    setLightbox({ isOpen: true, images, currentIndex: index });
    document.body.style.overflow = 'hidden'; 
  };

  const closeLightbox = () => {
    setLightbox({ ...lightbox, isOpen: false });
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length
    }));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
    }));
  };

  const scrollToForm = () => {
    document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' });
  };

  const toggleFaq = (index) => {
    if (openFaqIndex === index) {
      setOpenFaqIndex(null);
    } else {
      setOpenFaqIndex(index);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const visitDate = formData.get('visitDate');
    const serviceType = formData.get('serviceType');
    const pax = formData.get('pax');
    const notes = formData.get('notes');
    
    const waText = `Halo Admin *${pageData.name}*, saya ingin melakukan reservasi.%0A%0A` +
                   `*Nama:* ${name}%0A` +
                   `*Tanggal Kunjungan:* ${visitDate}%0A` +
                   `*Layanan:* ${serviceType}%0A` +
                   `*Jumlah Orang:* ${pax} Orang%0A` +
                   `*Catatan:* ${notes ? notes : '-'}`;
                   
    const waUrl = `https://wa.me/${pageData.phone}?text=${waText}`;
    window.open(waUrl, '_blank');
  };

  const handleShare = async () => {
    const shareData = {
      title: pageData.name,
      text: pageData.title,
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      setShowShareModal(true);
    }
  };

  const copyToClipboard = () => {
    const tempInput = document.createElement('input');
    tempInput.value = window.location.href;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareToWhatsApp = () => window.open(`https://wa.me/?text=${encodeURIComponent(pageData.title + ' ' + window.location.href)}`, '_blank');
  const shareToFacebook = () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
  const shareToTwitter = () => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(pageData.name)}`, '_blank');

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        
        body {
          background-color: #F8FAFC; 
          color: #0F172A; /* Slate 900 */
          margin: 0;
          font-family: 'Plus Jakarta Sans', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      <main className="w-full max-w-[480px] mx-auto relative shadow-2xl bg-[#F8FAFC] min-h-screen overflow-hidden pb-32 border-x border-[#E2E8F0]">
        
        {}
        <section className="relative w-full min-h-[90dvh] flex flex-col justify-end pb-12 px-6 bg-[#0E2841]">
          
          <button
            onClick={handleShare}
            aria-label="Share this page"
            className="absolute top-6 right-6 z-20 p-3 bg-[#0E2841]/40 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-[#0E2841]/60 transition-all shadow-sm"
          >
            <Share size={20} />
          </button>

          <div className="absolute inset-0 z-0">
            <img 
              src={pageData.heroImg} 
              alt={pageData.name} 
              className="w-full h-full object-cover object-center opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E2841] via-[#0E2841]/80 to-transparent"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center mt-40">
            <div className="w-28 h-28 rounded-full p-1 bg-white/10 backdrop-blur-md mb-4 shadow-2xl border border-[#D9A05B]/40">
              <img 
                src={pageData.profileImg} 
                alt="Profile" 
                className="w-full h-full rounded-full object-cover bg-white"
              />
            </div>

            <h1 className="text-4xl font-extrabold text-[#D9A05B] mb-2 leading-tight tracking-tight drop-shadow-md">
              {pageData.name}
            </h1>
            <p className="text-slate-200 font-medium text-sm leading-relaxed mb-6 max-w-[95%]">
              {pageData.description}
            </p>

            <div className="grid grid-cols-2 gap-3 w-full max-w-sm mb-8">
              <a 
                href={pageData.links.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white shadow-sm text-sm font-medium"
              >
                <Instagram size={18} /> Instagram
              </a>
              <a 
                href={pageData.links.tiktok}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white shadow-sm text-sm font-medium"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg> TikTok
              </a>
              <a 
                href={pageData.links.maps}
                target="_blank"
                rel="noreferrer"
                className="col-span-2 flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white shadow-sm text-sm font-medium"
              >
                <MapPin size={18} /> Lokasi
              </a>
            </div>
            
            {}
            <div className="flex flex-wrap justify-center gap-2 w-full max-w-sm mb-6">
              {pageData.highlights.map((hl, idx) => (
                <span key={idx} className="flex items-center gap-1.5 px-3 py-1.5 bg-[#4F6C4E]/60 backdrop-blur-sm rounded-full border border-[#4F6C4E] text-[11px] text-white font-medium">
                  {hl.icon === 'Clock' && <Clock size={12} className="text-[#D9A05B]" />}
                  {hl.icon === 'Map' && <Map size={12} className="text-[#D9A05B]" />}
                  {hl.icon === 'Users' && <Users size={12} className="text-[#D9A05B]" />}
                  {hl.text}
                </span>
              ))}
            </div>

            <button 
              onClick={scrollToForm}
              className="group relative flex items-center justify-center gap-3 w-full max-w-sm py-4 bg-[#D9A05B] text-[#0E2841] rounded-2xl font-bold text-[14px] uppercase tracking-wider hover:bg-[#c48d4d] transition-all shadow-lg"
            >
              Booking Lapak Sekarang
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </section>

        {}
        <section className="py-10 px-6 bg-white">
          <div className="flex flex-col gap-8">
            {/* Tentang Kami */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 bg-[#4F6C4E]/10 rounded-lg">
                  <Info className="text-[#4F6C4E]" size={20} />
                </div>
                <h2 className="text-2xl font-extrabold text-[#0E2841] tracking-tight">Tentang Kami</h2>
              </div>
              <p className="text-slate-600 text-[14px] leading-relaxed">
                {pageData.about}
              </p>
            </div>
            
            <div className="w-full h-px bg-slate-100"></div>

            {/* History */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 bg-[#D9A05B]/10 rounded-lg">
                  <History className="text-[#D9A05B]" size={20} />
                </div>
                <h2 className="text-2xl font-extrabold text-[#0E2841] tracking-tight">Sejarah Singkat</h2>
              </div>
              <p className="text-slate-600 text-[14px] leading-relaxed">
                {pageData.history}
              </p>
            </div>
          </div>
        </section>

        {}
        <section className="py-10 bg-[#F1F5F9]">
          <div className="mb-6 px-6">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="text-[#4F6C4E]" size={24} />
              <h2 className="text-2xl font-extrabold text-[#0E2841] tracking-tight">Katalog Layanan</h2>
            </div>
            <p className="text-slate-500 text-sm">Pilihan fasilitas dan area memancing untuk Anda.</p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-6 no-scrollbar">
            {pageData.katalog.map((item, idx) => (
              <div key={idx} className="snap-center shrink-0 w-[260px] bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 flex flex-col h-full">
                <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-bold text-[#0E2841] mb-2">{item.name}</h3>
                  <p className="text-sm text-slate-500 leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {}
        <section className="py-10 px-6 bg-white border-t border-slate-100">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Tag className="text-[#D9A05B]" size={24} />
              <h2 className="text-2xl font-extrabold text-[#0E2841] tracking-tight">Daftar Harga</h2>
            </div>
            <p className="text-slate-500 text-sm">Transparan dan terjangkau untuk semua kalangan.</p>
          </div>

          <div className="bg-[#0E2841] rounded-2xl p-6 text-white shadow-lg">
            <ul className="flex flex-col gap-4">
              {pageData.pricing.map((p, idx) => (
                <li key={idx} className="flex justify-between items-center border-b border-white/10 pb-3 last:border-0 last:pb-0 gap-3">
                  <span className="text-sm font-medium text-slate-200 flex-1">{p.item}</span>
                  <div className="flex items-baseline justify-end gap-1.5 shrink-0 text-right">
                    <span className="text-sm font-bold text-[#D9A05B] tabular-nums whitespace-nowrap">{p.price}</span>
                    {p.unit && <span className="text-xs text-slate-300/80 font-normal whitespace-nowrap w-12 text-left">{p.unit}</span>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {}
        <section className="py-10 bg-slate-50">
          <div className="px-6 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Fish className="text-[#4F6C4E]" size={24} />
              <h2 className="text-2xl font-extrabold text-[#0E2841] tracking-tight">Galeri Momen</h2>
            </div>
          </div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-6 no-scrollbar">
            {pageData.galleryPhotos.map((img, idx) => (
              <div 
                key={idx}
                onClick={() => openLightbox(pageData.galleryPhotos, idx)}
                className="snap-center shrink-0 w-[220px] aspect-[4/5] rounded-[1.5rem] overflow-hidden cursor-pointer relative group border border-slate-200 shadow-md bg-white"
              >
                <img 
                  src={img} 
                  alt={"Galeri " + (idx + 1)} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        {}
        <section className="py-10 px-6 bg-white">
           <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle className="text-[#D9A05B]" size={24} />
              <h2 className="text-2xl font-extrabold text-[#0E2841] tracking-tight">Tanya Jawab (FAQ)</h2>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {pageData.faq.map((item, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                >
                  <span className="font-semibold text-[#0E2841] text-[14px]">{item.q}</span>
                  {openFaqIndex === idx ? (
                    <ChevronUp size={18} className="text-[#4F6C4E] shrink-0 ml-2" />
                  ) : (
                    <ChevronDown size={18} className="text-[#4F6C4E] shrink-0 ml-2" />
                  )}
                </button>
                <div 
                  className={`px-4 bg-white text-slate-600 text-sm overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaqIndex === idx ? "max-h-48 py-4 opacity-100" : "max-h-0 py-0 opacity-0"
                  }`}
                >
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </section>

        {}
        <section className="py-10 px-6 bg-[#0E2841] text-white">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Quote className="text-[#D9A05B]" size={24} />
              <h2 className="text-2xl font-extrabold tracking-tight">Kata Angler</h2>
            </div>
            <p className="text-slate-300 text-sm">Testimoni dari mereka yang sudah merasakan sensasinya.</p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar">
            {pageData.testimonials.map((testi, idx) => (
              <div key={idx} className="snap-center shrink-0 w-[280px] bg-white/10 p-5 rounded-2xl border border-white/20 flex flex-col gap-3 backdrop-blur-sm">
                <div className="flex items-center gap-1">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#D9A05B] text-[#D9A05B]" />
                  ))}
                </div>
                <p className="text-slate-100 text-sm leading-relaxed italic">"{testi.text}"</p>
                <div className="mt-auto pt-4 border-t border-white/20 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#D9A05B] flex items-center justify-center text-[#0E2841] font-bold text-sm">
                    {testi.name.charAt(0)}
                  </div>
                  <span className="text-[13px] font-bold text-white">{testi.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {}
        <section id="booking-form" className="py-12 px-6 bg-slate-50">
          <div className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-xl relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#4F6C4E]/10 rounded-full pointer-events-none"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#D9A05B]/10 rounded-full pointer-events-none"></div>
            
            <div className="relative z-10 mb-8">
              <h2 className="text-2xl font-extrabold text-[#0E2841] mb-2">Reservasi Lapak</h2>
              <p className="text-slate-500 text-sm leading-relaxed">Isi form di bawah ini untuk mengamankan lapak atau saung Anda via WhatsApp Admin.</p>
            </div>
            
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 relative z-10">
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-[#0E2841]">Nama Pemesan</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  placeholder="Ketik nama lengkap"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#4F6C4E] focus:ring-1 focus:ring-[#4F6C4E] transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-[#0E2841]">Tanggal Rencana Hadir</label>
                <input 
                  type="date" 
                  name="visitDate" 
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 focus:outline-none focus:border-[#4F6C4E] focus:ring-1 focus:ring-[#4F6C4E] transition-all"
                />
              </div>

              <div className="flex gap-3">
                <div className="flex flex-col gap-1.5 w-[60%]">
                  <label className="text-[12px] font-bold text-[#0E2841]">Pilih Layanan/Kolam</label>
                  <select 
                    name="serviceType" 
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 focus:outline-none focus:border-[#4F6C4E] focus:ring-1 focus:ring-[#4F6C4E] transition-all"
                  >
                    <option value="">Pilih...</option>
                    <option value="Kolam Galatama">Kolam Galatama</option>
                    <option value="Kolam Kiloan Nila">Kolam Kiloan (Nila)</option>
                    <option value="Kolam Kiloan Mas">Kolam Kiloan (Mas)</option>
                    <option value="Sewa Saung VIP">Hanya Sewa Saung VIP</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5 w-[40%]">
                  <label className="text-[12px] font-bold text-[#0E2841]">Jumlah Orang</label>
                  <input 
                    type="number" 
                    name="pax" 
                    min="1"
                    required
                    placeholder="Contoh: 2"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 focus:outline-none focus:border-[#4F6C4E] focus:ring-1 focus:ring-[#4F6C4E] transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-[#0E2841]">Catatan Tambahan (Opsional)</label>
                <textarea 
                  name="notes" 
                  rows="2"
                  placeholder="Cth: Butuh sewa joran 2 set, umpan racikan..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#4F6C4E] focus:ring-1 focus:ring-[#4F6C4E] transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full mt-3 bg-[#4F6C4E] text-white font-bold text-sm tracking-wide py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#3d533c] transition-colors shadow-md"
              >
                Kirim Pesan via WhatsApp
                <MessageCircle size={18} className="text-[#D9A05B]" />
              </button>
            </form>
          </div>
        </section>

        {}
        <footer className="pt-8 pb-12 text-center flex flex-col items-center justify-center mx-6 mt-4">
          <div className="w-full h-px bg-slate-200 mb-8"></div>
          
          <div className="w-16 h-16 bg-white rounded-full shadow-sm border border-slate-200 flex items-center justify-center mb-4 p-1 overflow-hidden">
            <img src={pageData.profileImg} alt="Footer Logo" className="w-full h-full object-cover rounded-full bg-white" />
          </div>
          
          <div className="text-slate-500 text-xs flex flex-col gap-1 items-center">
            <span className="font-extrabold text-[#0E2841] text-sm">{pageData.name}</span>
            <span className="max-w-[250px]">{pageData.address}</span>
          </div>

          <p className="text-slate-400 text-[10px] mt-8">
            © {new Date().getFullYear()} {pageData.name}. All rights reserved.
          </p>
          
          <a 
            href="https://www.solusilokal.id" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 text-[10px] mt-2 tracking-wide font-medium hover:text-emerald-700 transition-colors"
          >
            powered by solusilokal.id
          </a>
        </footer>

        {}
        <div 
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[432px] z-40 transition-all duration-500 ease-out ${
            showStickyCTA ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
          }`}
        >
          <button 
            onClick={scrollToForm}
            className="w-full flex items-center justify-between px-6 py-4 bg-[#0E2841] backdrop-blur-xl border border-[#D9A05B]/50 rounded-2xl text-white shadow-[0_10px_40px_rgba(14,40,65,0.4)] hover:bg-[#0b1f32] active:scale-[0.98] transition-all"
          >
            <span className="font-bold text-sm tracking-wide text-[#D9A05B]">Booking Lapak Sekarang</span>
            <div className="bg-[#D9A05B] text-[#0E2841] p-2 rounded-xl">
              <Fish size={18} className="fill-none stroke-current stroke-2" />
            </div>
          </button>
        </div>

      </main>

      {}
      {lightbox.isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/95 backdrop-blur-xl"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-50 border border-white/20"
            onClick={closeLightbox}
          >
            <X size={20} />
          </button>

          {lightbox.images.length > 1 && (
            <button 
              className="absolute left-4 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-50 border border-white/20"
              onClick={prevImage}
            >
              <ChevronLeft size={24} />
            </button>
          )}

          <div className="w-full max-w-4xl max-h-[100dvh] p-4 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={lightbox.images[lightbox.currentIndex]} 
              alt="Lightbox View" 
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            />
          </div>

          {lightbox.images.length > 1 && (
            <button 
              className="absolute right-4 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-50 border border-white/20"
              onClick={nextImage}
            >
              <ChevronRight size={24} />
            </button>
          )}
          
          {lightbox.images.length > 1 && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-xs font-bold tracking-[0.2em] bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/20">
              {lightbox.currentIndex + 1} / {lightbox.images.length}
            </div>
          )}
        </div>
      )}

      {showShareModal && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/40 backdrop-blur-sm sm:items-center transition-opacity"
          onClick={() => setShowShareModal(false)}
        >
          <div
            className="w-full max-w-[480px] bg-white sm:rounded-3xl rounded-t-3xl p-6 relative overflow-hidden animate-in slide-in-from-bottom-full sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center items-center mb-6 relative">
              <h3 className="text-emerald-950 font-bold text-[15px]">Bagikan {pageData.name}</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="absolute right-0 p-1 text-slate-500 hover:bg-slate-100 rounded-full transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <div className="bg-[#F1F5F9] border border-slate-200 rounded-[24px] p-8 flex flex-col items-center justify-center mb-8 shadow-sm">
              <img src={pageData.profileImg} alt="Profile" className="w-[72px] h-[72px] rounded-full border border-slate-300 mb-4 object-cover bg-white" />
              <h4 className="text-[#0E2841] font-bold text-lg text-center tracking-tight">@{pageData.name.toLowerCase().replace(/\s/g, '')}</h4>
              <p className="text-slate-500 text-sm mt-1 text-center font-medium opacity-90">{pageData.links.instagram.replace('https://www.', '')}</p>
            </div>

            <div className="flex overflow-x-auto gap-3 pb-2 no-scrollbar items-start px-1 mb-4">
              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={copyToClipboard}
                  className="w-[60px] h-[60px] rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-200 transition-all shadow-sm border border-slate-200"
                >
                  {copied ? <Check size={26} className="text-green-600" /> : <Copy size={26} />}
                </button>
                <span className="text-[11px] font-semibold text-slate-600 text-center">
                  {copied ? 'Tersalin' : 'Salin Tautan'}
                </span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={shareToTwitter}
                  className="w-[60px] h-[60px] rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-slate-800 transition-all shadow-sm"
                >
                  <Twitter size={26} />
                </button>
                <span className="text-[11px] font-semibold text-slate-600 text-center">X</span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={shareToFacebook}
                  className="w-[60px] h-[60px] rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:brightness-110 transition-all shadow-sm"
                >
                  <Facebook size={26} className="fill-current" />
                </button>
                <span className="text-[11px] font-semibold text-slate-600 text-center">Facebook</span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={shareToWhatsApp}
                  className="w-[60px] h-[60px] rounded-full bg-[#25D366] flex items-center justify-center text-white hover:brightness-110 transition-all shadow-sm"
                >
                  <MessageCircle size={26} className="fill-current" />
                </button>
                <span className="text-[11px] font-semibold text-slate-600 text-center">WhatsApp</span>
              </div>
            </div>
            
            <div className="w-full h-px bg-slate-200 mb-4"></div>
            
            <div className="flex flex-col items-center text-center">
              <h5 className="text-[#0E2841] font-bold text-[13px] mb-1">Ikuti Kami</h5>
              <p className="text-slate-500 text-[11px] mb-4">Follow media sosial kami untuk update event dan info turnamen.</p>
              <a href={pageData.links.instagram} target="_blank" rel="noreferrer" className="w-full py-3 bg-[#0E2841] text-[#D9A05B] text-sm font-bold rounded-xl hover:bg-[#0b1f32] transition-colors">
                Kunjungi Instagram
              </a>
            </div>
            
          </div>
        </div>
      )}
    </>
  );
}