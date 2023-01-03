import React from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import data from "./data";

const Quotes = () => {
  const [clicked, setClicked] = React.useState(false);
  const [quote, setQuote] = React.useState("");

  let random = Math.floor(Math.random() * (data.length - 1));
  const handleClick = () => {
    setQuote(data[random].text);
  };

  return (
    <article>
      <button onClick={handleClick}>
        Click me for an inspirational quote!
      </button>
      <p>{quote}</p>
    </article>
  );
};

export default Quotes;
