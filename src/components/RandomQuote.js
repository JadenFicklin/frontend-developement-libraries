import React from "react";
import "../styles/RandomQuote.css";

function RandomQuote() {
  return (
    <>
      <div className="quote-outer">
        <div className="quote-box">
          <div className="quote-text">
            Go confidently in the direction of your dreams. Live the life you
            have imagined.
          </div>
          <div className="quote-author">- Henry David Thoreau</div>
          <div className="quote-buttons">
            <div className="quote-twitter">Tw</div>
            <div className="quote-tumblr">Tu</div>
            <div className="new-quote">
              git
              <button>New quote</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RandomQuote;
