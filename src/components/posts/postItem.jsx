import React from "react";

export const PostItem = ({ post, remove }) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>{post.title}</strong>
        <div>{post.description}</div>
      </div>
      <div>
        <button onClick={() => remove(post.id)}>Удалить пост</button>
      </div>
    </div>
  );
};
