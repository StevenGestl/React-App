import React from "react";

function Home() {
  return (
    <div className="Home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              src="./images/national.jpg"
              alt="National Park Logo"
              style={{ height: 400, width: 600 }}
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light" style={{ fontSize: 50 }}>
              Home
            </h1>
            <p>
              For this website I’ll be discussing a few of my favorite National
              Parks I’ve been fortunate enough to visit. I love traveling and am
              a big fan of hiking in my spare time. I gained my love for hiking
              as a kid, my brother and I would roam the woods for hours. We’d
              spend our days searching for caves and waterfalls, although we
              only found small creeks. <br></br>
              In the summer of 2017 we took a cross country roadtrip to
              Yellowstone National Park. My first and only visit to Yellowstone
              is something I’ll remember for the rest of my days. From geysers
              to mountain cliffs Yellowstone has something around every corner.
              2019 was the year of my first commercial flight to Colorado, home
              of Rocky Mountain National Park. From the high altitude tundra to
              the wildlife it’s always a delight to explore the park.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
