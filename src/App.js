import React from "react";
// import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: "Lorem",
    content:
      "Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
  },
  {
    title: "dummy",
    content:
      "text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "It has survived",
    content:
      "not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
];

export default () => {
  return (
    <div>
      <Search />
      {/* /* <Accordion items={items} /> */}
    </div>
  );
};
