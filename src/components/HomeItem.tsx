import React from "react";

interface Post {
  title: { rendered: string };
  excerpt: { rendered: string };
}

interface Props {
  post: Post;
}

const PostItem: React.FC<Props> = ({ post }) => {
  const { title, excerpt } = post;
  
  return (
    <div>
      <h3>{title.rendered}</h3>
      <div dangerouslySetInnerHTML={{ __html: excerpt.rendered.substring(0, 200) + "..." }}></div>
    </div>
  );
};


export default PostItem;
