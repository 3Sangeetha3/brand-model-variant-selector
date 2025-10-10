import { getBrands } from '../../src/lib/brands.js';

describe('brands.js', () => {
  it('should retrieve all brands', () => {
    const brands = getBrands();
    expect(brands).toHaveLength(99);
    expect(brands[0].name).toBe('ABZO');
  });
});
