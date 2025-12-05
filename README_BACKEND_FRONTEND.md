# Backend & Frontend API Setup

This project contains a Spring Boot backend API and React frontend components for a rental property management system.

## Project Structure

```
.
├── backend/                 # Spring Boot backend application
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/bee4/backend/
│   │   │   │   ├── BackendApplication.java
│   │   │   │   ├── model/Rental.java
│   │   │   │   ├── service/RentalService.java
│   │   │   │   ├── controller/RentalController.java
│   │   │   │   └── config/WebConfig.java
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── pom.xml
├── frontend/                # React frontend components
│   ├── src/
│   │   ├── services/
│   │   │   └── rentalApi.js
│   │   └── components/
│   │       └── RentalDetails.jsx
└── README_BACKEND_FRONTEND.md
```

## Backend Setup

### Prerequisites
- Java 17 or higher
- Maven 3.6 or higher

### Installation & Running

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Build the project:
   ```bash
   mvn clean install
   ```

3. Run the application:
   ```bash
   mvn spring-boot:run
   ```

The backend server will start on `http://localhost:8080`

### API Endpoints

- **GET /api/rentals** - Get all rentals
  - Returns: Array of rental objects
  
- **GET /api/rentals/{id}** - Get rental by ID
  - Parameters: `id` (Long) - Rental ID
  - Returns: Single rental object
  - Status: 404 if not found

### Sample Response

```json
{
  "id": 1,
  "title": "Modern Downtown Apartment",
  "description": "Beautiful 2-bedroom apartment in the heart of the city with stunning views",
  "location": "Downtown, New York",
  "price": 2500.0,
  "bedrooms": 2,
  "bathrooms": 2,
  "area": 1200.0,
  "imageUrl": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  "type": "Apartment"
}
```

## Frontend Setup

### Prerequisites
- Node.js 16 or higher
- npm or yarn

### Usage

The frontend files are located in the `frontend/` directory:

1. **rentalApi.js** - API service module for communicating with the backend
   - `getAllRentals()` - Fetches all rentals
   - `getRentalById(id)` - Fetches a single rental by ID

2. **RentalDetails.jsx** - React component for displaying rental details
   - Props: `rentalId` (number) - The ID of the rental to display
   - Features: Loading states, error handling, responsive design

### Integration Example

```jsx
import React from 'react';
import RentalDetails from './frontend/src/components/RentalDetails';

function App() {
  return (
    <div>
      <RentalDetails rentalId={1} />
    </div>
  );
}
```

### Using the API Service

```javascript
import { getAllRentals, getRentalById } from './frontend/src/services/rentalApi';

// Fetch all rentals
const rentals = await getAllRentals();

// Fetch a specific rental
const rental = await getRentalById(1);
```

## Testing the API

### Using curl

Get all rentals:
```bash
curl http://localhost:8080/api/rentals
```

Get rental by ID:
```bash
curl http://localhost:8080/api/rentals/1
```

### Using Browser

Simply navigate to:
- http://localhost:8080/api/rentals
- http://localhost:8080/api/rentals/1

## CORS Configuration

The backend is configured to allow requests from `http://localhost:3000` (default React dev server port).

To modify allowed origins, edit `backend/src/main/java/com/bee4/backend/config/WebConfig.java`

## Sample Data

The backend comes pre-loaded with 5 sample rental properties:
1. Modern Downtown Apartment - $2,500/month
2. Cozy Suburban House - $3,200/month
3. Luxury Penthouse - $5,500/month
4. Beach Villa - $4,800/month
5. Studio Apartment - $1,500/month

## Troubleshooting

### Backend Issues

1. **Port 8080 already in use**
   - Change the port in `backend/src/main/resources/application.properties`
   - Update the API_BASE_URL in `frontend/src/services/rentalApi.js`

2. **Maven build errors**
   - Ensure Java 17+ is installed: `java -version`
   - Clear Maven cache: `mvn clean`

### Frontend Issues

1. **CORS errors**
   - Ensure backend is running on port 8080
   - Check WebConfig.java for correct frontend origin

2. **API connection failed**
   - Verify backend is running: `curl http://localhost:8080/api/rentals`
   - Check browser console for error details

## Development Notes

- Backend uses in-memory data storage (no database required)
- Frontend components use React hooks (useState, useEffect)
- Styling uses Tailwind CSS classes
- All API calls include error handling

## Next Steps

1. Add a database (PostgreSQL, MySQL, etc.)
2. Implement CRUD operations (POST, PUT, DELETE)
3. Add authentication and authorization
4. Implement search and filtering
5. Add pagination for large datasets
