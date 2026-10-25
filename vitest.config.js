// vitest.config.js
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node', // no DOM tests; jsdom isn't a dependency,
    globals: true,
  },
});
