import { fixupConfigRules, fixupPluginRules } from '@eslint/compat'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import jsxA11Y from 'eslint-plugin-jsx-a11y'
import tailwindcss from 'eslint-plugin-tailwindcss'
import tsParser from '@typescript-eslint/parser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

const twOptions = {
  callees: ['clsx', 'cva', 'cn'],
  classRegex: '^class(Name)?$',
}

const config = [
  ...fixupConfigRules(
    compat.extends(
      'eslint:recommended',
      'next/core-web-vitals',
      'next/typescript',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:tailwindcss/recommended',
      'prettier',
    ),
  ),
  {
    plugins: {
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
      'react': fixupPluginRules(react),
      'react-hooks': fixupPluginRules(reactHooks),
      'jsx-a11y': fixupPluginRules(jsxA11Y),
      'tailwindcss': fixupPluginRules(tailwindcss),
    },

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 12,
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          arrowFunctions: true,
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'warn',

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],

      'tailwindcss/classnames-order': ['error', twOptions],
      'tailwindcss/enforces-negative-arbitrary-values': ['error', twOptions],
      'tailwindcss/enforces-shorthand': ['error', twOptions],
      'tailwindcss/migration-from-tailwind-2': ['error', twOptions],
      'tailwindcss/no-contradicting-classname': ['error', twOptions],
      'tailwindcss/no-custom-classname': ['error', twOptions],
      'tailwindcss/no-unnecessary-arbitrary-value': ['error', twOptions],
    },
  },
]

export default config
