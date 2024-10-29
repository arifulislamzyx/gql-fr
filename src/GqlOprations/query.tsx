import { gql } from "@apollo/client";

export const gqlPeople = gql`
  {
    people {
      firstName
      lastName
      about
      aboutShort
    }
  }
`;
