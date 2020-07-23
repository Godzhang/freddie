interface PageInfo {
  title: string;
}
type Page = "home" | "about" | "contact";

const x: Record<Page, PageInfo> = {
  about: { title: "about" },
  home: { title: "home" },
  contact: { title: "contact" },
};
