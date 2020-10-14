export interface NavStructure {
  title: string;
  key?: string | number;
  children?: NavStructure[];
  subnav?: NavStructure[];
}

const topicNav = {
  title: "topic",
  children: [
    { title: "All" },
    { title: "Politics" },
    { title: "Economy" },
    { title: "Crime" },
    { title: "Art" },
  ],
};
const locationNav = {
  title: "location",
  children: [
    { title: "All" },
    { title: "China" },
    { title: "America" },
    { title: "Canada" },
  ],
};
const sourceNav = {
  title: "source",
  children: [
    { title: "All" },
    { title: "web" },
    { title: "twitter" },
    { title: "facebook" },
  ],
};

export const mainNav = [
  {
    title: "Latest news",
    children: [
      { title: "Topic" },
      { title: "Location" },
      {
        title: "Source",
        children: [
          { title: "Web" },
          { title: "Twitter" },
          { title: "Facebook" },
        ],
      },
    ],
    subnav: [
      { title: "All" },
      { ...topicNav },
      { ...locationNav },
      { ...sourceNav },
    ],
  },
  {
    title: "Hot news",
    children: [{ title: "Topic" }, { title: "Location" }],
    subnav: [{ title: "All" }, { ...topicNav }, { ...locationNav }],
  },
  {
    title: "Trending",
    children: [{ title: "Topic" }, { title: "Location" }],
    subnav: [{ title: "All" }, { ...topicNav }, { ...locationNav }],
  },
];

export const nav = [
  {
    title: "My Subscribe",
    subnav: [
      { title: "All" },
      { title: "Hot news" },
      { title: "Trending" },
      { title: "Latest news" },
    ],
  },
  ...mainNav,
];
