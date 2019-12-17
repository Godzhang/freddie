declare namespace umdLib {
  const version: string;
  function doSomething(): void;
}

// 专为 umd库 添加的语句
export as namespace umdLib;

export = umdLib;
