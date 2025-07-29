export default {
  includes: ['payload-types.ts'],
  excludes: [
    '**/*.guardz.ts',
    'node_modules/**/*'
  ],
  postProcess: true,
  guardNaming: (typeName: string) => `is${typeName}`,
}; 