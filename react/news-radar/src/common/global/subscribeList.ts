export type SubItemStructure = {
  value: string;
  disabled?: boolean;
  key: string;
};
export type SubStructure = SubItemStructure[];

export interface SubScribeStructure {
  title: string;
  disabled?: boolean;
  children?: SubScribeStructure[];
  sub?: SubStructure;
}

const subscribeList: SubScribeStructure[] = [
  {
    title: "Latest news all",
    disabled: false,
    children: [
      {
        title: "Topic all",
        disabled: false,
        sub: [],
      },
      {
        title: "Location all",
        disabled: false,
        sub: [],
      },
      {
        title: "Source all",
        disabled: false,
        children: [
          {
            title: "Web",
            disabled: false,
            sub: [],
          },
        ],
      },
    ],
  },
  {
    title: "Hot news all",
    disabled: false,
    children: [
      {
        title: "Topic all",
        disabled: false,
        sub: [],
      },
      {
        title: "Location all",
        disabled: false,
        sub: [],
      },
    ],
  },
  {
    title: "Trending all",
    disabled: false,
    children: [
      {
        title: "Topic all",
        disabled: false,
        sub: [],
      },
      {
        title: "Location all",
        disabled: false,
        sub: [],
      },
    ],
  },
];

export default subscribeList;
