import { getVariants, getAllVariants } from '../../src/lib/variants.js';

describe('variants.js unit tests', () => {

  // Test the function that retrieves all variants
  it('should retrieve all variants', () => {
    const variants = getAllVariants();
    expect(variants).toHaveLength(3);
    expect(variants[0].name).toBe('LE');
  });

  // Test the filtering logic of getVariants
  it('should retrieve variants for a valid model ID', () => {
    const variants = getVariants('m001');
    expect(variants).toHaveLength(2);
    expect(variants[0].name).toBe('LE');
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
