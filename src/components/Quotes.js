import React from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import data from "./data";

const Quotes = () => {
  const [clicked, setClicked] = React.useState(false);
  const [quote, setQuote] = React.useState("");
  const [from, setFrom] = React.useState("");
  let random = Math.floor(Math.random() * (data.length - 1));
  const handleClick = () => {
    setQuote(data[random].text);
    setFrom(data[random].from);
  };

  return (
    <article>
      <button onClick={handleClick}>
        Click me for an inspirational quote!
      </button>
      <p>
        <span className="quote">{quote}</span> -{from}
      </p>
    </article>
  );
};

export default Quotes;
