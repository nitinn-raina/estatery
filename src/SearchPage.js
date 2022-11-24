import React from "react";
import "./SearchPage.css";
import { Button } from "@mui/material";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 results · London · 3 Months </p>
        <h1>Available Properties</h1>
        <Button variant="outlined">Location</Button>

        <Button variant="outlined">Type of property</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Stay Duration</Button>
        <Button variant="outlined">More filters</Button>
      </div>

      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="Ideal for 2 · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.73}
        price="£700 / month"
        total="£2100 total"
      />

      <SearchResult
        img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
        location="Private room in center of London"
        title="Independant luxury studio apartment"
        description="Ideal for 5 · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen"
        star={4.3}
        price="£500 / month"
        total="£1500 total"
      />

      <SearchResult
        img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
        location="Private room in center of London"
        title="London Studio Apartments"
        description="Ideal for 6 · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine"
        star={3.8}
        price="£300 / month"
        total="£900 total"
      />
      <SearchResult
        img="https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
        location="Private room in center of London"
        title="30 mins to Oxford Street, Excel London"
        description="Ideal for 1 · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.1}
        price="£600 / month"
        total="£1800 total"
      />
      <SearchResult
        img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg"
        location="Private room in center of London"
        title="Spacious Peaceful Modern Bedroom"
        description="Ideal for 3 · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning"
        star={5.0}
        price="£400 / month"
        total="£1200 total"
      />
      <SearchResult
        img="https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937"
        location="Private room in center of London"
        title="The Blue Room In London"
        description="Ideal for 2 · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine"
        star={4.23}
        price="£800 / night"
        total="£2400 total"
      />
      <SearchResult
        img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
        location="Private room in center of London"
        title="5 Star Luxury Apartment"
        description="Ideal for 3 · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={3.85}
        price="£900 / month"
        total="£2700 total"
      />
    </div>
  );
}

export default SearchPage;
