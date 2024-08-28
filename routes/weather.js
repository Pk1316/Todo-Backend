const { Router } = require("express");
const router = Router();

router.get("/:lat/:long", (req, res) => {
    // res.json({
    //     lat:req.params.lat,
    //     long:req.params.long
    // });
    let lat=req.params.lat;
    let long=req.params.long;
    let weatherKey = "1d099cc58c98c626e6c2d0c6679f0a3f";
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