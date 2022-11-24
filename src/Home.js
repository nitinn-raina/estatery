import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

//ES7 snippets extension to do rfce

function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="home__section">
        <Card
          src="https://theroyalescape.in/wp-content/uploads/2015/05/GetAway-The-royal-escape-Small.jpg"
          title="Weekend Getaway"
          description="Hotels to let you destress and enjoy the awaited Weekend."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Long Vacations"
          description="Spaces that are more than just a place to sleep."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Second Home"
          description="Comfortable private places, with room for friends or family."
        />
      </div>
      <div className="home__section">
        <Card
          src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
          title="3 Bedroom Flat in Juhu"
          description="A stunning view of the beachside in Mumbai"
          price="₹1,50,000/month"
        />
        <Card
          src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
          title="Penthouse in Manali"
          description="Enjoy the amazing sights of Montains with this stunning penthouse"
          price="₹75,000/month"
        />
        <Card
          src="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="1 Bedroom apartment"
          description="Great amenities and a fabolous shopping complex nearby"
          price="₹30,000/month"
        />
      </div>
    </div>
  );
}

export default Home;
