import Http from "./http";

export const getTestData = () => {
  return Http.get("/repos/octokit/octokit.rb");
};
