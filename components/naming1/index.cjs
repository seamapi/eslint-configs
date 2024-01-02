module.exports = {
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      rules: {
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: ["interface", "typeAlias"],
            format: ["PascalCase"],
            leadingUnderscore: "forbid",
            trailingUnderscore: "forbid",
          },
          {
            selector: [
              "classProperty",
              "typeProperty",
              "parameterProperty",
              "variable",
              "parameter",
            ],
            types: ["function"],
            format: ["camelCase"],
          },
          {
            selector: ["objectLiteralProperty"],
            format: null,
          },
          {
            selector: ["parameterProperty", "variable", "parameter"],
            types: ["boolean", "string", "number", "array"],
            format: ["snake_case", "UPPER_CASE"],
            leadingUnderscore: "allow",
            trailingUnderscore: "allow",
          },
          {
            selector: ["function"],
            format: ["camelCase"],
          },
          {
            selector: "default",
            format: ["camelCase", "snake_case", "UPPER_CASE", "PascalCase"],
            leadingUnderscore: "allow",
            trailingUnderscore: "forbid",
          },
        ],
      },
    },
    {
      files: ["**/*.tsx"],
      rules: {
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: ["function"],
            format: ["camelCase", "PascalCase"],
          },
        ],
      },
    },
    // Do not enforce naming convention rules on generated files, add any files
    // you don't want to enforce naming conventions on here
    {
      files: ["db/zapatos/custom/**/*.ts", "types/tasks.ts"],
      rules: {
        "@typescript-eslint/naming-convention": "off",
      },
    },
  ],
}
