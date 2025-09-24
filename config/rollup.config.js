import { readFileSync } from 'fs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';

// Read the package.json to get the project name
const packageJson = JSON.parse(readFileSync('./package.json', 'utf8'));
const packageName = packageJson.name;

export default {
  // Your main entry file, now inside the src directory
  input: 'src/index.js',
  output: [
    {
      // Output a CommonJS bundle for Node.js compatibility
      file: `dist/${packageName}.cjs`,
      format: 'cjs',
      sourcemap: true,
    },
    {
      // Output an ES Module bundle for modern environments
      file: `dist/${packageName}.mjs`,
      format: 'es',
      sourcemap: true,
    },
  ],
  // Plugins to handle different file types and imports
  plugins: [
    json(), // Handles JSON imports
    nodeResolve(), // Handles third-party dependencies from node_modules
  ],
};
