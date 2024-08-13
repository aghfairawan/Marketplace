import React from 'react';
import { useParams } from 'react-router-dom';

const sampleCaterings = [
  { id: 1, name: 'Masakan Padang', description: 'Catering A Description', image: 'https://thumb.viva.co.id/media/frontend/thumbs3/2023/01/26/63d1b548b93af-ilustrasi-masakan-padang_1265_711.jpg' },
  { id: 2, name: 'Masakan Sunda', description: 'Catering B Description', image: 'https://o-cdn-cas.sirclocdn.com/parenting/images/makanan_khas_Sunda-nasi_tutug_onc.width-800.format-webp.webp' },
  { id: 3, name: 'Masakan India', description: 'Catering C Description', image: 'https://cdn0-production-images-kly.akamaized.net/2eu2J-pFxP9d4i4dMGZOp2QzUtE=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2838305/original/082445000_1561600271-iStock-1127597926.jpg' },
  { id: 4, name: 'Masakan Bali', description: 'Catering D Description', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwudtcw61x17VLnAXjVuFTdc04zJsKDo3ymQ&s' },
  { id: 5, name: 'Masakan Melayu', description: 'Catering E Description', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ZcBtIeV1r6jVpk-xDS7OIvlnGPNGSlNiQQ&s' },
  { id: 6, name: 'Masakan Sunda', description: 'Catering B Description', image: 'https://o-cdn-cas.sirclocdn.com/parenting/images/makanan_khas_Sunda-nasi_tutug_onc.width-800.format-webp.webp' },

];

const CateringDetail = () => {
  const { id } = useParams();
  const catering = sampleCaterings.find((item) => item.id === parseInt(id));

  if (!catering) return <p>Loading...</p>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">{catering.name}</h1>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto">
        <img src={catering.image} alt={catering.name} className="w-full h-48 object-cover rounded-t-lg" />
        <h2 className="text-xl font-semibold mt-4">{catering.name}</h2>
        <p className="text-gray-600 mt-2">{catering.description}</p>
        <p className="text-gray-800 mt-4">{catering.details}</p>
        <button className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CateringDetail;
