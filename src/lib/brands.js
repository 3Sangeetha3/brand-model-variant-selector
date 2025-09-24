import brandsData from '../data/brand.json';

/**
 * @description Retrieves all brands.
 * @returns {Array<Object>} An array of brand objects.
 */
export const getBrands = () => {
  return brandsData;
};
