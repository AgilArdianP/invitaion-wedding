import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

function GiftRegistry() {
  const [copied, setCopied] = useState({
    bank1: false,
    bank2: false
  });

  const bankAccounts = [
    {
      id: 'bank1',
      name: 'Bank BCA',
      number: '1234567890',
      holder: 'Agil Ardian Pratama'
    },
    {
      id: 'bank2',
      name: 'Bank Mandiri',
      number: '0987654321',
      holder: 'Sofi Eriyanti'
    }
  ];

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopied({ ...copied, [id]: true });
    
    setTimeout(() => {
      setCopied({ ...copied, [id]: false });
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg" data-aos="fade-up">
        <h3 className="text-xl font-serif mb-6 text-center">Amplop Digital</h3>
        
        <div className="space-y-4">
          {bankAccounts.map(account => (
            <div key={account.id} className="border border-gray-700 p-4 rounded-lg">
              <h4 className="font-medium mb-2">{account.name}</h4>
              <p className="text-gray-300 mb-1">No. Rekening: {account.number}</p>
              <p className="text-gray-300">Atas Nama: {account.holder}</p>
              <button
                onClick={() => handleCopy(account.id, account.number)}
                className="mt-3 flex items-center space-x-2 bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600 transition-all"
              >
                {copied[account.id] ? (
                  <>
                    <Check size={16} />
                    <span>Disalin!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>Salin Nomor</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg" data-aos="fade-up">
        <h3 className="text-xl font-serif mb-6 text-center">Kirim Hadiah</h3>
        <div className="text-center">
          <p className="text-gray-300 mb-4">
            Jika Anda ingin mengirimkan hadiah, silakan kirim ke alamat di bawah ini:
          </p>
          <div className="border border-gray-700 p-4 rounded-lg">
            <p className="font-medium mb-2">Agil & Sofi</p>
            <p className="text-gray-300">
              Dsn.Jati II Ds.Gandri Kec.Pangkur Kab.Ngawi<br />
              NGAWI, 12345<br />
              Indonesia<br />
              Telepon: +62 85175406291
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GiftRegistry