import Carditem from "./Carditem.js";
import React, { useEffect, useState } from "react";
export default function Card(props) {
  const [Results, setResults] = useState([]);
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = yyyy + "-" + mm + "-" + dd;
  

  var a = `${props.category}`;
  

  useEffect(() => {
  
    if (a === "fixtures-by-date") {
      
      fetch(`https://cricket-live-data.p.rapidapi.com/${props.category}/${today}`, {
	"method": "GET",
	headers: {
		"X-RapidAPI-Key": "a13885e6f8mshb6863976f9c74dcp15ff38jsnd774e276b914",
		"X-RapidAPI-Host": "cricket-live-data.p.rapidapi.com",
      	},
})
        .then((res) => res.json())
        .then((data) => {
         
          setResults(data.results);
        })

        .catch((error) => {
          console.log("Error", error);
        });
    } else {
      fetch(`https://cricket-live-data.p.rapidapi.com/${props.category}`, {
	"method": "GET",
	headers: {
		"X-RapidAPI-Key": "a13885e6f8mshb6863976f9c74dcp15ff38jsnd774e276b914",
		"X-RapidAPI-Host": "cricket-live-data.p.rapidapi.com",
      	},
})

        .then((res) => res.json())
        .then((data) => {
          
          setResults(data.results);
        })

        .catch((error) => {
          console.log("Error", error);
        });
    }
  }, []);

  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: "#dbc1ac",

          boxShadow: "8px 8px 8px darkgray",
          borderRadius: "20px",
          border: "1px solid black",
          marginTop: "20px",
        }}
      >
        <h1 className="text-left" id="head" style={{ marginTop: "20px" }}>
          <b>{props.match}</b>
        </h1>

        <div className="row">
          {Results.map((element) => (
            <div className="col-md-4 mb-3">
              <Carditem
                home={element.home.name}
                away={element.away.name}
                sub={element.match_subtitle}
                result={element.result}
                id={element.id}
                date={element.date}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
