import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema:
   "./.mesh/schema.graphql",
  documents: ["graphql/**/*.graphql"],
  generates: {
    "./lib/__generated__/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
