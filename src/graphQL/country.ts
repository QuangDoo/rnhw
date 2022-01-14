import {gql} from '@apollo/client';

export type Country = {
  code: string;
  name: string;
  native: string;
  continent: Continent;
  capital: String;
  phone: string;
  currency: String;
  languages: [Language];
  emoji: string;
};

export type Continent = {
  code: string;
  name: string;
  countries: [Country];
};

export type Language = {
  code: string;
  name: string;
  native: string;
};

export type GetCountryData = {
  country: Country;
};

export type CountryVars = {
  code: string;
};

export const GET_COUNTRY = gql`
  query($code: ID!) {
    country(code: $code) {
      code
      name
      emoji
      capital
      phone
      continent {
        code
        name
      }
      languages {
        code
        name
        native
      }
    }
  }
`;
