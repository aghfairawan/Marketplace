import React from 'react';
import { Link } from 'react-router-dom';

const sampleCaterings = [
  { id: 1, name: 'Masakan Padang', description: 'Catering A Description', image: 'https://thumb.viva.co.id/media/frontend/thumbs3/2023/01/26/63d1b548b93af-ilustrasi-masakan-padang_1265_711.jpg' },
  { id: 2, name: 'Masakan Sunda', description: 'Catering B Description', image: 'https://o-cdn-cas.sirclocdn.com/parenting/images/makanan_khas_Sunda-nasi_tutug_onc.width-800.format-webp.webp' },
  { id: 3, name: 'Masakan India', description: 'Catering C Description', image: 'https://cdn0-production-images-kly.akamaized.net/2eu2J-pFxP9d4i4dMGZOp2QzUtE=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2838305/original/082445000_1561600271-iStock-1127597926.jpg' },
  { id: 4, name: 'Masakan Bali', description: 'Catering D Description', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwudtcw61x17VLnAXjVuFTdc04zJsKDo3ymQ&s' },
  { id: 5, name: 'Masakan Melayu', description: 'Catering E Description', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ZcBtIeV1r6jVpk-xDS7OIvlnGPNGSlNiQQ&s' },
  { id: 6, name: 'Masakan Sunda', description: 'Catering B Description', image: 'https://o-cdn-cas.sirclocdn.com/parenting/images/makanan_khas_Sunda-nasi_tutug_onc.width-800.format-webp.webp' },

];

const Homepage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Marketplace Katering</h1>
      <div className=" mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleCaterings.map((catering) => (
          <div key={catering.id} className="bg-white shadow-md rounded-lg p-4">
            <img src={catering.image} alt={catering.name} className="w-full h-32 object-cover rounded-t-lg" />
            <h2 className="text-xl font-semibold mt-2">{catering.name}</h2>
            <p className="text-gray-600 mt-1">{catering.description}</p>
            <Link to={`/catering/${catering.id}`} className="mt-4 block text-center text-blue-500 hover:underline">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
