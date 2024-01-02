# Seam Eslint Configs

This repository is a collection of eslint configs for use in Seam projects.
Centralizing eslint configs enables uniform styles across Seam projects, and
to avoid bike-shedding within a particular project.

Feel free to use these for personal use.

## Usage

In your `.eslintrc` and `.eslintrc.js` file, add the following lines:

```js
module.exports = {
  extends: ['./node_modules/@seamapi/eslint-configs/std1'],
}
```

## Official Standards

> There are both **components** and **standards** in this repository. A standard
> is intended to be foundational for a project, while components are optionally
> added. Standards are not expected to dramatically change over time. Instead of
> retrofitting a standard you should advocate for a new standard then advocate
> for deprecation of the old standard.
>
> Every standard and component should have a version number.

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

> Components are configs that can be used to construct new standards or to

### `naming1` API/Server Naming Conventions (2021+)

For use in API/Server code.

- `snake_case` variables and data structures
- `camelCase` functions

### `apidesign1` Lints Compliance with API Design RFC (In Development)

Forces rules from [API Design RFC](https://github.com/seamapi/rfc/blob/main/rfcs/2023-03-01-api-design.md)

### `schemadesign1` Lints for Best Practices in Database Schema Design (In Development)

> Note, this may be replaced with [schemalint](https://github.com/kristiandupont/schemalint)

Enforces schema design best practices.

- `snake_case` columns and tables
- `jsonb` objects have a `domain` to give them types
- Enforces a DAG from the `$main` schema to all other schemas (other schemas
  cannot reference each other, or the `$main` schema, the `$main` schema has
  should have references to other schemas)
- No polymorphic associations (uuid column without reference)
- Foreign keys should always be or end in `<referenced_table>_id`
- All tables have a `created_at` column
- Tables always have primary keys with column name `<table>_id`
- No cascading deletes
- No soft delete columns (`is_deleted`, `deleted_at`)

## Unofficial Configs and Components

> You are welcome to introduce unofficial configs, which will encourage adoption
> as a standard config. For an unofficial config to become official, it should
> be used in at least 2 projects and have the approvals of several developers.

(none yet)
