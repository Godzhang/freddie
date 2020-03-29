import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "./src/main.js",
  output: {
    file: "./dist/bundle.cjs.js",
    format: "iife",
    name: "bundleName",
    globals: {
      lodash: "_"
    }
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: "node_modules/**"
    })
  ],
  external: ["lodash"]
};
