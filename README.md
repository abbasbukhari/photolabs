# PhotoLabs

PhotoLabs is a React-based single-page application (SPA) that allows users to view, like, and explore photos in different categories. The project includes a backend API built with Node.js and Express, and a PostgreSQL database for data persistence.

---

## Features

- View photos on the homepage.
- Explore photos by categories (topics).
- View a larger version of a photo and similar photos.
- Like photos and track liked photos with a heart icon in the navigation bar.
- Backend API for managing photos and topics.
- Database reset functionality for development and testing.

---

## Tech Stack

### Frontend
- **React**: For building the user interface.
- **React Router**: For navigation between pages.
- **Axios**: For making API requests.

### Backend
- **Node.js**: For the server runtime.
- **Express**: For building the RESTful API.
- **PostgreSQL**: For the database.
- **Helmet & CORS**: For security and cross-origin resource sharing.

---

## Installation

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL (v14 or higher)
- npm (Node Package Manager)

### Steps

1. **Clone the repository**  
   ```bash
   git clone https://github.com/<your-username>/photolabs.git
   cd photolabs
   ```

2. **Install dependencies for the backend**  
   ```bash
   cd backend
   npm install
   ```

3. **Set up the database**

   Log in to PostgreSQL:
   ```bash
   psql -U postgres
   ```

   Create the database and user:
   ```sql
   CREATE DATABASE photolabs_development;
   CREATE USER development WITH PASSWORD 'development';
   GRANT ALL PRIVILEGES ON DATABASE photolabs_development TO development;
   ```

4. **Seed the database**
   ```bash
   npm run reset
   ```

5. **Start the backend server**
   ```bash
   npm start
   ```

---