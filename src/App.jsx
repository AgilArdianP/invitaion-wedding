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
        <source src="/wedding-1.mp3" type="audio/mp3" />
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
            <h1 className="text-3xl font-bold font-serif mb-4 text-yellow-600">AGIL & SOFI</h1>
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
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url("/images/wedding-bg.jpg")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative text-center px-4 z-10" data-aos="fade-up">
          <p className="text-lg mb-4">We're Getting Married</p>
          <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-5/12" data-aos="fade-up">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src="/images/1.jpg" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>
          <h1 className="text-5xl md:text-7xl font-serif mb-6 text-yellow-600">Agil & Sofi</h1>
          <p className="text-xl mb-8">16 Juni 2025</p>
          <CountdownTimer date="2025-06-16T10:00:00" />
        </div>
      </section>

      {/* Couple Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-fixed opacity-20" style={{ backgroundImage: 'url("/images/wedding-bg.jpg")' }}></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <Heart className="mx-auto text-amber-500 mb-4" size={30} />
            <h2 className="text-3xl font-serif mb-4">Mempelai Pengantin</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center" data-aos="fade-right">
              <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6 border-4 border-yellow-500">
                <img src="/images/Foto 4x6.jpg" alt="Bride" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-4xl font-serif mb-2 text-yellow-600">Agil Ardian Pratama</h3>
              <p className="mb-4">Putra dari Bapak & Ibu ...</p>
              <div className="flex justify-center space-x-4">
                <a href="https://instagram.com/sarah" className="text-white hover:text-pink-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="text-center" data-aos="fade-left">
              <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6 border-4 border-yellow-500">
                <img src="/images/2.jpg" alt="Groom" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-4xl font-serif mb-2 text-yellow-600">Sofi Eriyanti</h3>
              <p className="mb-4">Putri dari Bapak & Ibu ...</p>
              <div className="flex justify-center space-x-4">
                <a href="https://instagram.com/john" className="text-white hover:text-pink-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Love Story Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url("/images/wedding-bg-2.jpg")' }}></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <Heart className="mx-auto text-amber-500 mb-4" size={30} />
            <h2 className="text-3xl font-serif mb-4">Our Love Story</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>
          
          <div className="space-y-16">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-5/12" data-aos="fade-right">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img src="/images/1.jpg" alt="First Met" className="w-full h-64 object-cover" />
                </div>
              </div>
              <div className="md:w-7/12 md:pl-12 mt-6 md:mt-0" data-aos="fade-left">
                <h3 className="text-2xl font-serif mb-3 text-yellow-500">Pertama Bertemu</h3>
                <p className="text-gray-300">
                  Kami pertama kali bertemu di sekolah SMK. Pertemua yang tidak sengaja namun sangat berkesan.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-5/12" data-aos="fade-left">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img src="/images/5.jpg" alt="Dating" className="w-full h-64 object-cover" />
                </div>
              </div>
              <div className="md:w-7/12 md:pr-12 mt-6 md:mt-0" data-aos="fade-right">
                <h3 className="text-2xl font-serif mb-3 text-yellow-500">Mulai Berpacaran</h3>
                <p className="text-gray-300">
                  Setelah beberapa bulan saling mengenal, kami memutuskan untuk memulai hubungan pada tanggal 1 Januari 2021. Hari yang akan selalu kami kenang.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-5/12" data-aos="fade-right">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img src="/images/7.jpg" alt="Proposal" className="w-full h-64 object-cover" />
                </div>
              </div>
              <div className="md:w-7/12 md:pl-12 mt-6 md:mt-0" data-aos="fade-left">
                <h3 className="text-2xl font-serif mb-3 text-yellow-500">Lamaran</h3>
                <p className="text-gray-300">
                  Di bawah langit berbintang pada malam tanggal 20 April 2025, kami lamaran. Setelah sekian lama akhirnya hari yang ditunggu tiba.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-20 px-4 relative bg-gray-900">
        <div className="absolute inset-0 bg-cover bg-fixed opacity-20" style={{ backgroundImage: 'url("/images/wedding-bg-7.jpg")' }}></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <Calendar className="mx-auto text-amber-500 mb-4" size={30} />
            <h2 className="text-3xl font-serif mb-4">Rangkaian Acara</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-xl" data-aos="fade-up">
              <h3 className="text-2xl font-serif mb-4 text-yellow-300">Akad Nikah</h3>
              <div className="flex items-start mb-4">
                <Calendar className="text-yellow-400 mr-4 mt-1" size={20} />
                <div>
                  <p className="font-semibold">Sabtu, 16 Juni 2025</p>
                  <p>08:00 - 10:00 WIB</p>
                </div>
              </div>
              <div className="flex items-start mb-4">
                <MapPin className="text-yellow-400 mr-4 mt-1" size={20} />
                <div>
                  <p className="font-semibold">Ballroom Hotel Aston</p>
                  <p>Jl. Mayjen Sungkono, Madiun</p>
                </div>
              </div>
              <a 
                href="https://goo.gl/maps/YOUR_MAP_LINK" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-amber-600 px-4 py-2 rounded-full text-sm hover:bg-amber-700 transition-all mt-4"
              >
                Lihat Lokasi
              </a>
            </div>
            
            <div className="bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-xl" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-2xl font-serif mb-4 text-yellow-300">Resepsi Pernikahan</h3>
              <div className="flex items-start mb-4">
                <Calendar className="text-yellow-400 mr-4 mt-1" size={20} />
                <div>
                  <p className="font-semibold">Sabtu, 16 Juni 2025</p>
                  <p>11:00 - 14:00 WIB</p>
                </div>
              </div>
              <div className="flex items-start mb-4">
                <MapPin className="text-yellow-400 mr-4 mt-1" size={20} />
                <div>
                  <p className="font-semibold">Ballroom Hotel Aston</p>
                  <p>Jl. Mayjen Sungkono, Madiun</p>
                </div>
              </div>
              <a 
                href="https://goo.gl/maps/YOUR_MAP_LINK" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-amber-600 px-4 py-2 rounded-full text-sm hover:bg-pink-700 transition-all mt-4"
              >
                Lihat Lokasi
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: 'url("/images/wedding-bg-7.jpg")' }}></div>
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
        <div className="absolute inset-0 bg-cover bg-fixed opacity-20" style={{ backgroundImage: 'url("/images/wedding-bg-2.jpg")' }}></div>
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
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: 'url("/images/wedding-bg.jpg")' }}></div>
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
        <div className="absolute inset-0 bg-cover bg-fixed opacity-20" style={{ backgroundImage: 'url("/images/wedding-bg-2.jpg")' }}></div>
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
          <h2 className="text-3xl font-serif mb-6 text-amber-300">Agil & Sofi</h2>
          <p className="mb-4">Terima kasih telah menjadi bagian dari hari spesial kami</p>
          <p className="text-sm text-gray-400 mt-8">© 2025 Agil & Sofi Wedding</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
