import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const CodePreview = ({ post }) => {
  console.log('lol');

  console.log(post);

  return (
    <article>
      {post.featuredImage && (
        <Link to={post.slug}>
          <Img
            alt={post.featuredImage.altText}
            fluid={post.featuredImage.imageFile.childImageSharp.fluid}
          />
        </Link>
      )}
      <h2>
        <Link to={post.slug}>{post.title}</Link>
      </h2>
      <pre>{JSON.stringify(post, null, 2)}</pre>
      <div>{post.custonExcerpt}</div>
      <Link to={post.slug}>read this post &rarr;</Link>
    </article>
  );
};

export default CodePreview;
