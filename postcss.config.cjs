module.exports ={
    plugins: [
      require('@fullhuman/postcss-purgecss')({
        content: [
          'index.html',        // Entry point HTML
          'public/about.html', // Additional HTML file
          'src/pages/home.tsx',      // React components (TSX files)
          'src/pages/about.ts',       // Other TypeScript files
        ],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      }),
    ],
  }