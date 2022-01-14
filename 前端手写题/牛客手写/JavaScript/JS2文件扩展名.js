const _getExFilename = (filename) => {
  // 补全代码
  const res = filename.split(".");
  return "." + res[1];
};
console.log(_getExFilename("problem.xml") == ".xml");
