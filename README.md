# Seam Eslint Configs

This repository is a collection of eslint configs for use in Seam projects.
Centralizing eslint configs enables uniform styles across Seam projects, and
to avoid bike-shedding within a particular project.

Feel free to use these for personal use.

## Usage

In your `.eslintrc` and `.eslintrc.js` file, add the following lines:

```js
module.exports = {
    extends: '@seamapi/eslint-config',
    // any additional project-specific settings
};
```

## Official Configs

### `std1` Server Standard 1 (2021+)

For use in server-side code, especially API code.

- Optimizes for variable transparency between database, API, and application code
- `snake_case` variables and data structures

### `std2` React Standard 2 (2021+)

For use in React code.

- Conventional React code style
- `camelCase` for variables and functions
- Common react code protections

## Components

### `api1` API/Server Naming Conventions (2021+)

For use in API/Server code.

- `snake_case` variables and data structures
- `camelCase` functions

## Unofficial Configs and Components

> You are welcome to introduce unofficial configs, which will encourage adoption
> as a standard config.

(none yet)
