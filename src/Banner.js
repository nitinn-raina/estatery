import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@mui/material";
import Search from "./Search";
import { useHistory } from "react-router-dom";

function Banner() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchButton"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>

      <div className="banner__info">
        <h1>Find it. Tour it. Own it.</h1>
        <h5>Let’s find a home that’s perfect for you</h5>

        <Button onClick={() => history.push("/search")} variant="outlined">
          Rent a place
        </Button>
      </div>
    </div>
  );
}

export default Banner;
