# assisfery.github.io

Personal website of Assis Ferreira — a single-page portfolio built with static HTML, CSS, and JS.

Live at: https://assisfery.github.io

## Stack

- Plain HTML5 / CSS3
- [Bootstrap](https://getbootstrap.com/) and [Element UI](https://element-plus.org/) for layout/components
- [Vue.js](https://vuejs.org/) + jQuery for interactivity
- Content (skills, portfolio, work history) served from static JSON files in [api/](api/)

## Project structure

```
index.html   Main page (About, Skills, Experience sections)
css/         Custom styles
js/          Page scripts
img/         Images and icons
font/        Fonts
lib/         Vendored JS/CSS libraries
api/         Static JSON data (portfolio.json, skills.json, worked-with.json)
docs/        Static documents (e.g. resume PDF)
```

Since there's no build step, changes to `index.html`, `css/`, or `js/` are reflected immediately on refresh.

## Running locally

### Docker (recommended)

```bash
docker compose up -d
```

The site will be available at http://localhost:8080. Stop it with:

```bash
docker compose down
```

This uses `nginx:alpine` to serve the static files (see [docker-compose.yml](docker-compose.yml) and [nginx.conf](nginx.conf)).

### Without Docker

Serve the folder with any static file server, e.g.:

```bash
npx serve .
```

## Deployment

The site is deployed via GitHub Pages directly from this repository.
