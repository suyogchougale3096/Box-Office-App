import React, { useState } from "react";
import ActorGrid from "../components/actor/ActorGrid";
import MainPageLayout from "../components/MainPageLayout";
import Showgrid from "../components/show/Showgrid";
import { apiGet } from "../misc/config";

const Home = () => {
  let [input, setInput] = useState("");
  let [results, setResults] = useState(null);
  const [searchOption, setsearchOption] = useState("shows");

  const isShowSearch = searchOption === "shows";

  const onInputChange = (ev) => {
    setInput(ev.target.value);
    // console.log(ev.target.value);
  };

  // https://api.tvmaze.com/singlesearch/shows?q=mens
  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`).then((result) => {
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
      return results[0].show ? (
        <Showgrid data={results} />
      ) : (
        // results.map((item) => <div key={item.show.id}>{item.show.name}</div>)
        <ActorGrid data={results} />
        // results.map((item) => (
        //   <div key={item.person.id}>{item.person.name}</div>
        // ))
      );
    }
    return null;
  };

  const onRadioChange = (ev) => {
    setsearchOption(ev.target.value);
  };
  // console.log(searchOption);
  return (
    <div>
      <MainPageLayout name="home" />
      <input
        type="text"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
        placeholder="Search For sometrhing."
      />

      <div>
        <label htmlFor="search-shows">
          Shows
          <input
            id="search-shows"
            type="radio"
            value="shows"
            checked={isShowSearch}
            onChange={onRadioChange}
          />
        </label>
        <label htmlFor="search-actors">
          Actors
          <input
            id="search-actors"
            type="radio"
            value="people"
            checked={!isShowSearch}
            onChange={onRadioChange}
          />
        </label>
      </div>
      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResults()}
    </div>
  );
};

export default Home;
