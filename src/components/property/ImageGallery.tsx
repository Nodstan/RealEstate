import React, { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-100">
        <img
          src={images[activeImage]}
          alt="Property Main"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(index)}
            className={`aspect-video rounded-lg overflow-hidden border-2 transition-all ${
              activeImage === index ? 'border-blue-600 ring-2 ring-blue-600 ring-offset-2' : 'border-transparent hover:border-gray-300'
            }`}
          >
            <img
              src={img}
              alt={`Property View ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
