import React from 'react';

const Header = () => {
    return (
        <div className="banner">
        <div className="banner-text text-center pt-5">
          <h1 className="pt-5 mt-5">Best food waiting for your belly</h1>
          <div className="container text-center pt-4">
            <form style={{margin: '0 auto'}} className="d-flex w-50">
              <input className="form-control me-2" type="search" placeholder="Search Food Items" aria-label="Search" />
              <button className="btn-red" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Header;