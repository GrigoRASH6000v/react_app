import React, { useMemo } from "react";
import { useState } from "react";
import { Posts } from "./components/posts";
import { PostAdd } from "./components/posts/postAdd";
import { PostFilter } from "./components/posts/postFilter";
import { Modal } from "./components/ui/modal/modal";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Арбуз",
      description: "однолетнее травянистое растение, имеющее плод ягоду",
    },
    {
      id: 2,
      title: "Дыня",
      description:
        "тепло - и светолюбивое растение, устойчивое к засолению почвы и засухе, плохо переносит повышенную влажность воздуха",
    },
    {
      id: 3,
      title: "Яблоко",
      description:
        " плод одноименного дерева, популярной во всем мире садовой культуры. Внешний облик характеризуется шарообразной формой и тонкой гладкой кожицей, которая в зависимости от сорта при созревании окрашивается в различные оттенки желтого, красного и зеленого цветов.",
    },
    {
      id: 4,
      title: "Груша",
      description:
        "Листья темно-зеленые, с блеском, кожистые, овальные, округлые или продолговато-округлые, заостренные, мелкозубчатые, сидят на длинных черешках.",
    },
  ]);
  const setters = {
    searchValue: setSearchValue,
    selectValue: setSelectValue,
  };
  const removeHandler = id => setPosts(posts.filter(post => post.id !== id));
  const addPostHandler = data => {
    setPosts([...posts, { id: +new Date(), ...data }]);
    return true;
  };
  const sortedPosts = useMemo(() => {
    if (!selectValue) return posts;
    return [...posts].sort((a, b) =>
      a[selectValue.value].localeCompare(b[selectValue.value])
    );
  }, [selectValue, posts]);
  const sortAndSearchedPosts = useMemo(() => {
    return [...sortedPosts].filter(p =>
      p.title.toLowerCase().match(searchValue.toLowerCase())
    );
  }, [searchValue, sortedPosts]);
  return (
    <div className="App">
      <Modal />
      <div className="App__header">
        <PostAdd handler={addPostHandler} />
        <PostFilter
          values={{ selectValue, searchValue }}
          handler={(name, data) => setters[name](data)}
        />
      </div>
      <Posts posts={sortAndSearchedPosts} change={removeHandler} />
    </div>
  );
}

export default App;
