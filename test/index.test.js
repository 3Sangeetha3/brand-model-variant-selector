import { getBrands, getModels, getAllModels, getVariants, getAllVariants } from '../index.js';

describe('Brand, Model, and Variant Selector', () => {

  // Test the base function that retrieves all data.
  it('should retrieve all brands', () => {
    const brands = getBrands();
    console.log('Brands:', brands);
    expect(brands).toHaveLength(2);
    expect(brands[0].name).toBe('Toyota');
  });

  it('should retrieve all models', () => {
    const allModels = getAllModels();
    console.log('Models:', allModels);
    expect(allModels).toHaveLength(3);
  });

  // A representative sample of brand IDs to test the logic.
  const brandTestCases = [
    { brandId: 'b001', expectedCount: 2, expectedFirstModelName: 'Camry' },
    { brandId: 'b002', expectedCount: 1, expectedFirstModelName: 'Accord' },
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
  
  it('should retrieve all variants', () => {
    const allVariants = getAllVariants();
    console.log('Variants:', allVariants);
    expect(allVariants).toHaveLength(3);
  });

  // A representative sample of model IDs to test the logic.
  const modelTestCases = [
    { modelId: 'm001', expectedCount: 2, expectedFirstName: 'LE' },
    { modelId: 'm003', expectedCount: 1, expectedFirstName: 'Sport' },
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
