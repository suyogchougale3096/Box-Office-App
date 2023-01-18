import React from "react";
import Showcards from "./Showcards";

import IMAGE_NOT_FOUND from "../../images/not-found.png";
import { FlexGrid } from "../styled";

const Showgrid = ({ data }) => {
  return (
    <FlexGrid>
      {" "}
      {data.map(({ show }) => (
        <Showcards
          key={show.id}
          id={show.id}
          name={show.name}
          image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
          summary={show.summary}
        />
      ))}
    </FlexGrid>
  );
};

export default Showgrid;
