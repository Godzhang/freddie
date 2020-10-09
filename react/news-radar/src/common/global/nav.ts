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
  },
  {
    name: "Hot news",
    children: [{ name: "Topic" }, { name: "Location" }],
  },
  {
    name: "Trending",
    children: [{ name: "Topic" }, { name: "Location" }],
  },
];

export const nav = [
  {
    name: "My Subscribe",
  },
  ...mainNav,
];
