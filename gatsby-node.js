const path = require("path");

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMdx {
        nodes {
          slug
        }
      }
    }
  `);

  result.data.allMdx.nodes.forEach(node => {
    createPage({
      path: `${node.slug}`,
      component: path.resolve(`./src/pages/PostPage.js`),
      context: {
        slug: node.slug,
      },
    });
  });
};
