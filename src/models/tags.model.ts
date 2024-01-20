export enum TAG_NAMES {
  All = "All",
  VUE = "Vue",
  REACT = "React",
  FIREBASE = "Firebase",
  FIGMA = "Figma",
  REDUX = "Redux",
  TYPESCRIPT = "TypeScript",
  SASS = "Sass",
  API = "API REST",
  // GraphQL = "GraphQL API",
  BOOTSTRAP = "Boostrap",
  GODOT = "Godot",
}

export const tags = {
  [TAG_NAMES.All]: {
    backgroundColor: "#293241",
    color: "#EDF2F4",
    text: TAG_NAMES.All,
  },
  [TAG_NAMES.VUE]: {
    backgroundColor: "#3EAF7C",
    color: "#000000",
    text: TAG_NAMES.VUE,
  },
  [TAG_NAMES.REACT]: {
    backgroundColor: "#61DBFB",
    color: "#000000",
    text: TAG_NAMES.REACT,
  },
  [TAG_NAMES.FIREBASE]: {
    backgroundColor: "#FCCA3F",
    color: "#000000",
    text: TAG_NAMES.FIREBASE,
  },
  [TAG_NAMES.FIGMA]: {
    backgroundColor: "#F5744D",
    color: "#000000",
    text: TAG_NAMES.FIGMA,
  },
  [TAG_NAMES.REDUX]: {
    backgroundColor: "#663EA8",
    color: "#FFFFFF",
    text: TAG_NAMES.REDUX,
  },
  [TAG_NAMES.TYPESCRIPT]: {
    backgroundColor: "#6CA1DA",
    color: "#000000",
    text: TAG_NAMES.TYPESCRIPT,
  },
  [TAG_NAMES.SASS]: {
    backgroundColor: "#D279A3",
    color: "#000000",
    text: TAG_NAMES.SASS,
  },
  [TAG_NAMES.API]: {
    backgroundColor: "#79D29D",
    color: "#000000",
    text: TAG_NAMES.API,
  },
  // [TAG_NAMES.GraphQL]: {
  //   backgroundColor: "#971C6E",
  //   color: "#FFFFFF",
  //   text: TAG_NAMES.GraphQL,
  // },
  [TAG_NAMES.BOOTSTRAP]: {
    backgroundColor: "#7802DE",
    color: "#FFFFFF",
    text: TAG_NAMES.BOOTSTRAP,
  },
  [TAG_NAMES.GODOT]: {
    backgroundColor: "#478CBF",
    color: "#000",
    text: TAG_NAMES.GODOT,
  },
};
