import { IconButtons } from "@/models/IconButton.model";
import { tagNames } from "@/models/tags.model";
import i18n from "@/plugins/i18n";
const { t } = i18n.global;

export const webProjectList = [
  {
    title: t("landing.projects.portfolio.title"),
    emoji: "💼🖥️",
    description: t("landing.projects.portfolio.description"),
    tags: [tagNames.Vue],
    color: "#ffde2a",
    links: [
      {
        name: IconButtons.Figma,
        link: "https://pictogrammers.com/library/mdi/",
      },
      { name: IconButtons.Github, link: null },
      { name: IconButtons.Web, link: null },
    ],
    backgroud_image: "src/assets/images/portfolio.png",
  },
  {
    title: t("landing.projects.weather_app.title"),
    emoji: "🌥️🌡️",
    description: t("landing.projects.weather_app.description"),
    tags: [
      tagNames.React,
      tagNames.TypeScript,
      tagNames.Sass,
      tagNames.API,
      tagNames.Redux,
    ],
    color: "#83c9f4",
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
    backgroud_image: "src/assets/images/weatherApp.png",
  },
  {
    title: t("landing.projects.petgram.title"),
    emoji: "🐈🐈‍⬛",
    description: t("landing.projects.petgram.description"),
    tags: [tagNames.React, tagNames.Sass, tagNames.Redux],
    color: "#ff11d9",
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
    backgroud_image: "src/assets/images/petgram.png",
  },
  {
    title: t("landing.projects.movieApi.title"),
    emoji: "🎞️🍿",
    description: t("landing.projects.movieApi.description"),
    tags: [tagNames.TypeScript],
    color: "#e0fbfc",
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
    backgroud_image: "src/assets/images/movieApi.png",
  },
  {
    title: t("landing.projects.cashflow.title"),
    emoji: "💰💸",
    description: t("landing.projects.cashflow.description"),
    tags: [tagNames.Vue, tagNames.TypeScript],
    color: "#04b500",
    links: [
      {
        name: IconButtons.Figma,
        link: null,
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
    backgroud_image: "src/assets/images/cashflow.png",
  },
  {
    title: t("landing.projects.todo_react.title"),
    emoji: "📝📋",
    description: t("landing.projects.todo_react.description"),
    tags: [tagNames.React],
    color: "#ffda95",
    links: [
      {
        name: IconButtons.Figma,
        link: null,
      },
      {
        name: IconButtons.Github,
        link: "https://github.com/RodoPZ/TODO_React",
      },
      {
        name: IconButtons.Web,
        link: "https://rodopz.github.io/TODO_React/#/",
      },
    ],
    backgroud_image: "src/assets/images/todoReact.png",
  },
  {
    title: t("landing.projects.platzi_conf.title"),
    emoji: "🏖️💚",
    description: t("landing.projects.platzi_conf.description"),
    tags: [tagNames.Boostrap, tagNames.Sass],
    color: "#82ad36",
    links: [
      {
        name: IconButtons.Figma,
        link: null,
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
    backgroud_image: "src/assets/images/platziConf.png",
  },
];

export const videogamesProjectList = [
  {
    title: t("landing.projects.farm_defence.title"),
    emoji: "🐮💀",
    description: t("landing.projects.farm_defence.description"),
    tags: [tagNames.Godot],
    color: "#6dabff",
    links: [
      {
        name: IconButtons.Figma,
        link: null,
      },
      {
        name: IconButtons.Github,
        link: "https://github.com/RodoPZ/Farm-Defense",
      },
      {
        name: IconButtons.Web,
        link: "https://croobat.itch.io/farm-defense",
      },
    ],
    backgroud_image: "src/assets/images/farmDefense.png",
  },
  {
    title: t("landing.projects.clicker_miner.title"),
    emoji: "⛏️🧨",
    description: t("landing.projects.clicker_miner.description"),
    tags: [tagNames.Godot],
    color: "#b4ff94",
    links: [
      {
        name: IconButtons.Figma,
        link: null,
      },
      {
        name: IconButtons.Github,
        link: "https://github.com/RodoPZ/ClickerMiner",
      },
      {
        name: IconButtons.Web,
        link: "https://croobat.itch.io/clicker-miner",
      },
    ],
    backgroud_image: "src/assets/images/clickerMiner.png",
  },
  {
    title: t("landing.projects.lacking_light.title"),
    emoji: "🔦👻",
    description: t("landing.projects.lacking_light.description"),
    tags: [tagNames.Godot],
    color: "#f6ffc6",
    links: [
      {
        name: IconButtons.Figma,
        link: null,
      },
      {
        name: IconButtons.Github,
        link: "https://github.com/croobat/lacking-light",
      },
      {
        name: IconButtons.Web,
        link: "https://croobat.itch.io/lacking-light",
      },
    ],
    backgroud_image: "src/assets/images/lackingLight.png",
  },
];

export const ALL_CATEGORIES = [webProjectList, videogamesProjectList];
