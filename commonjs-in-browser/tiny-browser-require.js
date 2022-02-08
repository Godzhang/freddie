function require(p) {
  let path = require.resolve(p);
  let mod = require.modules[path];
  if (!mod) throw new Error('faild to rquire "' + p + '"');
  if (!mod.exports) {
    mod.exports = {};
    mod.call(mod.exports, mod, mod.exports, require.relative(path));
  }
  return mod.exports;
}

require.modules = {};

require.resolve = function (path) {
  let orig = path;
  let reg = path + ".js";
  let index = path + "/index.js";
  return (
    (require.modules[reg] && reg) || (require.modules[index] && index) || orig
  );
};

require.register = function (path, fn) {
  require.modules[path] = fn;
};

require.relative = function (parent) {
  return function (p) {
    if ("." !== p.charAt(0)) return require(p);
    let path = parent.split("/");
    let segs = p.split("/");
    path.pop();
    for (let i = 0; i < segs.length; i++) {
      let seg = segs[i];
      if (".." === seg) {
        path.pop();
      } else if ("." !== seg) {
        path.push(seg);
      }
    }
    return require(path.join("/"));
  };
};
