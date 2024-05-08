import React from "react";

const LinkButton = ({ linkObj }) => {
  return (
    <a className="font-bold text-sm md:text-base underline" href={linkObj.link}>
      {linkObj.text}
    </a>
  );
};

export default LinkButton;
