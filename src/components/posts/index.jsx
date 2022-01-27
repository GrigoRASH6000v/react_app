import React from "react";
import { PostItem } from "./postItem";
export const Posts = ({ posts, change }) => {
  return (
    <div className="posts">
      {posts.length
        ? posts.map(post => (
            <PostItem key={post.id} post={post} remove={change} />
          ))
        : "Постов нет"}
    </div>
  );
};
