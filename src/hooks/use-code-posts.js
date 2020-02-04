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
            title
            slug
            id
            featuredImage {
              sourceUrl
              altText
              imageFile {
                childImageSharp {
                  fluid(traceSVG: { color: "#f00e2e" }) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  // console.log(data);

  return data.wpgraphql.posts.nodes.map(post => ({
    title: post.title,
    slug: 'blog/code/' + post.slug,
    custonExcerpt: post.shortLongPost.customExcerpt,
    id: post.id,
    featuredImage: post.featuredImage
  }));
  // return data.wpgraphql.posts.nodes
};

export default useCodePosts;
