import next from 'eslint-config-next/core-web-vitals';
import unusedImports from 'eslint-plugin-unused-imports';

const eslintConfig = [
  ...next,
  {
    settings: {
      react: {
        version: '19.2',
      },
    },
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      'react/no-unescaped-entities': 'off',
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
];

export default eslintConfig;
