export const priceFormat = (price) => {
  const result = String(price).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
  return `${result} Р`;
};
