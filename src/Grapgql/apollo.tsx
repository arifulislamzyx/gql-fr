import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { PropsWithChildren, ReactNode } from "react";

const gql_Endpoint = "https://api.react-finland.fi/graphql";

const StartApolloProvider: ReactNode<PropsWithChildren<{}>> = ({
  children,
}) => {
  const client = () => {
    return new ApolloClient({
      uri: gql_Endpoint,
      cache: new InMemoryCache(),
    });
  };

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default StartApolloProvider;
