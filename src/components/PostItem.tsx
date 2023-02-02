import React from "react";

interface Post {
  title: { rendered: string };
  date: string;
  content: { rendered: string };
}

interface Props {
  post: Post;
}

const PostItem: React.FC<Props> = ({ post }) => {
  const { title, date, content } = post;
  
  return (
    <div className="post-item">
      <h2>{title.rendered}</h2>
      <span>{date.split('T')[0]}</span>
      <div dangerouslySetInnerHTML={{ __html: content.rendered }}></div>
    </div>
  );
};


export default PostItem;
