import { getBrands, getModels, getVariants, getAllModels, getAllVariants } from '../../src/index.js';

describe('Package Integration', () => {

  // Test the base function that retrieves all data.
  it('should retrieve all brands', () => {
    const brands = getBrands();
    expect(brands).toHaveLength(126);
    expect(brands[0].name).toBe('ABZO');
  });

  it('should retrieve all models', () => {
    const models = getAllModels();
    expect(models).toHaveLength(108);
    expect(models[0].name).toBe('Activa');
  });

  it('should retrieve all variants', () => {
    const variants = getAllVariants();
    expect(variants).toHaveLength(166);
    expect(variants[0].name).toBe('125');
  });

  // A representative sample of brand IDs to test the logic.
  const brandTestCases = [
    { brandId: 'b100', expectedCount: 24, expectedFirstModelName: 'Activa' }, // Honda
    { brandId: 'b123', expectedCount: 15, expectedFirstModelName: 'Bear 650' }, // Royal Enfield
    { brandId: 'b999', expectedCount: 0, expectedFirstModelName: null }, // Non-existent ID
    { brandId: null, expectedCount: 0, expectedFirstModelName: null }, // No ID provided
  ];

  // Use a loop to test the getModels function with multiple inputs.
  // This is a scalable way to test the logic without duplicating code.
  brandTestCases.forEach(testCase => {
    it(`should retrieve ${testCase.expectedCount} models for brand ID "${testCase.brandId}"`, () => {
      const models = getModels(testCase.brandId);
      expect(models).toHaveLength(testCase.expectedCount);
      if (testCase.expectedCount > 0) {
        expect(models[0].name).toBe(testCase.expectedFirstModelName);
      }
    });
  });

  // A representative sample of model IDs to test the logic.
  const modelTestCases = [
    { modelId: 'm1001', expectedCount: 4, expectedFirstName: '125' }, // Activa variants
    { modelId: 'm1003', expectedCount: 5, expectedFirstName: 'CB350' }, // CB350 variants
    { modelId: 'm999', expectedCount: 0, expectedFirstName: null }, // Non-existent ID
    { modelId: null, expectedCount: 0, expectedFirstName: null }, // No ID provided
  ];

  // Use a loop to test the getVariants function with multiple inputs.
  modelTestCases.forEach(testCase => {
    it(`should retrieve ${testCase.expectedCount} variants for model ID "${testCase.modelId}"`, () => {
      const variants = getVariants(testCase.modelId);
      expect(variants).toHaveLength(testCase.expectedCount);
      if (testCase.expectedCount > 0) {
        expect(variants[0].name).toBe(testCase.expectedFirstName);
      }
    });
  });

});
