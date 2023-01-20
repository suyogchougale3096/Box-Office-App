import React, { useState } from "react";
import ActorGrid from "../components/actor/ActorGrid";
import MainPageLayout from "../components/MainPageLayout";
import Showgrid from "../components/show/Showgrid";
import { apiGet } from "../misc/config";
import { useLastQuery } from "../misc/custom-hooks";
import {
  RadioInputsWrapper,
  SearchButtonWrapper,
  SearchInput,
} from "./Home.styled";
import CustomRadio from "../components/CustomRadio";

const Home = () => {
  let [input, setInput] = useLastQuery();
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
      <SearchInput
        type="text"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
        placeholder="Search For sometrhing."
      />

      <RadioInputsWrapper>
        <div>
          <CustomRadio
            label="Shows"
            id="shows-search"
            value="shows"
            checked={isShowSearch}
            onChange={onRadioChange}
          />
        </div>
        <div>
          <CustomRadio
            label="Actors"
            id="actors-search"
            value="people"
            checked={!isShowSearch}
            onChange={onRadioChange}
          />
        </div>
      </RadioInputsWrapper>

      <SearchButtonWrapper>
        <button type="button" onClick={onSearch}>
          Search
        </button>
      </SearchButtonWrapper>
      {renderResults()}
    </div>
  );
};

export default Home;
