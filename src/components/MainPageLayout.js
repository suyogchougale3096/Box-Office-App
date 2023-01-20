import React from "react";
import Navs from "./Navs";
import Title from "./Title";
const MainPageLayout = (childern) => {
  // const name = childern.name;
  return (
    <div>
      <Title
        title="The Box Office App"
        subtitle="Are you looking for a movie or an actor?"
      />
      <Navs />
      {/* <div>This is {name} page.</div> */}
    </div>
  );
};

export default MainPageLayout;
