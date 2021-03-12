import React from "react";
import s from "./button.module.css";

const Button = ({ getFetchImages }) => {
  return (
    <button className={s.Button} type="button" onClick={getFetchImages}>
      Load more
    </button>
  );
};

export default Button;
