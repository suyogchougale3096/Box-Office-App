import React, { useState } from "react";
import MainPageLayout from "../components/MainPageLayout";
import { apiGet } from "../misc/config";

const Home = () => {
  let [input, setInput] = useState("");
  let [results, setResults] = useState(null);

  const onInputChange = (ev) => {
    setInput(ev.target.value);
    // console.log(ev.target.value);
  };

  // https://api.tvmaze.com/singlesearch/shows?q=mens
  const onSearch = () => {
    apiGet(`/search/shows?q=${input}`).then((result) => {
      setResults(result);
      // console.log(result);
    });
    // fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
    //   .then((r) => r.json())
    //   .then((result) => {
    //     setResults(result);
    //     console.log(result);
    //   });
  };

  const onKeyDown = (ev) => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No Results.</div>;
    }
    if (results && results.length > 0) {
      return (
        <div>
          {results.map((item) => (
            <div key={item.show.id}>{item.show.name}</div>
          ))}
        </div>
      );
    }
    return null;
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
      {renderResults()}
    </div>
  );
};

export default Home;
