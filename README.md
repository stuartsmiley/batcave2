# batcave2

React based single page app designed to talk to batcave-api backend to trigger the garage door opener.

# Using
* React
* TypeScript
* Vite

## Prerequisites
* nvm
* latest version of node and npm 
* yarn (why version 1.x instead of 2.x)

## How we got started
```
corepack enable
yarn create vite
```
Selecting the options for react and typescript (skipping SWC for now).
```
cd batcave2
yarn 
yarn dev
```
Go to http://localhost:5173/ and confirm the app is running. If at this point
`yarn create vite` is still creating the app using react18, go ahead and upgraded
to the latest version of react
```bash
yarn add react@19
yarn add react-dom@19
yarn add @types/react-dom@19
yarn add @types/react@19
yarn add --dev eslint-plugin-react
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` 
- or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react, 
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
