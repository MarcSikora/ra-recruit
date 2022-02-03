import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://reasonapps-gql-api.vercel.app/api/graphql",
  cache: new InMemoryCache(),
});

export default async function productHandler(req, res) {
  const slug = req.query.slug;

  const { data } = await client.query({
    query: gql`
        query {
            products(slug: "${slug}") {
              id
              name
              description
              image
              price
            }
        }
    `,
  });
  res.status(200).json(data.products[0])
}

