# brand-model-variant-selector

A lightweight and efficient npm package to select brand, model, and variant data for twowheelers.

---

## 🚀 Features
- **Lightweight**: No external dependencies, ensuring a small package size.  
- **Efficient**: Functions are optimized for data filtering, and the data is included directly within the package for fast lookups.  
- **Well-typed**: JSDoc comments provide clear type definitions, which is great for modern IDEs.  

---

## 📦 Installation
To add this package to your project, run the following command in your terminal:

```bash
npm install brand-model-variant-selector
```

## 💻 Usage

### Get all brands
This function retrieves an array of all available brands.

```js
import { getBrands } from 'brand-model-variant-selector';

const brands = getBrands();
console.log(brands);
// [
//   { id: 'b001', name: 'Toyota' },
//   { id: 'b002', name: 'Honda' }
// ]

```

### Get all models
This function retrieves an array of all available models, regardless of brand.

```js
import { getAllModels } from 'brand-model-variant-selector';

const allModels = getAllModels();
console.log(allModels);
// [
//   { id: 'm001', brandId: 'b001', name: 'Camry' },
//   { id: 'm002', brandId: 'b001', name: 'Corolla' },
//   { id: 'm003', brandId: 'b002', name: 'Accord' }
// ]

```

### Get all variants
This function retrieves an array of all available variants, regardless of model.

```js
import { getAllVariants } from 'brand-model-variant-selector';

const allVariants = getAllVariants();
console.log(allVariants);
// [
//   { id: 'v001', modelId: 'm001', name: 'LE', specs: { engine: '2.5L 4-Cylinder' } },
//   { id: 'v002', modelId: 'm001', name: 'XSE', specs: { engine: '3.5L V6' } },
//   { id: 'v003', modelId: 'm003', name: 'Sport', specs: { engine: '2.0L Turbo' } }
// ]

```

### Get variants for a specific model
This function returns all variants for a given model ID.

```js
import { getVariants } from 'brand-model-variant-selector';

const camryVariants = getVariants('m001');
console.log(camryVariants);
// [
//   { id: 'v001', modelId: 'm001', name: 'LE', specs: { engine: '2.5L 4-Cylinder' } },
//   { id: 'v002', modelId: 'm001', name: 'XSE', specs: { engine: '3.5L V6' } }
// ]

```

## 🤝 Contribution

Contributions are welcome! If you find a bug or have a suggestion, please feel free to open an issue or a pull request on the GitHub repository.
