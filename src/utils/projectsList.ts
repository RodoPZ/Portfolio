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
];
