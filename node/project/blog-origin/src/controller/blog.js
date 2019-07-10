const getList = (author, keyword) => {
  // 先返回假数据
  return [
    {
      id: 1,
      title: "标题-1",
      content: "内容-1",
      createTime: 1562763029585,
      author: "zhangqi"
    },
    {
      id: 2,
      title: "标题-2",
      content: "内容-2",
      createTime: 1562763029585,
      author: "zhangqi"
    },
    {
      id: 3,
      title: "标题-3",
      content: "内容-3",
      createTime: 1562763029585,
      author: "zhangqi"
    }
  ];
};

const getDetail = id => {
  return [
    {
      id: 1,
      title: "标题-1",
      content: "内容-1",
      createTime: 1562763029585,
      author: "zhangqi"
    }
  ];
};

const newBlog = (blogData = {}) => {
  return {
    id: 3 // 表示新建博客插入到数据表里的id
  };
};

const updateBlog = (id, blogData = {}) => {
  return true;
};

const delBlog = id => {
  return true;
};
module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
};
