import React from 'react';

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter-inner">
        <h3>Stay updated on news and get hot special deals </h3>
        <form action="" className="newsletter-form">
          <div className="form-input-container">
            <label htmlFor="email">Email adress :</label>
            <input className="form-input" type="email" />
          </div>
          <button className="btn newsletter-btn">Send</button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
