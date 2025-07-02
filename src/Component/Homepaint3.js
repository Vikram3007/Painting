import React from 'react';
import './style/Homepaint3.css';
import Homepaint4 from './Homepaint4';

const Homepaint3 = () => {
  const services = [
    {
      id: 2,
      title: 'Bedroom Painting',
      price: '4999',
      duration: '30 mins',
      desc: 'Surface preparation, priming, and the application of high-quality paints using brushes, rollers, or spray techniques.',
      image: 'bedroom.jpg',
    },
    {
      id: 3,
      title: 'Any 2 Rooms',
      price: '8599',
      duration: '30 mins',
      desc: 'Surface preparation, priming, and the application of high-quality paints using brushes, rollers, or spray techniques.',
      image: '2rooms.webp',
    },
    {
      id: 4,
      title: 'Store Room Painting',
      price: '2199',
      duration: '30 mins',
      desc: 'Surface preparation, priming, and the application of high-quality paints using brushes, rollers, or spray techniques.',
      image: 'storeroom.jpeg',
    },
  ];

  return (
    <>
      <div className="homepaint3-wrapper">
        <div className="container">
          {services.map((service) => (
            <div key={service.id} className="card">
              <div className="content">
                <h2>{service.title}</h2>
                <p>₹{service.price} ({service.duration})</p>
                <p>{service.desc}</p>
              </div>
              <div className="image-box">
                <img src={service.image} alt={service.title} className="image" />
                <div className="button-container">
                  <button className="view-btn">View Details</button>
                  <button className="add-btn">Add</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Homepaint4 />
    </>
  );
};

export default Homepaint3;