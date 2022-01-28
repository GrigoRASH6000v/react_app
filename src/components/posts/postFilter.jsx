import React from "react";
import { Select, Option } from "../ui/select";
import { Input } from "../ui/input";

export const PostFilter = props => {
  let { values } = props;
  const options = [
    {
      value: "title",
      title: "заголовку",
    },
    {
      value: "description",
      title: "описанию",
    },
  ];
  return (
    <div className="post-filter">
      <Select
        value={values.selectValue}
        handler={value => props.handler("selectValue", value)}
        placeholder="Сортировка по"
      >
        {options.map(option => (
          <Option {...option} key={option.value} />
        ))}
      </Select>
      <Input
        value={values.searchValue}
        onChange={e => props.handler("searchValue", e.target.value)}
      />
    </div>
  );
};
