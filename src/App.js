import React from "react";
import { useState } from "react";
import { Posts } from "./components/posts";
import { PostAdd } from "./components/posts/postAdd";
import { Select } from "./components/ui/select/select";
import { Option } from "./components/ui/select/option";

function App() {
  const options = [
    {
      value: 1,
      title: "option1",
    },
    {
      value: 2,
      title: "option2",
    },
    {
      value: 3,
      title: "option3",
    },
  ];
  const [selectValue, setSelectValue] = useState("");
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "test 1",
      description: "description",
    },
    {
      id: 2,
      title: "test 2",
      description: "description",
    },
    {
      id: 3,
      title: "test 3",
      description: "description",
    },
    {
      id: 4,
      title: "test 4",
      description: "description",
    },
  ]);
  const removeHandler = id => setPosts(posts.filter(post => post.id !== id));
  const addPostHandler = data => {
    setPosts([...posts, { id: +new Date(), ...data }]);
    return true;
  };
  return (
    <div className="App">
      <h3>{selectValue.title}</h3>
      <Select
        handler={value => setSelectValue(value)}
        label="Выберите элемент из списка"
      >
        {options.map(option => (
          <Option {...option} key={option.value} />
        ))}
      </Select>
      <PostAdd handler={addPostHandler} />
      <Posts posts={posts} change={removeHandler} />
    </div>
  );
}

export default App;
