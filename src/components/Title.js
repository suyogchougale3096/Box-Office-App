import React, { memo } from "react";
import { TitleWrapper } from "./Title.styled";

const Title = (childern) => {
  const title = childern.title;
  const subtitle = childern.subtitle;
  return (
    <TitleWrapper>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </TitleWrapper>
  );
};

export default memo(Title);
