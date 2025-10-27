import { getModels, getAllModels } from '../../src/lib/models.js';

describe('models.js unit tests', () => {

  // Test the function that retrieves all models
  it('should retrieve all models', () => {
    const models = getAllModels();
    expect(models).toHaveLength(108);
    expect(models[0].name).toBe('Activa');
  });

  // Test the filtering logic of getModels
  it('should retrieve models for a valid brand ID', () => {
    const models = getModels('b100');
    expect(models).toHaveLength(24);
    expect(models[0].name).toBe('Activa');
  });

  it('should return an empty array for a non-existent brand ID', () => {
    const models = getModels('b999');
    expect(models).toHaveLength(0);
  });

  it('should return an empty array if no brand ID is provided', () => {
    const models = getModels(null);
    expect(models).toHaveLength(0);
  });

});
