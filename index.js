const express = require("express");
const cors = require('cors');
const geoLoaction = require("./routes/geoLoaation");
const weather = require("./routes/weather");
const port = 3000;
const app = express();
app.use(cors());
app.use("/geoLoaction", geoLoaction);
app.use("/weather",weather);




app.get("/",(req,res)=>{
    res.json({
        msg: "working!!"
    });
})

// app.get("/geoLoaction/:place", (req, res) => {
//   // res.json("working!!");
//   // let place = document.getElementById("city").value;
//   let place = req.params.place;

//   fetch(
//     `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?your_accesstoken).then((response) => {
//     console.log(response);
//     response.json().then((data) => {
//       console.log(data);
//       let lat = data.features[0].center[0];
//       let long = data.features[0].center[1];
//       console.log(lat, long);
//       res.json({
//         "lat": lat,
//         "long": long
//       });

//       //   document.getElementById("cityname").innerHTML = lat+ " "+long;
//     });
//   });
// });

// app.get("/weather/:lat/:long", (req, res) => {
//   // res.json({
//   //     lat:req.params.lat,
//   //     long:req.params.long
//   // });
//   let lat=req.params.lat;
//   let long=req.params.long;
//   let weatherKey = "type your passcode";
//   let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${weatherKey}`;

//   fetch(url).then((re) => {
//     console.log(re);
//     re.json().then((data) => {
//       console.log(data);
//       res.json({
//         temp: data.main.temp,
//       });
//     });
//   });
// });


app.listen(port, () => {
  console.log(`Listing at port : ${port}`);
});
