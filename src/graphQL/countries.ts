import {gql} from '@apollo/client';
import {Country} from './country';

export type GetCountriesData = {
  countries: Country[];
};

const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
      emoji
      capital
    }
  }
`;

export default GET_COUNTRIES;
