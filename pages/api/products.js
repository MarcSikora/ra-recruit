import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export default async function handler(req, res) {
    const client = new ApolloClient({
        uri: "https://reasonapps-gql-api.vercel.app/api/graphql",
        cache: new InMemoryCache(),
    });
    const { data } = await client.query({
        query: gql`
            query {
                products {
                    id
                    name
                    description
                    slug
                    image
                    price
                }
            }
        `,
    });

    res.status(200).json(data);
}