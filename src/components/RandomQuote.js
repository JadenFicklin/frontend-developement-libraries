import React, { useState } from "react";
import "../styles/RandomQuote.css";
import { FaQuoteLeft } from "react-icons/fa";
import { FaTumblr } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import getRandomQuote from "./getRandomQuote";

function RandomQuote() {
  const [quote, setQuote] = useState(getRandomQuote());

  return (
    <>
      <div className="quote-outer">
        <div className="quote-box">
          <div className="quote-text">
            <FaQuoteLeft className="quote-icon" />
            {quote.text}
          </div>
          <div className="quote-author">-{quote.source}</div>
          <div className="quote-buttons">
            <div className="quote-twitter">
              <BsTwitter className="icon" />
            </div>
            <div className="quote-tumblr">
              <FaTumblr className="icon" />
            </div>
            <div
              className="new-quote"
              onClick={() => setQuote(getRandomQuote())}
            >
              New quote
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RandomQuote;
