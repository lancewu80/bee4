const API_BASE_URL = 'http://localhost:8080/api';

/**
 * Fetch all rentals from the backend API
 * @returns {Promise<Array>} Array of rental objects
 */
export const getAllRentals = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/rentals`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching rentals:', error);
    throw error;
  }
};

/**
 * Fetch a single rental by ID from the backend API
 * @param {number} id - The rental ID
 * @returns {Promise<Object>} Rental object
 */
export const getRentalById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/rentals/${id}`);
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Rental not found');
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching rental ${id}:`, error);
    throw error;
  }
};
