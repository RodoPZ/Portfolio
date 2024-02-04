import { ICON_BUTTONS } from "@/models/IconButton.model";
import { TAG_NAMES } from "@/models/tags.model";
import i18n from "@/plugins/i18n";
import { computed } from "vue";

const { t } = i18n.global as any;
export const projectList = computed(() => [
  {
    title: t("landing.projects.tt.title"),
    emoji: "👨‍🏫🧑‍🎓",
    description: t("landing.projects.tt.description"),
    tags: [
      TAG_NAMES.FLUTTER,
      TAG_NAMES.DART,
      TAG_NAMES.PYTHON,
      TAG_NAMES.FIREBASE,
    ],
    color: "#47faff",
    darkColor: "#004278",
    links: [
      { name: ICON_BUTTONS.GITHUB, link: "https://github.com/RodoPZ/TT2-App" },
      {
        name: ICON_BUTTONS.LINK,
        link: "https://drive.google.com/file/d/1upI9DDdjpoGhQ_D8L4jTMq09jLeLlDaJ/view?pli=1",
      },
    ],
  },
  {
    title: t("landing.projects.portfolio.title"),
    emoji: "💼🖥️",
    description: t("landing.projects.portfolio.description"),
    tags: [
      TAG_NAMES.VUE,
      TAG_NAMES.TYPESCRIPT,
      TAG_NAMES.SASS,
      TAG_NAMES.BOOTSTRAP,
    ],
    color: "#ffde2a",
    darkColor: "#453e00",
    links: [
      {
        name: ICON_BUTTONS.FIGMA,
        link: "https://www.figma.com/file/ZjCFBtm0rJQJZPk1BGDG5p/Portfolio?type=design&node-id=43-91&mode=design",
      },
      {
        name: ICON_BUTTONS.GITHUB,
        link: "https://github.com/RodoPZ/Portfolio",
      },
      { name: ICON_BUTTONS.WEB, link: null },
    ],
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
    darkColor: "#01426a",
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
  },
  {
    title: t("landing.projects.petgram.title"),
    emoji: "🐈🐈‍⬛",
    description: t("landing.projects.petgram.description"),
    tags: [TAG_NAMES.REACT, TAG_NAMES.SASS, TAG_NAMES.REDUX],
    color: "#ff11d9",
    darkColor: "#7e006a",
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
  },
  {
    title: t("landing.projects.movieApi.title"),
    emoji: "🎞️🍿",
    description: t("landing.projects.movieApi.description"),
    tags: [TAG_NAMES.TYPESCRIPT],
    color: "#e0fbfc",
    darkColor: "#313131",
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
  },
  {
    title: t("landing.projects.cashflow.title"),
    emoji: "💰💸",
    description: t("landing.projects.cashflow.description"),
    tags: [TAG_NAMES.VUE, TAG_NAMES.TYPESCRIPT],
    color: "#04b500",
    darkColor: "#024700",
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
  },
  {
    title: t("landing.projects.todo_react.title"),
    emoji: "📝📋",
    description: t("landing.projects.todo_react.description"),
    tags: [TAG_NAMES.REACT],
    color: "#ffda95",
    darkColor: "#443926",
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
  },
  {
    title: t("landing.projects.platzi_conf.title"),
    emoji: "🏖️💚",
    description: t("landing.projects.platzi_conf.description"),
    tags: [TAG_NAMES.BOOTSTRAP, TAG_NAMES.SASS],
    color: "#82ad36",
    darkColor: "#2b4400",
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
  },
  {
    title: t("landing.projects.farm_defence.title"),
    emoji: "🐮💀",
    description: t("landing.projects.farm_defence.description"),
    tags: [TAG_NAMES.GODOT],
    color: "#6dabff",
    darkColor: "#003a89",
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
  },
  {
    title: t("landing.projects.clicker_miner.title"),
    emoji: "⛏️🧨",
    description: t("landing.projects.clicker_miner.description"),
    tags: [TAG_NAMES.GODOT],
    color: "#b4ff94",
    darkColor: "#174404",
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
  },
  {
    title: t("landing.projects.lacking_light.title"),
    emoji: "🔦👻",
    description: t("landing.projects.lacking_light.description"),
    tags: [TAG_NAMES.GODOT],
    color: "#f6ffc6",
    darkColor: "#393e21",
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
  },
]);
