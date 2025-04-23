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

## Installation FrontEnd

# PhotoLabs React Application

## Setup

Install dependencies with `npm install`.

Note: This project requires at least Node v16

## Run The Development Server

Start the server with

```sh
npm run dev
```

You can visit the running application at [http://localhost:3000](http://localhost:3000)

## Run The Linter

You can run eslint with the following command:

```sh
npm run lint
```

## Run The Jest Tests

The tests can be run with:

```sh
npm run test
# or
npm test
```

---
## Installation BackEnd

# Photolabs API

## Setup

Install dependencies with `npm install`.

## Creating The DB

Use the `psql -U labber` command to login to the PostgreSQL server with the username `labber` and the password `labber`.

Create a database with the command `CREATE DATABASE photolabs_development;`.

Copy the `.env.example` file to `.env.development` and fill in the necessary PostgreSQL configuration. The `node-postgres` library uses these environment variables by default.

```
PGHOST=localhost
PGUSER=labber
PGDATABASE=photolabs_development
PGPASSWORD=labber
PGPORT=5432
```

## Seeding

Run the development server with `npm start`.

Both of these achieve the same result.

- Make a `GET` request to `/api/debug/reset` with `curl http://localhost:8001/api/debug/reset`.
- Use the browser to navigate to [http://localhost:8001/api/debug/reset](http://localhost:8001/api/debug/reset).

## Run The Server

Running the server normally
```sh
npm start
```

Running the server so it returns an error when saving/deleting for testing the client's error handling capabilities
```sh
npm run error
```

## Endpoints

### Retrieve all photos

[/api/photos](http://localhost:8001/api/photos)

### Retrieve all topics

[/api/topics](http://localhost:8001/api/topics)

### Retrieve photos for a specific topic

[/api/topics/:id/photos](http://localhost:8001/api/topics/:id/photos)

### Reset the database

[/api/debug/reset](http://localhost:8001/api/debug/reset)
