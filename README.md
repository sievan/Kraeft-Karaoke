# Kräft-Karaoke

<img src="./logo.png" width="300" alt="Logo">

A web-based digital songbook built with Gatsby. Create and share your favorite songs for gatherings, parties, or events.

Despite the name, you don't have to use it for crayfish parties, you can use it for midsummer parties as well as a cure for any awkward silence. Nothing says "traditional Swedish gathering" like balancing smelly seafood, aquavit, and your phone all at once!

## Features

- Responsive web design that works on mobile and tablet (and desktop, but why would you want that?)
- Add new songs using simple Markdown format
- Easy to deploy to any web hosting service
- Built with Gatsby for fast performance

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm or yarn

### Installation

1. Clone this repository

   ```shell
   git clone https://github.com/yourusername/sangbok-anncob.git
   cd sangbok-anncob
   ```

2. Install dependencies

   ```shell
   npm install
   ```

3. Start the development server

   ```shell
   npm run develop
   ```

4. View your songbook at `http://localhost:8000`

## Adding Songs

1. Create a new Markdown file in the `src/songs/` directory
2. Follow the format:

   ```markdown
   # Song Title

   _Mel: Tune name_

   Lyrics for verse 1\
   More lyrics\
   Even more lyrics

   Lyrics for verse 2\
   And so on...
   ```

3. Songs will automatically be included in the songbook

## Structure

- `/src/songs/` - Contains all song files in Markdown format
- `/src/components/` - React components for the UI
- `/src/pages/` - Page templates
- `/src/lib/` - Helper functions for reading songs

## Deployment

The songbook can be deployed to any static site hosting service:

```shell
npm run build
```

Then upload the contents of the `public` folder to your hosting provider.

## License

This project is licensed under the terms of the license included in the repository.

## Acknowledgments

- Built with [Gatsby](https://www.gatsbyjs.com/)
- Markdown parsing via [marked](https://marked.js.org/)
