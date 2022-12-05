import React from "react";
import "../styles/RandomQuote.css";
import { FaQuoteLeft } from "react-icons/fa";
import { FaTumblr } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import RandomQuotesObject from "./RandomQuotesObject";

function RandomQuote() {
  return (
    <>
      <div className="quote-outer">
        <div className="quote-box">
          <div className="quote-text">
            <FaQuoteLeft className="quote-icon" />
            <RandomQuotesObject />
          </div>
          {/* <div className="quote-author">- Henry David Thoreau</div> */}
          <div className="quote-buttons">
            <div className="quote-twitter">
              <BsTwitter className="icon" />
            </div>
            <div className="quote-tumblr">
              <FaTumblr className="icon" />
            </div>
            <div
              className="new-quote"
              onClick={() => window.location.reload(false)}
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
