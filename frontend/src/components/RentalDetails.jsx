import React, { useState, useEffect } from 'react';
import { getRentalById } from '../services/rentalApi';

const RentalDetails = ({ rentalId }) => {
  const [rental, setRental] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRental = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getRentalById(rentalId);
        setRental(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (rentalId) {
      fetchRental();
    }
  }, [rentalId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-lg text-gray-600">Loading rental details...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-lg text-red-600">Error: {error}</div>
      </div>
    );
  }

  if (!rental) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-lg text-gray-600">No rental found</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-6">
        <img 
          src={rental.imageUrl} 
          alt={rental.title}
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>
      
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <h1 className="text-3xl font-bold text-gray-900">{rental.title}</h1>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
            {rental.type}
          </span>
        </div>
        
        <p className="text-xl text-gray-600">
          <span className="font-semibold">${rental.price.toLocaleString()}</span> / month
        </p>
        
        <div className="flex items-center text-gray-600 space-x-4">
          <span className="flex items-center">
            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
            </svg>
            {rental.location}
          </span>
        </div>
        
        <div className="flex space-x-6 text-gray-700">
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"/>
            </svg>
            <span>{rental.bedrooms} Bedrooms</span>
          </div>
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-.293.707L12 12.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-4.586L3.293 7.707A1 1 0 013 7V5z" clipRule="evenodd"/>
            </svg>
            <span>{rental.bathrooms} Bathrooms</span>
          </div>
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd"/>
            </svg>
            <span>{rental.area} sq ft</span>
          </div>
        </div>
        
        <div className="pt-4 border-t border-gray-200">
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-700 leading-relaxed">{rental.description}</p>
        </div>
      </div>
    </div>
  );
};

export default RentalDetails;
