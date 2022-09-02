import React from 'react';
import ImageSlider from './componentSlider';
export default function Slider() {
  const slides = [
    { image: '/images/model1.jpg', title: 'Formal' },
    { image: '/images/model2.jpg', title: 'T-shirt' },
    { image: '/images/model3.jpg', title: 'Classic' },
    { image: '/images/model4.jpg', title: 'Casual' },
  ];
  return (
    <div className="w-full mb-5 p-5">
      <div className="container w-[60rem] h-[25rem] mx-auto">
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
}
