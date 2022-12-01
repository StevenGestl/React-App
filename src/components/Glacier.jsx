import React from "react";

function Glacier() {
  return (
    <div className="glacier">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              src="./images/glacier.jpg"
              alt="Glacier Mountains"
              style={{ height: 400, width: 600 }}
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light" style={{ fontSize: 50 }}>
              Glacier National Park
            </h1>
            <p>
            We traveled to Glacier National Park in 2019 as part of a bigger trip that included Wisconsin for an airshow, and Colorado for Rocky Mountain National Park. The trip was incredible, but I must warn that the drive back was quite daunting. When we set out GPS it said it would take one day and nine hours to return home. We managed to do this drive in one shot between two drivers, I wouldn't recommend doing it that way. 
              <br></br>
             
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Glacier;
