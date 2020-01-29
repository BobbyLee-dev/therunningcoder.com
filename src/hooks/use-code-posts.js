import { graphql, useStaticQuery } from 'gatsby';

const useCodePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      wpgraphql {
        posts(where: { categoryName: "Code" }) {
          nodes {
            shortLongPost {
              customExcerpt
              fieldGroupName
              longVersion
              shortVersion
            }
            slug
          }
        }
      }
    }
  `);
  console.log(data);
  return data.wpgraphql.posts.nodes.map(post => ({
    title: post.title,
    slug: 'blog/code/' + post.slug,
    custonExcerpt: post.shortLongPost.customExcerpt
  }));
  // return data.wpgraphql.posts.nodes
};

export default useCodePosts;
