# Setup Guide

## Prerequisites
- Node.js >= 18
- PostgreSQL >= 14

## Steps

### 1. Clone & Install
```bash
git clone <repo-url>
cd Portfolio
npm install
```

### 2. Configure Environment
```bash
cp .env.example .env
```
Edit `.env`:
```
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=portfolio_db
DB_USER=postgres
DB_PASSWORD=yourpassword
```

### 3. Create Database
```sql
CREATE DATABASE portfolio_db;
```

### 4. Seed Data
```bash
npm run seed
```
This creates all tables and inserts resume data automatically.

### 5. Start Development Server
```bash
npm run dev
```

### 6. Open in Browser
```
http://localhost:3000
```

## Scripts
| Command | Description |
|---|---|
| `npm run dev` | Start with nodemon (auto-reload) |
| `npm start` | Start production server |
| `npm run seed` | Drop & recreate tables, insert resume data |
