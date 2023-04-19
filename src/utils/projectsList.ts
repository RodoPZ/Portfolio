import { IconButtons } from "@/models/IconButton.model";
import { tagNames } from "@/models/tags.model";

export const projectList = [
  {
    name: { En: "Portfolio", Es: null },
    text: {
      En: `My portfolio... This portfolio! Made with Vue, created to show my projects and knowledge to the world. 
    
    Contact me! Let's do something together!`,
      Es: null,
    },
    tags: [tagNames.Figma, tagNames.Vue],
    links: [
      {
        name: IconButtons.Figma,
        link: "https://pictogrammers.com/library/mdi/",
      },
      { name: IconButtons.Github, link: null },
      { name: IconButtons.Web, link: null },
    ],
  },
  {
    name: { En: "Weather App", Es: null },
    text: {
      En: "Weather app that allows you to check the weather conditions of any part of the world. Designed in Figma, developed using React, Redux Toolkit, Typescript, Sass and bundled using Vite. The data was fetched from the 'WeatherApi' API and the final product was Deployed to Netlify. The goal of this project was to practice my newly acquired knowledge of React and show that I have the necessary skills to create a product from its conceptualization and design, to its development and deployment.",
      Es: null,
    },
    tags: [
      tagNames.Figma,
      tagNames.React,
      tagNames.TypeScript,
      tagNames.Sass,
      tagNames.API,
      tagNames.Redux,
    ],
    links: [
      {
        name: IconButtons.Figma,
        link: "https://www.figma.com/file/ZvTvLQcGVRZ1WK3TvOhoPE/WeatherApp?node-id=153%3A1517&t=cfZoUY3MYBtGm4dv-1",
      },
      {
        name: IconButtons.Github,
        link: "https://github.com/RodoPZ/Weather-app",
      },
      {
        name: IconButtons.Web,
        link: "https://rodopz-weatherapp.netlify.app/London",
      },
    ],
  },
  {
    name: { En: "Petgram", Es: null },
    text: {
      En: `Instagram clone web app for pets with which I learned to use technologies such as graphql queries, JSON web tokens, Styled-components and session persistence, as well as practicing my React skills.
      Developed using React, bundled using Webpack and deployed to Github Pages.
      Uses a GraphQL API managed with Apollo Client and the session and data are persistent.`,
      Es: null,
    },
    tags: [tagNames.React, tagNames.Sass, tagNames.Redux],
    links: [
      {
        name: IconButtons.Figma,
        link: null,
      },
      {
        name: IconButtons.Github,
        link: "https://github.com/RodoPZ/Petgram",
      },
      {
        name: IconButtons.Web,
        link: "https://rodopz.github.io/Petgram/",
      },
    ],
  },
  {
    name: { En: "MovieAPI", Es: null },
    text: {
      En: ``,
      Es: null,
    },
    tags: [tagNames.Figma, tagNames.TypeScript],
    links: [
      {
        name: IconButtons.Figma,
        link: "https://www.figma.com/file/MoxZGZpt0YgcA4Jy6h5Y0q/MovieAPI?node-id=232%3A785&t=bHedq500i0zuArBt-1",
      },
      {
        name: IconButtons.Github,
        link: "https://github.com/RodoPZ/MovieAPI",
      },
      {
        name: IconButtons.Web,
        link: "https://rodopz-movieapi.netlify.app/",
      },
    ],
  },
  {
    name: { En: "CashFlow", Es: null },
    text: {
      En: ``,
      Es: null,
    },
    tags: [tagNames.Vue, tagNames.TypeScript],
    links: [
      {
        name: IconButtons.Figma,
        link: "null",
      },
      {
        name: IconButtons.Github,
        link: "https://github.com/RodoPZ/CashFlow",
      },
      {
        name: IconButtons.Web,
        link: "https://rodopz-cashflow.netlify.app/",
      },
    ],
  },
  {
    name: { En: "TODO React", Es: null },
    text: {
      En: ``,
      Es: null,
    },
    tags: [tagNames.React],
    links: [
      {
        name: IconButtons.Figma,
        link: "null",
      },
      {
        name: IconButtons.Github,
        link: "https://github.com/RodoPZ/SPA-RickAndMorty",
      },
      {
        name: IconButtons.Web,
        link: "https://rodopz.github.io/SPA-RickAndMorty/",
      },
    ],
  },
  {
    name: { En: "Platzi-conf", Es: null },
    text: {
      En: ``,
      Es: null,
    },
    tags: [tagNames.Boostrap, tagNames.Sass],
    links: [
      {
        name: IconButtons.Figma,
        link: "null",
      },
      {
        name: IconButtons.Github,
        link: "https://github.com/RodoPZ/Platzi-conf",
      },
      {
        name: IconButtons.Web,
        link: "https://rodopz.github.io/Platzi-conf/",
      },
    ],
  },
  {
    name: { En: "Grid css", Es: null },
    text: {
      En: ``,
      Es: null,
    },
    tags: [tagNames.Boostrap, tagNames.Sass],
    links: [
      {
        name: IconButtons.Figma,
        link: "null",
      },
      {
        name: IconButtons.Github,
        link: "https://github.com/RodoPZ/grid-css-example",
      },
      {
        name: IconButtons.Web,
        link: "https://rodopz.github.io/grid-css-example/",
      },
    ],
  },
];
