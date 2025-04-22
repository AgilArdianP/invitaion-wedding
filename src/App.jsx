// File: App.jsx
import { useState, useEffect } from 'react';
import { Calendar, Heart, Music, MapPin, Gift, Users, X } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountdownTimer from './components/CountdownTimer';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import Comments from './components/Comments';
import GiftRegistry from './components/GiftRegistry';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(true);
  
  useEffect(() => {
    // Initialize AOS
    import('aos').then((AOS) => {
      AOS.init({
        duration: 1000,
        once: false,
        mirror: true,
      });
    });
  }, []);

  const toggleMusic = () => {
    const audio = document.getElementById('background-music');
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const openInvitation = () => {
    setShowModal(false);
    const audio = document.getElementById('background-music');
    audio.play();
    setIsPlaying(true);
  };

  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Background Music */}
      <audio id="background-music" loop>
        <source src="./denny-caknan.mp3" type="audio/mp3" />
      </audio>
      
      {/* Music Control Button */}
      <button 
        onClick={toggleMusic} 
        className="fixed z-50 bottom-6 right-6 bg-amber-600 p-3 rounded-full shadow-lg hover:bg-amber-700 transition-all duration-300"
      >
        <Music size={20} className={isPlaying ? "animate-pulse" : ""} />
      </button>

      {/* Welcome Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div 
            className="bg-gray-800 p-8 rounded-lg max-w-md mx-4 text-center shadow-2xl border border-amber-600"
            data-aos="zoom-in"
          >
            <Heart className="mx-auto text-amber-600 mb-4" size={50} />
            <h2 className="text-2xl font-serif mb-2">Undangan Pernikahan</h2>
            <h1 className="text-3xl font-bold font-serif mb-4 text-yellow-600">FAJAR & ERIK</h1>
            <p className="mb-6">Kepada Bapak/Ibu/Saudara/i</p>
            <h3 className="text-xl mb-8 font-serif">Anda diundang ke pernikahan kami</h3>
            <button 
              onClick={openInvitation}
              className="bg-yellow-600 px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition-all duration-300"
            >
              Buka Undangan
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url("./images/6.jpg")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative text-center px-4 z-10" data-aos="fade-up">
          <p className="text-lg mb-4">We're Getting Married</p>
          <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-5/12" data-aos="fade-up">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src="./images/6.jpg" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>
          <h1 className="text-5xl md:text-7xl font-serif mb-6 text-yellow-600">Fajar & Erik</h1>
          <p className="text-xl mb-8">12 Juni 2025</p>
          <CountdownTimer date="2025-06-11T10:00:00" />
        </div>
      </section>

      {/* Couple Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-fixed opacity-20" style={{ backgroundImage: 'url("./images/copy.jpg")' }}></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <Heart className="mx-auto text-amber-500 mb-4" size={30} />
            <h2 className="text-3xl font-serif mb-4">Mempelai Pengantin</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center" data-aos="fade-right">
              <h3 className="text-4xl font-serif mb-2 text-amber-600">Fajar Eko Prastiyo</h3>
              <p className="mb-4">Putra dari Bapak Sujak & Ibu Sujiyem</p>
              <p className="mb-4">Ds.Gempol, RT.01 RW.06, Kec.Karangjati, Kab.Ngawi</p>
              <div className="flex justify-center space-x-4">
              </div>
            </div>
            
            <div className="text-center" data-aos="fade-left">
            <Heart className="mx-auto text-yellow-500 mb-4" size={70} />
              <h3 className="text-4xl font-serif mb-2 text-amber-600">Erik Widiani</h3>
              <p className="mb-4">Putri dari Bapak Warlan & Ibu Yani</p>
              <p className="mb-4">Dsn.Jati, Ds.Gandri, Kec.Pangkur, Kab.Ngawi</p>
              <div className="flex justify-center space-x-4">
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-20 px-4 relative bg-gray-900">
        <div className="absolute inset-0 bg-cover bg-fixed opacity-20" style={{ backgroundImage: 'url("./images/4.jpg")' }}></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <Calendar className="mx-auto text-amber-500 mb-4" size={30} />
            <h2 className="text-3xl font-serif mb-4">Rangkaian Acara</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-xl" data-aos="fade-up">
              <h3 className="text-2xl font-serif mb-4 text-yellow-300">Unduh Mantu</h3>
              <div className="flex items-start mb-4">
                <Calendar className="text-yellow-400 mr-4 mt-1" size={20} />
                <div>
                  <p className="font-semibold">Kamis malam Jumat, 12 malam 13 Juni 2025</p>
                  <p>10.00 - Selesai</p>
                </div>
              </div>
              <div className="flex items-start mb-4">
                <MapPin className="text-yellow-400 mr-4 mt-1" size={20} />
                <div>
                  <p className="font-semibold">Kediaman Mempelai Putra</p>
                  <p>Ds.Gempol, RT.01 RW.06, Kec.Karangjati, Kab.Ngawi</p>
                </div>
              </div>
              <p className="font-semibold text-center">Hiburan: Orkes "EMERALD"</p>
              <a 
                href="https://maps.app.goo.gl/u7XDeWFcMk4Xr5bg9"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-amber-600 px-4 py-2 rounded-full text-sm hover:bg-amber-700 transition-all mt-4"
              >
                Lihat Lokasi
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: 'url("./images/8.jpg")' }}></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <Heart className="mx-auto text-amber-500 mb-4" size={30} />
            <h2 className="text-3xl font-serif mb-4">Gallery</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          
          <Gallery />
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-cover bg-fixed opacity-20" style={{ backgroundImage: 'url("./images/9.jpg")' }}></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <Users className="mx-auto text-amber-500 mb-4" size={30} />
            <h2 className="text-3xl font-serif mb-4">RSVP</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
            <p className="mt-4 text-gray-300">Mohon konfirmasi kehadiran Anda sebelum 1 Juni 2025</p>
          </div>
          
          <RSVP />
        </div>
      </section>

      {/* Gift Registry Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: 'url("./images/5.jpg")' }}></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <Gift className="mx-auto text-amber-500 mb-4" size={30} />
            <h2 className="text-3xl font-serif mb-4">Gift Registry</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
            <p className="mt-4 text-gray-300">Kehadiran Anda adalah hadiah terbaik bagi kami. Namun, jika Anda ingin memberikan hadiah, berikut adalah opsi yang tersedia:</p>
          </div>
          
          <GiftRegistry />
        </div>
      </section>

      {/* Comments & Wishes Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-cover bg-fixed opacity-20" style={{ backgroundImage: 'url("./images/2.jpg")' }}></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <Heart className="mx-auto text-amber-500 mb-4" size={30} />
            <h2 className="text-3xl font-serif mb-4">Ucapan & Doa</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
            <p className="mt-4 text-gray-300">Berikan ucapan dan doa terbaik Anda untuk kami</p>
          </div>
          
          <Comments />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 bg-gray-950 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif mb-6 text-amber-300">Fajar & Erik</h2>
          <p className="mb-4">Terima kasih telah menjadi bagian dari hari spesial kami</p>
          <p className="text-sm text-gray-400 mt-8">© 2025 Fajar & Erik Wedding</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
