module.exports = {
  siteMetadata: {
    siteUrl: 'https://tinney.dev',
    title: 'Shivam Chahar',
    contact: {
      name: 'Shivam Chahar',
      email: 'chahar.shivam@yahoo.com',
      displayedEmail: 'chahar.shivam [at] yahoo.com',
      resumeUrl: 'https://docs.google.com/document/d/1-Zv4s8h_5vUGzwzn2ioDpSRWGt8WzbY5jAVnm0EJ-vE/edit?usp=sharing',
    },
    social: {
      github: 'chaharshivam',
      linkedin: 'shivamchahar',
      twitter: 'shahr_96',
    },
  },
  plugins: [
    'gatsby-plugin-sitemap', {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://shivamchahar.me',
        sitemap: 'https://www.tinney.dev/sitemap.xml',
        policy: [{
          userAgent: '*',
          allow: '/',
        }],
      },
    }, 'gatsby-plugin-eslint',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json', {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/data/posts`,
        name: 'posts',
        ignore: process.env.NODE_ENV === 'production' && ['**/_drafts/**'],
      },
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/data/projects/projects.json`,
        name: 'projects',
      },
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/data/about/about.md`,
        name: 'about',
      },
    }, {
      resolve: 'gatsby-transformer-remark',
      options: {
        // File excerpts will start at the beginning
        // and end at the custom separator.
        excerpt_separator: '<!-- end -->',
        plugins: [{
          // IMPORTANT: This must be before `prism`.
          // See: https://github.com/gatsbyjs/gatsby/issues/5764
          resolve: 'gatsby-remark-autolink-headers',
        }, {
          resolve: 'gatsby-remark-prismjs',
        }, {
          resolve: 'gatsby-remark-images',
          options: {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
            maxWidth: 590,
            // Quality level of generated images (1-100).
            // The default is 50.
            quality: 100,
            backgroundColor: 'transparent',
            // Wrapper <div> styles.
            wrapperStyle:
              'margin: 1rem;',
          },
        }, {
          // Adds support for custom Markdown blocks.
          resolve: 'gatsby-remark-custom-blocks',
          options: {
            blocks: {
              boxShadow: {
                classes: 'box-shadow',
              },
            },
          },
        },
        ],
      },
    }, {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-87415138-3',
        // Puts tracking script in the head instead of the body
        head: false,
        // Anonymizes users and respects do-not-track
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
};
