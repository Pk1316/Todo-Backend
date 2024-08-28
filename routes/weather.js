const { Router } = require("express");
const router = Router();

router.get("/:lat/:long", (req, res) => {
    // res.json({
    //     lat:req.params.lat,
    //     long:req.params.long
    // });
    let lat=req.params.lat;
    let long=req.params.long;
    let weatherKey = "your passcode";
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${weatherKey}`;
  
    fetch(url).then((re) => {
      console.log(re);
      re.json().then((data) => {
        console.log(data);
        res.json({
          temp: data.main.temp,
          dis:data.weather[0].description,
          icon:data.weather[0].icon
        });
      });
    });
  });

  module.exports=router;
