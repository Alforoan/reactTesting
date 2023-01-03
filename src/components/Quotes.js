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
      <button className="quotes-button" onClick={handleClick}>
        Click me for an inspirational quote!
      </button>

      <section className="quote-author-container">
        <div className="quote">
          <h4>{quote}</h4>
        </div>
        <p> -{from}</p>
      </section>
    </article>
  );
};

export default Quotes;
