import { useState } from 'react';

function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '1',
    attending: 'yes',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-gray-800 bg-opacity-80 p-8 rounded-lg text-center" data-aos="fade-up">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="text-2xl font-serif mb-4 text-pink-300">Terima Kasih!</h3>
        <p className="text-gray-300 mb-4">Konfirmasi kehadiran Anda telah kami terima.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="bg-pink-600 px-6 py-2 rounded-full hover:bg-pink-700 transition-all"
        >
          Kembali
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 bg-opacity-80 p-8 rounded-lg" data-aos="fade-up">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-sm font-medium">Nama</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium">No. Telepon</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="guests" className="block mb-2 text-sm font-medium">Jumlah Tamu</label>
            <select
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            >
              <option value="1">1 Orang</option>
              <option value="2">2 Orang</option>
              <option value="3">3 Orang</option>
              <option value="4">4 Orang</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Kehadiran</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="attending"
                  value="yes"
                  checked={formData.attending === 'yes'}
                  onChange={handleChange}
                  className="mr-2 text-pink-500 focus:ring-pink-500"
                />
                Hadir
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="attending"
                  value="no"
                  checked={formData.attending === 'no'}
                  onChange={handleChange}
                  className="mr-2 text-pink-500 focus:ring-pink-500"
                />
                Tidak Hadir
              </label>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-sm font-medium">Pesan/Ucapan</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          ></textarea>
        </div>
        
        <div className="text-center">
          <button
            type="submit"
            className="bg-amber-600 px-10 py-3 rounded-full hover:bg-amber-700 transition-all font-medium"
          >
            Kirim RSVP
          </button>
        </div>
      </form>
    </div>
  );
}

export default RSVP;