# Ankit Agnihotry — Developer Portfolio

A full-stack developer portfolio built with **Node.js**, **EJS**, **PostgreSQL** and **Sequelize ORM**. Features a fully responsive UI, smooth animations, REST APIs for dynamic content management, and a clean MVC architecture.

## Tech Stack

- **Backend** — Node.js, Express.js
- **Frontend** — EJS, CSS3, Vanilla JS
- **Database** — PostgreSQL + Sequelize ORM
- **Validation** — Joi
- **Architecture** — MVC (Modules: Profile, Experience, Projects)

## Features

- Fully responsive across all devices
- Smooth scroll animations & ambient glow effects
- Dynamic content via REST APIs
- Typing effect hero section
- Timeline-based work experience
- Skills with devicon logos
- Dark/light mode ready

## Getting Started

### Prerequisites
- Node.js >= 18
- PostgreSQL >= 14

### Installation

```bash
# Clone the repo
git clone https://github.com/aginhotryAnkit/portfolio.git
cd portfolio

# Install dependencies
npm install

# Setup environment
cp .env.example .env
# Edit .env with your DB credentials

# Create DB in PostgreSQL
createdb portfolio_db

# Seed all data
npm run seed

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start with nodemon |
| `npm start` | Start production server |
| `npm run seed` | Reset DB and insert all data |

## API Docs

See [doc/API.md](doc/API.md) for full API reference.

## License

MIT
