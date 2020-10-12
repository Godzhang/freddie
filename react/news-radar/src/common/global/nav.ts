const topicNav = {
  name: "topic",
  children: [
    { name: "All" },
    { name: "Politics" },
    { name: "Economy" },
    { name: "Crime" },
    { name: "Art" },
  ],
};
const locationNav = {
  name: "location",
  children: [
    { name: "All" },
    { name: "China" },
    { name: "America" },
    { name: "Canada" },
  ],
};
const sourceNav = {
  name: "source",
  children: [
    { name: "All" },
    { name: "web" },
    { name: "twitter" },
    { name: "facebook" },
  ],
};

export const mainNav = [
  {
    name: "Latest news",
    children: [
      { name: "Topic" },
      { name: "Location" },
      {
        name: "Source",
        children: [{ name: "Web" }, { name: "Twitter" }, { name: "Facebook" }],
      },
    ],
    subnav: [
      { name: "All" },
      { ...topicNav },
      { ...locationNav },
      { ...sourceNav },
    ],
  },
  {
    name: "Hot news",
    children: [{ name: "Topic" }, { name: "Location" }],
    subnav: [{ name: "All" }, { ...topicNav }, { ...locationNav }],
  },
  {
    name: "Trending",
    children: [{ name: "Topic" }, { name: "Location" }],
    subnav: [{ name: "All" }, { ...topicNav }, { ...locationNav }],
  },
];

export const nav = [
  {
    name: "My Subscribe",
    subnav: [
      { name: "All" },
      { name: "Hot news" },
      { name: "Trending" },
      { name: "Latest news" },
    ],
  },
  ...mainNav,
];
