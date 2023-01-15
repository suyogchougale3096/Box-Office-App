import React from "react";

const Title = (childern) => {
  const title = childern.title;
  const subtitle = childern.subtitle;
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default Title;
