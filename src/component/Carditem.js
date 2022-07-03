import { useState } from "react";
import { Button } from "@material-ui/core";

export default function Carditem(props) {
  var date = new Date(`${props.date}`);
  var time=date.toLocaleString('en-IN', { hour: 'numeric', minute: 'numeric', hour12: true })
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var formatted = day + "-" + month + "-" + year;
  var acc = document.querySelectorAll(".accordion");
  var active = null;

  acc.forEach((item, i) => {
    item.addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;

      if (active) {
        active.style.maxHeight = null;
      }

      if (panel !== active) {
        panel.style.maxHeight = panel.scrollHeight + "px";
        active = panel;
      } else {
        active = null;
      }
    });
  });

  const [Away, setAway] = useState([]);
  const [Home, setHome] = useState([]);
  const [live, setlive] = useState([]);

  const set = (id) => {
    fetch(`https://cricket-live-data.p.rapidapi.com/match/${id}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "cricket-live-data.p.rapidapi.com",
        "x-rapidapi-key": "ee04320577mshf6a00189e14657dp168caejsncbfa266427c3",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAway(data.results.fixture.away.name);
        setHome(data.results.fixture.home.name);
        setlive(data.results.live_details.match_summary);
      })

      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <>
      <div className="my-3">
        <div
          className="card"
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            boxShadow: "8px 8px 8px #333334",
            height:"330px"
          }}
        >
          <div className="card-body">
            <h4
              className="card-title"
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              <b>{props.home}</b>
            </h4>
            <h4
              className="card-title"
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              <b>VS</b>
            </h4>
            <h4
              className="card-title"
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              <b>{props.away}</b>
            </h4>
            <h5
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              <p style={{ textAlign: "center" }}>{props.sub}</p>
              
            </h5>
            <p style={{ textAlign: "center" }}>Match Date:- {formatted} at {time} (IST)</p>
            <p className="card-text">{props.result}</p>

            <div className="accordion">
              <Button
                size="small"
                variant="contained"
                color="primary"
                style={{ position: "absolute", bottom: "15px", left: "20px" }}
                onClick={() => {
                  set(props.id);
                }}
              >
                More Details
              </Button>
            </div>
            <div className="panel">
              <p
                className="text"
                style={{
                  borderBottom: "2px solid black",
                  fontWeight: "bolder",
                }}
              >
                {Home} VS {Away} :-
              </p>

              <i
                className="mt-2"
                style={{ marginBottom: "5px", fontWeight: "bold" }}
              >
                {live.toss}
              </i>
              <p style={{ marginBottom: "5px" }}>
                {Home}:{live.home_scores}
              </p>
              <p style={{ marginBottom: "5px" }}>
                {Away}:{live.away_scores}
              </p>
              <b style={{ marginBottom: "5px" }}>{live.status}</b>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
