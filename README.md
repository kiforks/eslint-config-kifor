# eslint-config-kifor

[![npm version](https://img.shields.io/npm/v/eslint-config-kifor?logo=npm&logoColor=fff)](https://www.npmjs.com/package/eslint-config-kifor)
[![Build Status](https://img.shields.io/github/actions/workflow/status/kiforks/eslint-config-kifor/deploy.yml?query=workflow%3Adeploys&logo=github)](https://github.com/kiforks/eslint-config-kifor/actions/workflows/deploy.yml?query=workflow%3Adeploy)
[![Downloads per month](https://img.shields.io/npm/dm/eslint-config-kifor)](https://npmcharts.com/compare/eslint-config-kifor)

## Installation

ℹ️ `eslint` dependencies are included, so you can remove all `eslint` related dependencies from your project.

```sh
npm install eslint eslint-config-kifor--save-dev
```

or

```sh
yarn add eslint eslint-config-kifor --dev
```

## Configure ESLint

Within your **ESLint** config file:

```javascript
// .eslintrc.js file
module.exports = {
  root: true,
  ignorePatterns: ['*.js'],
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: ['tsconfig.json'],
        createDefaultProgram: true,
      },
      extends: ['kifor/typescript', 'kifor/angular-typescript'],
    },
    {
      files: ['*.spec.ts', '*.host.ts', '*.po.ts'],
      env: { jasmine: true /* or 'jest/globals': true,*/ },
      extends: ['kifor/tests', 'kifor/tests-jasmine' /* or 'kifor/tests-jest' */],
    },
    {
      files: ['*.html'],
      extends: ['kifor/angular-template'],
    },
  ],
};
```

```json
// .eslintrc.json file
{
  "root": true,
  "ignorePatterns": ["*.js"],
  "overrides": [
    {
      "files": ["*.ts"],
      "parserOptions": {
        "ecmaVersion": 2020,
        "sourceType": "module",
        "project": ["tsconfig.json"],
        "createDefaultProgram": true
      },
      "extends": ["kifor/typescript", "kifor/angular-typescript"]
    },
    {
      "files": ["*.spec.ts", "*.host.ts", "*.po.ts"],
      "env": { "jest/globals": true },
      "extends": ["kifor/tests", "kifor/tests-jest"]
    },
    {
      "files": ["*.html"],
      "extends": ["kifor/angular-template"],
      "rules": {}
    }
  ]
}

```

## Tsconfig

For better consistency, please add this options to your `tsconfig.json`:

```javascript
{
  "compilerOptions": {
    (...),
    "forceConsistentCasingInFileNames": true, // Ensure that casing is correct in imports
    "noImplicitAny": true, // Enable error reporting for expressions and declarations with an implied any type
    "noImplicitOverride": true, // Ensure overriding members in derived classes are marked with an override modifier
    "strict": true // Enable all strict type checking options
  },
  "angularCompilerOptions": {
    "strictInjectionParameters": true, // Reports an error for a supplied parameter whose injection type cannot be determined
    "strictInputAccessModifiers": true, // Whether access modifiers such as private/protected/readonly are honored when assigning a binding expression to an @Input()
    "strictTemplates": true // Enables strict template type checking
  }
}
```

## Extends

- [@angular-eslint](https://github.com/angular-eslint/angular-eslint)
- [@typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
- [eslint-config-angular-strict](https://github.com/Jbz797/eslint-config-angular-strict/tree/master)
