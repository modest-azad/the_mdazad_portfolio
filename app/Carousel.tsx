import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Carousel(){
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
    <Slider {...settings}>
      <div className="px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Card 1</h2>
          <p className="text-gray-600">Content for card 1.</p>
        </div>
      </div>
      <div className="px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Card 2</h2>
          <p className="text-gray-600">Content for card 2.</p>
        </div>
      </div>
      <div className="px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Card 3</h2>
          <p className="text-gray-600">Content for card 3.</p>
        </div>
      </div>
    </Slider>
    </>
  )
}
