const xss = require("xss");
const { exec, escape } = require("../db/mysql");

const getList = async (author, keyword) => {
  author = escape(author);
  keyword = escape("%" + keyword + "%");
  let sql = `select * from blogs where 1=1 `;
  if (author != "''") {
    sql += `and author=${author} `;
  }
  if (keyword) {
    sql += `and title like ${keyword}`;
  }
  sql += `order by createtime desc;`;

  // 返回promise
  return await exec(sql);
};

const getDetail = async id => {
  let sql = `select * from blogs where id=${id};`;
  const rows = await exec(sql);
  return rows[0];
};

const newBlog = async (blogData = {}) => {
  let { title, content, author } = blogData;
  title = escape(xss(title));
  content = escape(xss(content));
  author = escape(author);
  const createtime = Date.now();

  let sql = `insert into blogs (title, content, createtime, author) values (${title}, ${content}, ${createtime}, ${author})`;

  const result = await exec(sql);
  return { id: result.insertId };
};

const updateBlog = async (id, blogData = {}) => {
  let title = escape(xss(blogData.title));
  let content = escape(xss(blogData.content));

  let sql = `update blogs set title=${title}, content=${content} where id='${id}';`;

  const updateData = await exec(sql);
  return updateData.affectedRows > 0;
};

const delBlog = async (id, author) => {
  let sql = `delete from blogs where id='${id}' and author='${author}';`;

  const delData = await exec(sql);
  return delData.affectedRows > 0;
};
module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
};
