import modelsData from '../data/model.json';

/**
 * @description Retrieves all models.
 * @returns {Array<Object>} An array of all model objects.
 */
export const getAllModels = () => {
  return modelsData;
};

/**
 * @description Retrieves models for a specific brand.
 * @param {string} brandId The ID of the brand.
 * @returns {Array<Object>} An array of model objects.
 */
export const getModels = (brandId) => {
  if (!brandId) {
    // console.warn("Brand ID is required to get models. Returning empty array.");
    return [];
  }
  return modelsData.filter(model => model.brandId === brandId);
};
