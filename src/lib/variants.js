import variantsData from '../data/variants.json';

/**
 * @description Retrieves all variants.
 * @returns {Array<Object>} An array of all variant objects.
 */
export const getAllVariants = () => {
  return variantsData;
};

/**
 * @description Retrieves variants for a specific model.
 * @param {string} modelId The ID of the model.
 * @returns {Array<Object>} An array of variant objects.
 */
export const getVariants = (modelId) => {
  if (!modelId) {
    return [];
  }
  return variantsData.filter(variant => variant.modelId === modelId);
};
