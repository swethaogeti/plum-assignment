export const isPremiumFilter = (products, filterIsPremium) => {
  return products.filter(({ data }) =>
    filterIsPremium ? data.author_premium === true : data
  );
};

export const rangeFilter = (products, filterRange) => {
  console.log(products);
  return products.filter(
    ({ data }) => data.total_awards_received <= filterRange
  );
};

export const sortProducts = (products, sortBy) => {
  if (sortBy === "LOW_TO_HIGH") {
    return [...products].sort((a, b) => a.ups - b.ups);
  }
  if (sortBy === "HIGH_TO_LOW") {
    return [...products].sort((a, b) => b.ups - a.ups);
  }
  return products;
};
