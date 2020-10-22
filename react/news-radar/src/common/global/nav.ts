import { DataNode } from "antd/lib/tree";

export interface NavStructure {
  title: string;
  key?: string | number;
  children?: NavStructure[];
  // children?: {
  //   title: string;
  //   key?: string | number;
  //   children?: { title: string; key?: string | number }[];
  // }[];
  // subnav?: NavStructure[];
}

export const mainNav: NavStructure[] = [
  {
    title: "Latest news",
    children: [
      { title: "Topic", children: [] },
      { title: "Location", children: [] },
      {
        title: "Source",
        children: [
          { title: "Web", children: [] },
          { title: "Twitter", children: [] },
          { title: "Facebook", children: [] },
        ],
      },
    ],
  },
  {
    title: "Hot news",
    children: [
      { title: "Topic", children: [] },
      { title: "Location", children: [] },
    ],
  },
  {
    title: "Trending",
    children: [
      { title: "Topic", children: [] },
      { title: "Location", children: [] },
    ],
  },
];

export const nav = [
  {
    title: "My Subscribe",
  },
  ...mainNav,
];

export interface SubNavStructure {
  title: string;
  children?: SubNavStructure[];
}
const topicNav = {
  title: "Topic",
};
const locationNav = {
  title: "Location",
};
const sourceNav = {
  title: "Source",
  children: [
    { title: "All" },
    { title: "Web" },
    { title: "Twitter" },
    { title: "Facebook" },
  ],
};

export interface SubNavList {
  [key: string]: SubNavStructure[];
}
export const subNav: SubNavList = {
  "/": [
    { title: "All" },
    { ...topicNav },
    { ...locationNav },
    { ...sourceNav },
  ],
  "/sub/0": [
    { title: "All" },
    { ...topicNav },
    { ...locationNav },
    { ...sourceNav },
  ],
  "/sub/1": [{ title: "All" }, { ...topicNav }, { ...locationNav }],
  "/sub/2": [{ title: "All" }, { ...topicNav }, { ...locationNav }],
};
