# brand-model-variant-selector

A lightweight and efficient npm package to select brand, model, and variant data for twowheelers.

---

## 🚀 Features
- **Comprehensive Database**: 126 motorcycle brands, 108 models, and 166 variants with detailed specifications
- **Lightweight**: No external dependencies, ensuring a small package size (~2KB gzipped)
- **Efficient**: Functions are optimized for data filtering, and the data is included directly within the package for fast lookups
- **Well-typed**: JSDoc comments provide clear type definitions, which is great for modern IDEs
- **Production Ready**: Full test coverage with 20+ test cases and automated CI/CD pipeline
- **Reliable**: Automated testing and publishing with conflict resolution  

---

## 📦 Installation
To add this package to your project, run the following command in your terminal:

```bash
npm install brand-model-variant-selector
```

## 💻 Usage

### Get all brands
This function retrieves an array of all available brands (126 brands).

```js
import { getBrands } from 'brand-model-variant-selector';

const brands = getBrands();
console.log(brands);
// [
//   { id: 'b001', name: 'ABZO' },
//   { id: 'b100', name: 'Honda' },
//   { id: 'b123', name: 'Royal Enfield' }
// ]

```

### Get all models
This function retrieves an array of all available models, regardless of brand (108 models).

```js
import { getAllModels } from 'brand-model-variant-selector';

const allModels = getAllModels();
console.log(allModels);
// [
//   { id: 'm1001', brandId: 'b100', name: 'Activa', slug: 'activa' },
//   { id: 'm1002', brandId: 'b100', name: 'CB350', slug: 'cb350' },
//   { id: 'm1089', brandId: 'b123', name: 'Classic', slug: 'classic' }
// ]

```

### Get all variants
This function retrieves an array of all available variants, regardless of model (166 variants).

```js
import { getAllVariants } from 'brand-model-variant-selector';

const allVariants = getAllVariants();
console.log(allVariants);
// [
//   { id: 'v001', modelId: 'm1001', name: '125', specs: { engine: '125cc Air-cooled', type: 'Scooter' } },
//   { id: 'v002', modelId: 'm1001', name: '6G', specs: { engine: '110cc Air-cooled', type: 'Scooter' } },
//   { id: 'v003', modelId: 'm1002', name: 'RS', specs: { engine: '350cc Liquid-cooled', type: 'Motorcycle' } }
// ]

```

### Get variants for a specific model
This function returns all variants for a given model ID.

```js
import { getVariants } from 'brand-model-variant-selector';

const activaVariants = getVariants('m1001');
console.log(activaVariants);
// [
//   { id: 'v001', modelId: 'm1001', name: '125', specs: { engine: '125cc Air-cooled', type: 'Scooter' } },
//   { id: 'v002', modelId: 'm1001', name: '6G', specs: { engine: '110cc Air-cooled', type: 'Scooter' } }
// ]

```

### Get models by brand
This function returns all models for a specific brand.

```js
import { getModels } from 'brand-model-variant-selector';

const hondaModels = getModels('b100');
console.log(hondaModels);
// [
//   { id: 'm1001', brandId: 'b100', name: 'Activa', slug: 'activa' },
//   { id: 'm1002', brandId: 'b100', name: 'CB350', slug: 'cb350' },
//   { id: 'm1003', brandId: 'b100', name: 'Hornet', slug: 'hornet' }
// ]

```

## 🔧 CI/CD Pipeline
This package features automated CI/CD with:
- **Automated Testing**: 20+ test cases run on every commit
- **Smart Publishing**: Automatic version bumping and NPM publishing
- **Conflict Resolution**: Handles version conflicts intelligently
- **GitHub Actions**: Complete workflow from commit to published package

## 🤝 Contribution

Contributions are welcome! If you find a bug or have a suggestion, please feel free to open an issue or a pull request on the GitHub repository.
