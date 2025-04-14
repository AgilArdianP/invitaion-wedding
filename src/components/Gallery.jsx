import { useState } from 'react';
import { X } from 'lucide-react';

function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    const image = [
        './images/1.jpg',
        './images/2.jpg',
        './images/3.jpg',
        './images/4.jpg',
        './images/5.jpg',
        './images/6.jpg',
        './images/7.jpg',
        './images/8.jpg',
    ];

    const openModal = (index) => {
        setSelectedImage(index);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const nextImage = () => {
        setSelectedImage((prev) => (prev + 1) % Images.length);
    };

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {image.map((image, index) => (
                    <div
                        key={index}
                        className="aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-all"
                        data-aos="zoom-in"
                        data-aos-delay={index * 50}
                        onClick={() => openModal(index)}
                    >
                        <img
                            src={image}
                            alt={`Gallery Image ${index + 1}`}
                            clasName="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            {selectedImage !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
                    <button
                        className="absolute top-6 right-6 text-white p-2 rounded-full bg-gray-800 hover:bg-gray-700"
                        onClick={closeModal}
                    >
                        <X size={24} />
                    </button>

                    <button
                        className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full bg-gray-800 hover:bg-gray-700"
                        onClick={prevImage}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>

                    <button 
                        className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full bg-gray-800 hover:bg-gray-700"
                        onClick={nextImage}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>

                    <div className="w-full max-w-4xl">
                        <img
                            src={images[selectedImage]}
                            alt={`Gallery Image ${selectedImage + 1}`}
                            className="max-h-screen max-w-full mx-auto object-contain"
                            />
                        </div>
                </div>
            )}
        </>
    );
}

export default Gallery;