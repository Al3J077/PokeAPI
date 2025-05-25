# PokeAPI Vite Project

This project is a web application that allows users to interact with Pokémon data using the PokeAPI. It is built using Vite for a fast and modern development experience.

## Project Structure

```
pokeapi-vite
├── public
│   └── icono.png          # Application icon
├── src
│   ├── assets
│   │   └── style.css      # CSS styles for the application
│   ├── js
│   │   ├── aleatorio.js    # Fetches and displays a random Pokémon
│   │   ├── api.js          # Manages tab visibility and splash screen
│   │   ├── capturados.js    # Displays captured Pokémon from local storage
│   │   ├── detalle.js      # Fetches and displays detailed Pokémon information
│   │   ├── favoritos.js     # Displays favorite Pokémon from local storage
│   │   ├── lista.js        # Fetches and displays a list of Pokémon
│   │   └── usuario.js      # Displays user profile information
│   ├── index.html          # Main HTML file for the application
│   └── main.js             # Entry point for the application
├── package.json             # npm configuration and dependencies
├── vite.config.js           # Vite configuration
└── README.md                # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd pokeapi-vite
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Features

- View a list of Pokémon with details.
- Fetch and display a random Pokémon.
- Capture Pokémon and save them to local storage.
- Manage a list of favorite Pokémon.
- User profile displaying captured Pokémon and favorites.

## Acknowledgments

This project utilizes the [PokeAPI](https://pokeapi.co/) for fetching Pokémon data.