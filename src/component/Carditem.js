import React from "react";
import { Button } from "@material-ui/core";
import { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";

export default function Carditem(props) {
  var date = new Date(`${props.date}`);
  var time = date.toLocaleString("en-IN", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var formatted = day + "-" + month + "-" + year;
  var acc = document.querySelectorAll(".accordion");
  var active = null;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [Away, setAway] = useState([]);
  const [Home, setHome] = useState([]);
  const [live, setlive] = useState([]);
  const [title, settitle] = useState([]);
  const [team, setteam] = useState([]);
  const [team1, setteam1] = useState([]);

  const set = (id) => {
    fetch(`https://cricket-live-data.p.rapidapi.com/match/${id}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a13885e6f8mshb6863976f9c74dcp15ff38jsnd774e276b914",
        "X-RapidAPI-Host": "cricket-live-data.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAway(data.results.fixture.away.name);
        setHome(data.results.fixture.home.name);
        setlive(data.results.live_details.match_summary);
        settitle(data.results.fixture);
        setteam(data.results.live_details.teamsheets.away);
        setteam1(data.results.live_details.teamsheets.home);
        
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
            height: "350px",
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
            <p style={{ textAlign: "center" }}>
              Match Date:- {formatted} at {time} (IST)
            </p>
            <p className="card-text" style={{ textAlign: "center" }}>{props.result}</p>

            <Button
              size="small"
              variant="contained"
              color="primary"
              style={{ position: "absolute", bottom: "15px", left: "20px" }}
              onClick={() => {
                handleClickOpen();
                set(props.id);
              }}
            >
              More Details
            </Button>
            <Dialog
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
            >
              <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                <p
                  className="text"
                  style={{
                    fontFamily: "Comic Neue, cursive",
                    marginBottom: "0px",
                    fontWeight: "bolder",
                  }}
                >
                  {title.match_title} :-
                </p>
              </DialogTitle>
              <DialogContent
                dividers
                style={{
                  fontFamily: "Comic Neue, cursive",
                }}
              >
                <Typography gutterBottom>
                  <h5
                    style={{
                      marginBottom: "5px",
                      fontFamily: "Comic Neue, cursive",
                    }}
                  >
                    {Home}:{live.home_scores}
                  </h5>
                </Typography>
                <Typography gutterBottom>
                  <h5
                    style={{
                      marginBottom: "5px",
                      fontFamily: "Comic Neue, cursive",
                    }}
                  >
                    {Away}:{live.away_scores}
                  </h5>
                </Typography>
                <Typography
                  gutterBottom
                  style={{ marginBottom: "10px !important" }}
                >
                  <h4>
                    <b
                      style={{
                        marginBottom: "10px",
                        fontFamily: "Comic Neue, cursive",
                        borderBottom: "2px solid black",
                      }}
                    >
                      {live.status}
                    </b>
                  </h4>
                </Typography>

                <h4 style={{ marginTop: "20px",borderBottom:"1px solid gray" }}>Match Info:-</h4>
                <Typography
                  gutterBottom
                  style={{ fontFamily: "Comic Neue, cursive" }}
                >
                  <b style={{ fontFamily: "Comic Neue, cursive" }}>
                    Toss:<br></br>
                    {live.toss}
                  </b>
                </Typography>
                <Typography gutterBottom>
                  <b style={{ fontFamily: "Comic Neue, cursive" }}>
                    Venue:<br></br>
                    {title.venue}
                  </b>
                </Typography>

                <h5 style={{ fontFamily: "Comic Neue, cursive" }}>
                  <b>Teams:</b>
                </h5>
                <Typography gutterBottom>
                  <b style={{ fontFamily: "Comic Neue, cursive" }}>{Home}:</b>
                  {team1.map((element) => (
                    <h6
                      style={{
                        fontFamily: "Comic Neue, cursive",
                        marginBottom: "0px",
                      }}
                    >
                      <br></br>
                      {element.player_name}
                    </h6>
                  ))}
                </Typography>
                <Typography gutterBottom>
                  <b style={{ fontFamily: "Comic Neue, cursive" }}>
                    <br></br>
                    {Away}:
                  </b>
                  {team.map((element) => (
                    <h6
                      style={{
                        fontFamily: "Comic Neue, cursive",
                        marginBottom: "0px",
                      }}
                    >
                      <br></br>
                      {element.player_name}
                    </h6>
                  ))}
                </Typography>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </div>
    </>
  );
}
