import { getVariants, getAllVariants } from '../../src/lib/variants.js';

describe('variants.js unit tests', () => {

  // Test the function that retrieves all variants
  it('should retrieve all variants', () => {
    const variants = getAllVariants();
    expect(variants).toHaveLength(166);
    expect(variants[0].name).toBe('125');
  });

  // Test the filtering logic of getVariants
  it('should retrieve variants for a valid model ID', () => {
    const variants = getVariants('m1001');
    expect(variants).toHaveLength(4);
    expect(variants[0].name).toBe('125');
  });

  it('should return an empty array for a non-existent model ID', () => {
    const variants = getVariants('m999');
    expect(variants).toHaveLength(0);
  });

  it('should return an empty array if no model ID is provided', () => {
    const variants = getVariants(null);
    expect(variants).toHaveLength(0);
  });

});
