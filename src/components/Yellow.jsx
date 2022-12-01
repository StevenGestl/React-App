import React from "react";

function Yellow() {
  return (
    <div className="yellow">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              src="./images/yellowstone.jpg"
              alt="Yellowstone Geyser Pool"
              style={{ height: 400, width: 600 }}
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light" style={{ fontSize: 50 }}>
              Yellowstone National Park
            </h1>
            <p>
              YellowStone may be my favorite National Park I’ve ever been to.
              This love for the park could be from how varied the attractions of
              the park are. You could spend the morning staring into geysers and
              the afternoon looking out from beautiful mountain cliffs.
              Yellowstone is also home to many waterfalls that are breathtaking,
              some of my favorites include the Upper Falls of Yellowstone and
              the Mystic Falls.
              <br></br>
              <br></br>
              While in Yellowstone I saw a ton of wildlife, some of which I
              never expected to. I remember being so excited to see a bison, by
              the end of the trip coming across a bison was almost as normal as
              seeing a white-tale deer in Pennsylvania. We also came across a
              male elk with antlers unlike anything i've ever seen before, it
              was massive. The most surprising wildlife we saw was a mother
              Grizzly bear and her two young cubs. We must’ve been not even ten
              feet from them, fortunately we were in a car.<br></br>
              <br></br>
              If the opportunity ever arises for a trip to Yellowstone, do
              yourself a favor and go.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Yellow;
