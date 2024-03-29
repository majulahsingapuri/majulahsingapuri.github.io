// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Bhargav Singapuri",
  tagline: "AI/ML and SWE",
  favicon: "img/favicon.ico",
  url: "https://majulahsingapuri.github.io",
  baseUrl: "/",
  organizationName: "majulahsingapuri", // Usually your GitHub org/user name.
  projectName: "majulahsingapuri.github.io", // Usually your repo name.
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  trailingSlash: true,

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  themes: ["@saucelabs/theme-github-codeblock"],

  plugins: [
    [
      "docusaurus2-dotenv",
      {
        path: "./.env",
        safe: false,
        systemvars: false,
        silent: false,
        expand: false,
        defaults: false,
      },
    ],
    "plugin-image-zoom",
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "ninja-auth",
        path: "ninja-auth",
        routeBasePath: "ninja-auth",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        debug: true,
        blog: {
          showReadingTime: true,
          blogTitle: "Bhargav's blog",
          blogDescription: "A place for me to write some thoughts",
          blogSidebarTitle: "Read More",
          feedOptions: {
            type: "all",
            copyright: "Bhargav Singapuri",
          },
        },
        docs: {
          id: "default",
          path: "projects",
          routeBasePath: "projects",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          filename: "sitemap.xml",
        },
        gtag: {
          trackingID: "G-S3K30Y4N2K",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/social-card.jpg",
      navbar: {
        title: "Bhargav Singapuri",
        logo: {
          alt: "My Site Logo",
          src: "img/bhargav.png",
          className: "avatar__photo avatar__photo--sm",
        },
        items: [
          // left
          {
            type: "doc",
            docId: "introduction",
            label: "Projects",
            position: "left",
          },
          {
            type: "doc",
            docId: "ninja-auth-index",
            label: "Ninja Auth",
            position: "left",
            docsPluginId: "ninja-auth",
          },
          { to: "/blog", label: "Blog", position: "left" },
          // right
          {
            href: "https://github.com/majulahsingapuri",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub Profile",
          },
          {
            href: "https://linkedin.com/in/bhargav-singapuri",
            position: "right",
            className: "header-linkedin-link",
            "aria-label": "LinkedIn Profile",
          },
          {
            href: "https://twitter.com/majulasingapuri",
            position: "right",
            className: "header-twitter-link",
            "aria-label": "Twitter Profile",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "More Socials",
            items: [
              {
                label: "Instagram",
                href: "https://instagram.com/majulahsingapuri",
              },
              {
                label: "TikTok",
                href: "https://tiktok.com/@majulahs",
              },
              {
                label: "Substack",
                href: "https://majulahsingapuri.substack.com",
              },
              {
                label: "Email",
                href: "mailto:hello@bhargav.io",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Bhargav Singapuri. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      imageZoom: {
        // CSS selector to apply the plugin to, defaults to '.markdown img'
        selector: ".markdown img",
        // Optional medium-zoom options
        // see: https://www.npmjs.com/package/medium-zoom#options
        options: {
          margin: 24,
          background: "#BADA55",
          scrollOffset: 0,
          container: "#zoom-container",
          template: "#zoom-template",
        },
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
    }),
};

module.exports = config;
