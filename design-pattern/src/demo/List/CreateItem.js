import Item from "./Item";

// 补充优惠商品的处理逻辑
function createDiscount(itemData) {
  // 用代理做折扣显示
  return new Proxy(itemData, {
    get(target, key, receiver) {
      if (key === "name") {
        return `${target[key]} 【折扣】`;
      }
      if (key === "price") {
        return target[key] * target.discount;
      }
      return target[key];
    }
  });
}

export default function(list, itemData) {
  if (itemData.discount) {
    itemData = createDiscount(itemData);
  }
  return new Item(list, itemData);
}
