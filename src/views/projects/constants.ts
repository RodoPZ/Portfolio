import { ICON_BUTTONS } from "@/models/IconButton.model";
import { TAG_NAMES } from "@/models/tags.model";
import i18n from "@/plugins/i18n";
const { t } = i18n.global;

export const webProjectList = [
  {
    title: t("landing.projects.portfolio.title"),
    emoji: "💼🖥️",
    description: t("landing.projects.portfolio.description"),
    tags: [TAG_NAMES.VUE],
    color: "#ffde2a",
    links: [
      {
        name: ICON_BUTTONS.FIGMA,
        link: "https://pictogrammers.com/library/mdi/",
      },
      { name: ICON_BUTTONS.GITHUB, link: null },
      { name: ICON_BUTTONS.WEB, link: null },
    ],
    backgroud_image: "src/assets/images/portfolio.png",
  },
  {
    title: t("landing.projects.weather_app.title"),
    emoji: "🌥️🌡️",
    description: t("landing.projects.weather_app.description"),
    tags: [
      TAG_NAMES.REACT,
      TAG_NAMES.TYPESCRIPT,
      TAG_NAMES.SASS,
      TAG_NAMES.API,
      TAG_NAMES.REDUX,
    ],
    color: "#83c9f4",
    links: [
      {
        name: ICON_BUTTONS.FIGMA,
        link: "https://www.figma.com/file/ZvTvLQcGVRZ1WK3TvOhoPE/WeatherApp?node-id=153%3A1517&t=cfZoUY3MYBtGm4dv-1",
      },
      {
        name: ICON_BUTTONS.GITHUB,
        link: "https://GITHUB.com/RodoPZ/Weather-app",
      },
      {
        name: ICON_BUTTONS.WEB,
        link: "https://rodopz-weatherapp.netlify.app/London",
      },
    ],
    backgroud_image: "src/assets/images/weatherApp.png",
  },
  {
    title: t("landing.projects.petgram.title"),
    emoji: "🐈🐈‍⬛",
    description: t("landing.projects.petgram.description"),
    tags: [TAG_NAMES.REACT, TAG_NAMES.SASS, TAG_NAMES.REDUX],
    color: "#ff11d9",
    links: [
      {
        name: ICON_BUTTONS.FIGMA,
        link: null,
      },
      {
        name: ICON_BUTTONS.GITHUB,
        link: "https://GITHUB.com/RodoPZ/Petgram",
      },
      {
        name: ICON_BUTTONS.WEB,
        link: "https://rodopz.GITHUB.io/Petgram/",
      },
    ],
    backgroud_image: "src/assets/images/petgram.png",
  },
  {
    title: t("landing.projects.movieApi.title"),
    emoji: "🎞️🍿",
    description: t("landing.projects.movieApi.description"),
    tags: [TAG_NAMES.TYPESCRIPT],
    color: "#e0fbfc",
    links: [
      {
        name: ICON_BUTTONS.FIGMA,
        link: "https://www.figma.com/file/MoxZGZpt0YgcA4Jy6h5Y0q/MovieAPI?node-id=232%3A785&t=bHedq500i0zuArBt-1",
      },
      {
        name: ICON_BUTTONS.GITHUB,
        link: "https://GITHUB.com/RodoPZ/MovieAPI",
      },
      {
        name: ICON_BUTTONS.WEB,
        link: "https://rodopz-movieapi.netlify.app/",
      },
    ],
    backgroud_image: "src/assets/images/movieApi.png",
  },
  {
    title: t("landing.projects.cashflow.title"),
    emoji: "💰💸",
    description: t("landing.projects.cashflow.description"),
    tags: [TAG_NAMES.VUE, TAG_NAMES.TYPESCRIPT],
    color: "#04b500",
    links: [
      {
        name: ICON_BUTTONS.FIGMA,
        link: null,
      },
      {
        name: ICON_BUTTONS.GITHUB,
        link: "https://GITHUB.com/RodoPZ/CashFlow",
      },
      {
        name: ICON_BUTTONS.WEB,
        link: "https://rodopz-cashflow.netlify.app/",
      },
    ],
    backgroud_image: "src/assets/images/cashflow.png",
  },
  {
    title: t("landing.projects.todo_react.title"),
    emoji: "📝📋",
    description: t("landing.projects.todo_react.description"),
    tags: [TAG_NAMES.REACT],
    color: "#ffda95",
    links: [
      {
        name: ICON_BUTTONS.FIGMA,
        link: null,
      },
      {
        name: ICON_BUTTONS.GITHUB,
        link: "https://GITHUB.com/RodoPZ/TODO_React",
      },
      {
        name: ICON_BUTTONS.WEB,
        link: "https://rodopz.GITHUB.io/TODO_React/#/",
      },
    ],
    backgroud_image: "src/assets/images/todoReact.png",
  },
  {
    title: t("landing.projects.platzi_conf.title"),
    emoji: "🏖️💚",
    description: t("landing.projects.platzi_conf.description"),
    tags: [TAG_NAMES.BOOTSTRAP, TAG_NAMES.SASS],
    color: "#82ad36",
    links: [
      {
        name: ICON_BUTTONS.FIGMA,
        link: null,
      },
      {
        name: ICON_BUTTONS.GITHUB,
        link: "https://GITHUB.com/RodoPZ/Platzi-conf",
      },
      {
        name: ICON_BUTTONS.WEB,
        link: "https://rodopz.GITHUB.io/Platzi-conf/",
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
    tags: [TAG_NAMES.GODOT],
    color: "#6dabff",
    links: [
      {
        name: ICON_BUTTONS.FIGMA,
        link: null,
      },
      {
        name: ICON_BUTTONS.GITHUB,
        link: "https://GITHUB.com/RodoPZ/Farm-Defense",
      },
      {
        name: ICON_BUTTONS.WEB,
        link: "https://croobat.itch.io/farm-defense",
      },
    ],
    backgroud_image: "src/assets/images/farmDefense.png",
  },
  {
    title: t("landing.projects.clicker_miner.title"),
    emoji: "⛏️🧨",
    description: t("landing.projects.clicker_miner.description"),
    tags: [TAG_NAMES.GODOT],
    color: "#b4ff94",
    links: [
      {
        name: ICON_BUTTONS.FIGMA,
        link: null,
      },
      {
        name: ICON_BUTTONS.GITHUB,
        link: "https://GITHUB.com/RodoPZ/ClickerMiner",
      },
      {
        name: ICON_BUTTONS.WEB,
        link: "https://croobat.itch.io/clicker-miner",
      },
    ],
    backgroud_image: "src/assets/images/clickerMiner.png",
  },
  {
    title: t("landing.projects.lacking_light.title"),
    emoji: "🔦👻",
    description: t("landing.projects.lacking_light.description"),
    tags: [TAG_NAMES.GODOT],
    color: "#f6ffc6",
    links: [
      {
        name: ICON_BUTTONS.FIGMA,
        link: null,
      },
      {
        name: ICON_BUTTONS.GITHUB,
        link: "https://GITHUB.com/croobat/lacking-light",
      },
      {
        name: ICON_BUTTONS.WEB,
        link: "https://croobat.itch.io/lacking-light",
      },
    ],
    backgroud_image: "src/assets/images/lackingLight.png",
  },
];

export const ALL_CATEGORIES = [webProjectList, videogamesProjectList];
