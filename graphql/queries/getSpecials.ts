import { gql } from "@apollo/client";

export const GET_CONTINENTS = gql`
  query GetContinents {
    continents {
      code
      name
    }
  }
`;

export const GET_SPEC = gql`
  query Specials {
    specials {
      promotions {
        promo_url
        name
        label
        discount
        description
        date
        banner
        availability
      }
      rebates {
        date
        description
        entity_id
        image
        name
        status
        url_key
      }
    }
  }
`;
