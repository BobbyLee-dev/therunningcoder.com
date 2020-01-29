import React from 'react';
import { Link } from 'gatsby';

const CodePreview = ({ post }) => {
  return (
    <article>
      <h2>
        <Link to={post.slug}>{post.title}</Link>
      </h2>
      <div>{post.custonExcerpt}</div>
      <Link to={post.slug}>read this post &rarr;</Link>
    </article>
  );
};

export default CodePreview;
