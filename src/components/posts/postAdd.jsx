import React from "react";
import { useState } from "react";
import { Input } from "../ui/input";
import "./style.css";

export const PostAdd = ({ handler }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const titleChangeHandler = value => setTitle(value);
  const descriptionChangeHandler = value => setDescription(value);
  const addPostHandler = () => {
    handler({ title, description });
    setTitle("");
    setDescription("");
  };
  return (
    <div className="post-add">
      <Input
        type="text"
        value={title}
        placeholder="description"
        onChange={e => titleChangeHandler(e.target.value)}
      />
      <Input
        type="text"
        value={description}
        placeholder="description"
        onChange={e => descriptionChangeHandler(e.target.value)}
      />
      <button onClick={() => addPostHandler()}>Сохранить</button>
    </div>
  );
};
