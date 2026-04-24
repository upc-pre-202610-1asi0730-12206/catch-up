# Catch Up

Catch Up is a newsreader application that helps users browse news sources, read top headlines.

## Features

- Browse available news sources and select one as the active feed.
- View top headlines for the selected source.
- Read article summaries and open original sources.
- Share articles (or copy links when native sharing is unavailable).
- Switch UI language between English (`en`) and Spanish (`es`).

## Technology Stack

- Vue 3
- Vite
- PrimeVue + PrimeFlex + PrimeIcons
- Axios
- vue-i18n

## Prerequisites

- Node.js (LTS recommended)
- npm

## Quick Start

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev`: starts the development server.
- `npm run build`: creates a production build in `dist/`.
- `npm run preview`: serves the production build locally.

## Environment Variables

This project reads API settings from Vite environment variables (`import.meta.env`).

Create a local env file (for example `.env.local`) with:

```bash
VITE_NEWS_API_URL=https://newsapi.org/v2
VITE_NEWS_API_KEY=your_news_api_key
VITE_SOURCES_ENDPOINT_PATH=/top-headlines/sources
VITE_TOP_HEADLINES_ENDPOINT_PATH=/top-headlines
VITE_LOGO_API_URL=https://img.logo.dev
VITE_LOGO_PUBLISHABLE_API_KEY=your_logo_dev_publishable_key
```

Notes:

- Do not commit real API keys.
- Use provider dashboards to rotate keys if they are exposed.

## Project Structure

```text
src/
  news/
	application/      # reactive store and use-case orchestration
	domain/model/     # entities (Article, Source)
	infrastructure/   # API clients and assemblers
	presentation/     # news-related UI components
  shared/
	infrastructure/   # shared API helpers
	presentation/     # shared layout/footer/language components
  locales/            # i18n dictionaries (en, es)
```

## Architecture Notes

The codebase follows a domain-drive-design approach with inner layered organization:

- `domain`: core entities.
- `application`: state and app-level behavior (`news.store.js`).
- `infrastructure`: external service adapters and response mappers.
- `presentation`: Vue components and UI interactions.

## Internationalization

- i18n setup: `src/i18n.js`
- dictionaries: `src/locales/en.json`, `src/locales/es.json`

## Project Documentation
This project includes documentation for user stories and a class diagram:

- User stories: `docs/user-stories.md`
- Class diagram: `docs/class-diagram.puml`

## Attribution

This app uses data and branding services from:

- [NewsAPI.org](https://www.newsapi.org)
- [Logo.dev Logo API](https://logo.dev)

## License

MIT
