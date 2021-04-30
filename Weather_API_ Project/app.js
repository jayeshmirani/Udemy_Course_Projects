const express= require("express");
const https = require("https");
const bodyParser= require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){

    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){

    cityName= req.body.cityName;
    url= "https://api.openweathermap.org/data/2.5/weather?q=" + cityName +"&appid=a2ec6b56f76bf8bf66d8a0a318aac719&units=metric";
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){

                // convert JSON object to Javascript object
                const weatherData =  JSON.parse(data);
                //console.log(weatherData);

                const temp= weatherData.main.temp;
                console.log(temp);
                const description= weatherData.weather[0].description;
                // convert Javascript object to JSON object

                // const js_object= {
                //     name: "Jayesh Mirani",
                //     roll: "38"
                // };

                // json_object= JSON.stringify(js_object);
                // console.log(json_object);
                const icon = weatherData.weather[0].icon;
                const imageURL= "http://openweathermap.org/img/wn/"+ icon + "@2x.png";
                
                res.write("<h1>Current temperature in " + cityName + " is " + temp + " degree Celsius</h1>");
                res.write("<h3>Weather Description: " + description + "</h3>");
                res.write("<img src= " + imageURL + "></img>");
                res.send();
        });
    });
});

app.listen("3000", function(){
   console.log("Server running on port 3000"); 
});