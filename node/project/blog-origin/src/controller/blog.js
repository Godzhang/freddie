const xss = require("xss");
const { exec, escape } = require("../db/mysql");

const getList = (author, keyword) => {
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
  return exec(sql);
};

const getDetail = id => {
  let sql = `select * from blogs where id=${id};`;
  return exec(sql).then(rows => {
    return rows[0];
  });
};

const newBlog = (blogData = {}) => {
  let { title, content, author } = blogData;
  title = escape(xss(title));
  content = escape(xss(content));
  author = escape(author);
  const createtime = Date.now();

  let sql = `insert into blogs (title, content, createtime, author) values (${title}, ${content}, ${createtime}, ${author})`;

  return exec(sql).then(res => {
    return { id: res.insertId };
  });
};

const updateBlog = (id, blogData = {}) => {
  let title = escape(xss(blogData.title));
  let content = escape(xss(blogData.content));

  let sql = `update blogs set title='${title}', content='${content}' where id='${id}';`;

  return exec(sql).then(updateData => {
    if (updateData.affectedRows > 0) {
      return true;
    }
    return false;
  });
};

const delBlog = (id, author) => {
  let sql = `delete from blogs where id='${id}' and author='${author}';`;

  return exec(sql).then(delData => {
    if (delData.affectedRows > 0) {
      return true;
    }
    return false;
  });
};
module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
};
