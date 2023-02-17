export enum tagNames {
  All = "All",
  Vue = "Vue",
  React = "React",
  Firebase = "Firebase",
  Figma = "Figma",
  Redux = "Redux",
  TypeScript = "TypeScript",
  Sass = "Sass",
  API = "API REST",
  GraphQL = "GraphQL API",
  Boostrap = "Boostrap",
}

export const tags = {
  [tagNames.All]: {
    backgroundColor: "#293241",
    color: "#EDF2F4",
    text: tagNames.All,
  },
  [tagNames.Vue]: {
    backgroundColor: "#3EAF7C",
    color: "#000000",
    text: tagNames.Vue,
  },
  [tagNames.React]: {
    backgroundColor: "#61DBFB",
    color: "#000000",
    text: tagNames.React,
  },
  [tagNames.Firebase]: {
    backgroundColor: "#FCCA3F",
    color: "#000000",
    text: tagNames.Firebase,
  },
  [tagNames.Figma]: {
    backgroundColor: "#F5744D",
    color: "#000000",
    text: tagNames.Figma,
  },
  [tagNames.Redux]: {
    backgroundColor: "#663EA8",
    color: "#FFFFFF",
    text: tagNames.Redux,
  },
  [tagNames.TypeScript]: {
    backgroundColor: "#6CA1DA",
    color: "#000000",
    text: tagNames.TypeScript,
  },
  [tagNames.Sass]: {
    backgroundColor: "#D279A3",
    color: "#000000",
    text: tagNames.Sass,
  },
  [tagNames.API]: {
    backgroundColor: "#79D29D",
    color: "#000000",
    text: tagNames.API,
  },
  [tagNames.GraphQL]: {
    backgroundColor: "#971C6E",
    color: "#FFFFFF",
    text: tagNames.GraphQL,
  },
  [tagNames.Boostrap]: {
    backgroundColor: "#7802DE",
    color: "#FFFFFF",
    text: tagNames.Boostrap,
  },
};
