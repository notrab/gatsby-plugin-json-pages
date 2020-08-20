require("dotenv").config();

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-graphcms",
      options: {
        endpoint: process.env.GRAPHCMS_ENDPOINT,
      },
    },
    {
      resolve: "gatsby-plugin-json-pages",
      options: {
        pages: [
          {
            fileName: "products",
            query: `
              query {
                allGraphCmsProduct {
                  nodes {
                    id
                    prices {
                      amount
                      currency
                    }
                  }
                }
              }
            `,
            transformer: ({
              data: {
                allGraphCmsProduct: { nodes },
              },
            }) => nodes,
          },
        ],
      },
    },
  ],
};
