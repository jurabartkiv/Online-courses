import React, { MouseEventHandler } from "react";
import { useSelector } from "react-redux";
import { filters } from "./tags";

export default function Tab({ activeTab, handleFiltering }: any) {
  // const tagsSet = new Set(["all"]);
  // const tags = useSelector((state: any) =>
  //   state.courses.courses.map((item: any) => {
  //     item.tags.forEach((el: any) => tagsSet.add(el));
  //   })
  // );
  // console.log(tagsSet);

  return (
    <>
      {filters.map((tag) => {
        return (
          <h2
            key={tag.value}
            className={`filter ${activeTab === tag.title ? "active" : ""}`}
            onClick={(e) => handleFiltering(e, tag.value)}
          >
            {tag.title}
          </h2>
        );
      })}
    </>
  );
}
