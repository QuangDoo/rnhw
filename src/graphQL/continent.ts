import {gql} from '@apollo/client';
import {Continent} from './country';

export type GetContinentData = {
  continent: Continent;
};

export type ContinentVar = {
  code: string;
};

export const GET_CONTINENT = gql`
  query($code: ID!) {
    continent(code: $code) {
      code
      name
      countries {
        code
        name
      }
    }
  }
`;
