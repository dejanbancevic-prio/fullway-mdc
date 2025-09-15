import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema:
    process.env.NEXT_PUBLIC_GRAPHQL_API || "http://localhost:3000/api/graphql",
  documents: ["app/**/*.tsx", "lib/**/*.ts"],
  generates: {
    "./lib/__generated__/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
