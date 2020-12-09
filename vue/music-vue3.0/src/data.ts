export const searchHistory = ["大炮", "二炮"];

export interface SearchHotProp {
  searchWord: string;
  content: string;
  iconUrl: string;
  score: number;
}
export const searchHot: SearchHotProp[] = [
  {
    searchWord: "官方回答",
    content: "搜索内容",
    iconUrl: "",
    score: 100,
  },
];

export interface SearchListProp {
  id: string;
  name: string;
  artists: { name: string }[];
  album: { name: string };
}
export const searchList: SearchListProp[] = [
  {
    id: "1",
    name: "搜索歌曲标题",
    artists: [{ name: "artists" }],
    album: { name: "album" },
  },
];

export interface SearchSuggest {
  keyword: string;
}
export const searchSuggest: SearchSuggest[] = [{ keyword: "suggest 内容" }];
