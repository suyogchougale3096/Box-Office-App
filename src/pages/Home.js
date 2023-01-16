import React, { useState } from "react";
import MainPageLayout from "../components/MainPageLayout";

const Home = () => {
  let [input, setInput] = useState("");

  const onInputChange = (ev) => {
    setInput(ev.target.value);
    // console.log(ev.target.value);
  };

  // https://api.tvmaze.com/singlesearch/shows?q=mens
  const onSearch = () => {
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
      .then((r) => r.json())
      .then((result) => {
        console.log(result);
      });
  };

  const onKeyDown = (ev) => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };
  return (
    <div>
      <MainPageLayout name="home" />
      <input
        type="text"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <button type="button" onClick={onSearch}>
        Search
      </button>
    </div>
  );
};

export default Home;
