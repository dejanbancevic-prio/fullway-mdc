/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "query ProductPage($urlKey: String!) {\n  products(filter: {url_key: {eq: $urlKey}}) {\n    items {\n      url_key\n      name\n      description {\n        html\n      }\n      ... on ConfigurableProduct {\n        variants {\n          attributes {\n            label\n          }\n          product {\n            yotpo_rating_value\n            yotpo_review_count\n            size_text\n            url_key\n            uid\n            stock_status\n            name\n            season_text\n            price_range {\n              minimum_price {\n                final_price {\n                  value\n                  currency\n                }\n              }\n            }\n            size_text\n            load_index_text\n            speed_rating\n            utqg\n            rim_diameter_text\n            overall_diameter\n            tread_depth_text\n            sidewall_specifics_text\n          }\n        }\n      }\n    }\n  }\n}": typeof types.ProductPageDocument,
};
const documents: Documents = {
    "query ProductPage($urlKey: String!) {\n  products(filter: {url_key: {eq: $urlKey}}) {\n    items {\n      url_key\n      name\n      description {\n        html\n      }\n      ... on ConfigurableProduct {\n        variants {\n          attributes {\n            label\n          }\n          product {\n            yotpo_rating_value\n            yotpo_review_count\n            size_text\n            url_key\n            uid\n            stock_status\n            name\n            season_text\n            price_range {\n              minimum_price {\n                final_price {\n                  value\n                  currency\n                }\n              }\n            }\n            size_text\n            load_index_text\n            speed_rating\n            utqg\n            rim_diameter_text\n            overall_diameter\n            tread_depth_text\n            sidewall_specifics_text\n          }\n        }\n      }\n    }\n  }\n}": types.ProductPageDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductPage($urlKey: String!) {\n  products(filter: {url_key: {eq: $urlKey}}) {\n    items {\n      url_key\n      name\n      description {\n        html\n      }\n      ... on ConfigurableProduct {\n        variants {\n          attributes {\n            label\n          }\n          product {\n            yotpo_rating_value\n            yotpo_review_count\n            size_text\n            url_key\n            uid\n            stock_status\n            name\n            season_text\n            price_range {\n              minimum_price {\n                final_price {\n                  value\n                  currency\n                }\n              }\n            }\n            size_text\n            load_index_text\n            speed_rating\n            utqg\n            rim_diameter_text\n            overall_diameter\n            tread_depth_text\n            sidewall_specifics_text\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query ProductPage($urlKey: String!) {\n  products(filter: {url_key: {eq: $urlKey}}) {\n    items {\n      url_key\n      name\n      description {\n        html\n      }\n      ... on ConfigurableProduct {\n        variants {\n          attributes {\n            label\n          }\n          product {\n            yotpo_rating_value\n            yotpo_review_count\n            size_text\n            url_key\n            uid\n            stock_status\n            name\n            season_text\n            price_range {\n              minimum_price {\n                final_price {\n                  value\n                  currency\n                }\n              }\n            }\n            size_text\n            load_index_text\n            speed_rating\n            utqg\n            rim_diameter_text\n            overall_diameter\n            tread_depth_text\n            sidewall_specifics_text\n          }\n        }\n      }\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;