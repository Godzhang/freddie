// 这段代码可以理解为是对iscroll类的扩展
// 这里的参数为iscroll类
export const extendSticky = iScroll => {
  let m = Math;
  // 这里是为了兼容性配置的浏览器css前缀，网络上有很多写法呢
  let vendor = /webkit/i.test(navigator.appVersion)
      ? "webkit"
      : /firefox/i.test(navigator.userAgent)
      ? "Moz"
      : "opera" in window
      ? "O"
      : "",
    has3d = "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix(),
    trnOpen = "translate" + (has3d ? "3d(" : "("),
    trnClose = has3d ? ",0)" : ")";

  /**
   * 这里开始拓展iscroll类
   * @param selector 需要sticky的对象集合，包含元素和sticky的位置
   * @return { iScrollStickyHeaders }
   */
  // 在iscroll原型上添加 enableStickyHeaders 方法
  iScroll.prototype.enableStickyHeaders = function(selector) {
    return new iScrollStickyHeaders(this, selector); // 拓展方法采用新的类并传参
  };

  // 参数，iscroll实例，需要sticky的元素集合
  let iScrollStickyHeaders = function(iscroll, selector) {
    if (!iscroll.options.useTransform) {
      return;
    }
    this.iscroll = iscroll;
    this.selector = selector;
    this.initialize(); // 初始化
  };
  iScrollStickyHeaders.prototype = {
    headers: [], // 存储需要sticky的对象集合
    initialize() {
      let that = this;
      this._augment();
      this.iscroll.on("refresh", function() {
        that._refresh(); // 每次iscroll刷新，sticky方法也刷新
      });
      this.iscroll.refresh();
    },
    _refresh() {
      // 初始化或者刷新
      let elms = this.selector;
      this.headers = [
        // 深拷贝对象集合
        ...elms
      ];
      // 此处对象集合的格式为 { el: 元素, top: 需要sticky的位置 }
      // 此处可以根据习惯和喜欢自行定义格式和逻辑代码
      this._translate(0, 0); // 初始化
    },
    _augment() {
      // 初始化函数
      let that = this;
      this.iscroll.on("scroll", function() {
        that._translate(this.x, this.y); // iscroll滚动时，触发主函数
      });
      this.iscroll.on("beforeScrollStart", function() {
        that._translate(this.x, this.y); // iscroll即将滚动时，触发主函数
      });
      this.iscroll.on("scrollStart", function() {
        that._translate(this.x, this.y); // iscroll开始滚动时，触发主函数
      });
    },
    _translate(x, y) {
      // 主函数，到达sticky位置后，反向transform
      let absY = m.abs(y); // 获取y轴滚动的绝对值
      this.headers.forEach(stickyObj => {
        // 遍历sticky对象
        let translateY = 0; // sticky的反向transform默认为0
        let yy = m.abs(absY - stickyObj.el.offsetTop); // 计算iscroll的y轴滚动值-当前元素距离父级的值
        // stickyObj.el.offsetTop为固定值
        // yy即为当前元素距离容器顶部的位置
        // absY < stickyObj.el.offsetTop说明该元素还没到达顶部
        // yy <= stickyObj.top 判断元素是否到达需要sticky的位置
        // ① 当元素还没到达容器顶部时，默认为0，再判断是否到达指定sticky位置
        // ② 如果没到达指定sticky，依然为0
        // ③ 如果达到指定sticky位置，那么就计算超过sticky位置后，需要反向transform的距离
        // ④ 这里默认指定位置是小于元素初始位置的，指定位置大于初始位置的，我想会很奇葩吧。
        if (absY - stickyObj.el.offsetTop > 0 || yy <= stickyObj.top) {
          // 这个公式需要反复理解一下
          // 当容器往上滚动时，容器的transform是负值，所以我们反向是正值
          // 容器向上滚动值absY不断变大，我们sticky就不断向下transform
          // stickyObj.el.offsetTop - stickyObj.top 即为容器滚动多少范围才会让元素到达指定sticky位置
          // 计算iscroll容器的滚动值 - (初始位置 - 指定位置)
          // 当滚动值等于初始位置和指定位置之差时，刚好等于0
          // 随着滚动值越来越大，超过0的部分，即为需要反向transform的值
          translateY = absY - (stickyObj.el.offsetTop - stickyObj.top);
        } else {
          translateY = 0;
        }
        // 最后拼接浏览器前缀，完成css赋值
        stickyObj.el.style[vendor + "Transform"] =
          trnOpen + ("0, " + translateY + "px") + trnClose;
      });
    }
  };
};
export default extendSticky;
