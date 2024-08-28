const { Router } = require("express");
const router = Router();

router.get("/:place", (req, res) => {
    // res.json("working!!");
    // let place = document.getElementById("city").value;
    let place = req.params.place;
  
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?//your_access_token
    ).then((response) => {
      console.log(response);
      response.json().then((data) => {
        console.log(data);
        let lat = data.features[0].center[0];
        let long = data.features[0].center[1];
        console.log(lat, long);
        res.json({
          "lat": lat,
          "long": long
        });
  
        //   document.getElementById("cityname").innerHTML = lat+ " "+long;
      });
    });
  });

  module.exports=router;
