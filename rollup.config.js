import pkg from "./package.json";

const env = process.env.NODE_ENV;

const file = {
  esm: pkg.module,
  umd: pkg.main
};
export default {
  input: "src/visitor.js",
  output: [
    {
      file: file[env],
      format: env
    }
  ]
};
