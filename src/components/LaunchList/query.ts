import { gql } from "@apollo/client";

export const QUERY_LAUNCHES = gql`
  query Launches {
    launches {
      flight_number
      mission_name
      launch_year
    }
  }
`;
